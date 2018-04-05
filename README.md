# texlocal-npm
Basic Textlocal Module to send sms using nodejs


Created Using Node and Express-Framework

Install Basic modules like request and typescript or just complie code into javascript

This module is also added in npm packages

npm install node_textlocal --save


export async function sendTextLocalSMS(mobileNumber, MSG_TEMPLATE) {
    let options = {
        'apikey': TEXT_LOCAL_API_KEY,
        'message': MSG_TEMPLATE,
        'sender': TEXT_LOCAL_SENDER,
        'numbers': mobileNumber
    }
    return new Promise((resolve, reject) => {
        request.post({ url: TEXT_LOCAL_HOST, form: options }, (error, response, body) => {
            if (error) {
                return reject(error);
            }
            resolve({ response, body });
        })
    })
}