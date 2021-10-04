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

export const classifyImageFiles = async (fileObjectList) => {
  const imageArray = await Promise.all(
    fileObjectList.map(({ file }) => generateBase64Encoding(file)) // Generate Base64 encoding for image files
  );

  const imageData = {
    instances: imageArray.map((base64) => [base64]), // JSON format for TF Model endpoint
  };

  const config = {
    url:
      "https://grx408sfch.execute-api.ap-southeast-2.amazonaws.com/prod/make-classification", // AWS Endpoint
    method: "post",
    data: imageData,
    headers: {
      Accept: "application/json",
    },
  };

  const response = await axios(config);
  try {
    const scores = response.data.predictions;
    const classifications = fileObjectList.map((fileObject, index) => {
      const {
        file: { name: filename },
      } = fileObject;
      return {
        filename: filename,
        score: scores[index][0],
        ...(fileObject.label && {
          label: fileObject.label,
        }),
      };
    });
    return classifications;
  } catch (error) {
    console.error(error);
  }
};
