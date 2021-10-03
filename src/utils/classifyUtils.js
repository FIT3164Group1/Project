import { encode, trim } from "url-safe-base64";
import axios from "axios";

const generateBase64Encoding = async (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = async () => {
      try {
        // Resolve the promise with the response value
        const string = reader.result.split(",")[1];
        const urlSafeEncoding = trim(encode(string));
        resolve(urlSafeEncoding);
      } catch (err) {
        reject(err);
      }
    };
    reader.onerror = (error) => {
      reject(error);
    };
    reader.readAsDataURL(file);
  });
};

export const classifyImageFiles = async (fileList) => {
  const imageArray = await Promise.all(fileList.map(generateBase64Encoding));

  const imageData = {
    instances: imageArray.map((base64) => [base64]),
  };

  const config = {
    url:
      "https://grx408sfch.execute-api.ap-southeast-2.amazonaws.com/prod/make-classification",
    method: "post",
    data: imageData,
    headers: {
      Accept: "application/json",
    },
  };

  const response = await axios(config);
  try {
    const predictions = response.data.predictions;
    const classifications = fileList.map((file, index) => [
      file.name,
      predictions[index][0],
    ]);
    return classifications;
  } catch (error) {
    console.error(error);
  }
};
