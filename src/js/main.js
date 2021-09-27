import '../css/styles.css';
const axios = require('axios').default;

const URL_STRING = 'https://grx408sfch.execute-api.ap-southeast-2.amazonaws.com/prod/make-classification';
const DATA = [

];

const sendClassificationRequest = async(URL_STRING, DATA) => {
    try {
        const resp = await axios({
            method: 'POST',
            url: URL_STRING,
            data: DATA,
        });
        console.log(resp.data);
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};
sendClassificationRequest(URL_STRING, DATA)

document.querySelector('#classifyButton').addEventListener('click', () => console.log('Click'))