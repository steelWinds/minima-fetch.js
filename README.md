# minima-fetch.js

It simple lib for simplification work with ```fetch```

# Installing 

1. Download ```node.js```
2. Install this with **npm**: ```npm i minima-fetch.js --save``` or pnpm ```pnpm add minima-fetch.js```
3. Import in your project with import **ES6**: ```import { minima } from 'minima-fetch.js'```

# Getting Started

This library already contains the necessary polyfill for ```fetch```. As well as initial errors during network requests are processed. So to just start using the script, you just need to pass it the necessary url and settings!: ```let response = await minima(url, settings);```

# Settings 

- ```method (String) (Optional)``` - set method request
- ```headers (Object) (Optional)``` - set headers of request
- ```body (Object) (Optional)``` - set body of request
- ```json, text (Boolean) (Optional)``` - set transformation type
- ```readStream (Boolean) (Optional)``` - get ReadableStream.getReader()

# Returns

## Return valid object 

- ***if you set transform response object*** - { response: ```networkResponse```, data: ```your transform data``` }
- ***if you not set transform data*** - ```Object (networkResponse)```

## Return error object 

- ***fetch require error*** - { message: 'Request is failed' }
- ***incorrect response status*** - {
  'Request is incorrect, server error', 
  networkResponse.status, 
  Object (errors)}

# License

License of project located in LICENSE file

# Authors 

[Kirill](http://github.com/steelWinds)
