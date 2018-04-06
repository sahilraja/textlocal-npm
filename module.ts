

import * as request from "request";
const TEXT_LOCAL_HOST = 'https://api.textlocal.in/send/';
const TEXT_LOCAL_API_KEY = process.env.TEXT_LOCAL_API_KEY ||'YOUR_TEXT_LOCAL_API_KEY';
const TEXT_LOCAL_USERNAME = process.env.TEXT_LOCAL_USERNAME || 'TEXT_LOCAL_USERNAME';
const TEXT_LOCAL_SENDER =  process.env.TEXT_LOCAL_SENDER ||'txtlcl';//BASIC SENDER ID (REPLACE IT WITH YOUR SENDER ID LATER)
var MSG_TEMPLATE = "TEXTLOCAL"

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

