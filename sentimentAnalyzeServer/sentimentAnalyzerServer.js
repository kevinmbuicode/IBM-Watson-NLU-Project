const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

function getNLUInstance() {
    let api_key = process.env.API_KEY;
    let api_url = process.env.API_URL;

    const NaturalLanguageUnderstaningV1 = require('ibm-watson/natural-language-understanding/v1');
    const { IamAuthenticator } = require('ibm-watson/auth');

    const naturalLanguageUnderstaning = NaturalLanguageUnderstaningV1({
        version: '2021-06-20',
        authenticator: new IamAuthenticator({
            apikey: api_key,
        }),
        serviceURL: api_url,
    });
    return naturalLanguageUnderstaning;
}
