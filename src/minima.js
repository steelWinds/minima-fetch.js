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
        text = false
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

    try {
        networkResponse = await fetch(url, requestObject);
    } catch(err) {
        throw new NetworkError('Request is failed');
    }

    if (networkResponse.ok) {
        if (json === true) {
            networkResponse = networkResponse.json();
        } else if (text === true) {
            networkResponse = networkResponse.text();
        }

        return networkResponse;
    } else {
        throw new NetworkError('Request is failed', networkResponse.status);
    }
};

export { minima };


