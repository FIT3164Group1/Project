import { validateImage } from "image-validator";

const getUploadedFileDimensions = (file) =>
  new Promise((resolve, reject) => {
    try {
      let img = new Image();

      img.onload = () => {
        const width = img.naturalWidth,
          height = img.naturalHeight;

        window.URL.revokeObjectURL(img.src);

        return resolve({ width, height });
      };

      img.src = window.URL.createObjectURL(file);
    } catch (exception) {
      return reject(exception);
    }
  });

const isValidImage = async (file) => {
  if (await validateImage(file)) {
    const { width, height } = await getUploadedFileDimensions(file);
    if (width == 224 && height == 224) {
      return file;
    } else {
      console.log(
        `FILE: ${file.name} \nImage file has incorrect dimensions. Please ensure your image dimensions are 224px x 224px.`
      );
      return false;
    }
  } else {
    console.log(
      `FILE: ${file.name} \nUploaded file is not a valid image file.`
    );
    return false;
  }
};

export const filterValidImages = async (fileList) => {
  const results = await Promise.all(fileList.map(isValidImage)); // Return array with false for invalid images
  return results.filter((file) => file != false); // Filter out invalid files
};
