import {ReSMS} from "@resms/sdk";

const RESMS_API_KEY = 'your_api_key_here';

const resms = new ReSMS(RESMS_API_KEY);

const response = await resms.sms.send({
    to: "+33787195650",
    message: "Welcome to ReSMS!",
    senderId: "ReSMS", // Available for pro users
});

console.log(response);