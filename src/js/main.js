import "../css/styles.css";
const axios = require("axios").default;
// import Image from '../../Miscellaneous/images/msi1.png'
// import JSON from '../../Miscellaneous/dummy.json'
// import { validateImage } from "image-validator"

const URL_STRING =
  "https://grx408sfch.execute-api.ap-southeast-2.amazonaws.com/prod/make-classification";
const DATA = [];

const sendClassificationRequest = async (URL_STRING, DATA) => {
  try {
    const resp = await axios({
      method: "POST",
      url: URL_STRING,
      data: DATA,
    });
    console.log(resp.data);
  } catch (err) {
    // Handle Error Here
    console.error(err);
  }
};
sendClassificationRequest(URL_STRING, DATA);

// const fileValidation = async(file) => {
//     const isValidImage = await validateImage(file)
//     return isValidImage
// }

document
  .querySelector("#classifyButton")
  .addEventListener("click", () => console.log("Click"));
