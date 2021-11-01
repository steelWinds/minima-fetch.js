import 'regenerator-runtime/runtime.js';
import { fetch } from 'whatwg-fetch';
import { NetworkError } from './modules/NetworkError.js';

let minima = async (
    url = '',
    {
        method = 'GET',
        headers = {},
        body = {},
        json = false,
        text = false,
        readStream = false
    } = {}
) => {

    let requestObject = {
        method: method,
        headers: headers,
    };

    if (method === 'POST' || method === 'PUT') {
        requestObject.body = body;
    }

    let networkResponse = null;
    let transformResponse = null;

    try {
        networkResponse = await fetch(url, requestObject);
    } catch(err) {
        throw new NetworkError('Request is failed');
    }

    if (networkResponse.ok) {
        if (json === true) {
            transformResponse = await networkResponse.json();
        } else if (text === true) {
            transformResponse = await networkResponse.text();
        } else if (readStream === true) {
            transformResponse = networkResponse.body.getReader();
        } else {
            return networkResponse;
        }

        return {
            response: networkResponse,
            data: transformResponse
        };
    } else {
        let errorMessages = await networkResponse.json();
        let message = 'Request is failed'; 

        if (errorType in errorMessages) {
            message = errorMessages[errorType][0];
        }

        throw new NetworkError(message, networkResponse.status);
    }
};

export { minima };


