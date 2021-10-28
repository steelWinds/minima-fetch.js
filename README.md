# minima.js

It simple lib for simplification work with ```fetch```

# Installing 

1. Download ```node.js```
2. Install this with **npm**: ```npm i minima.js --save``` or pnpm ```pnpm add minima.js```
3. Import in your project with import **ES6**: ```import { minima } from 'minima.js'```

# Getting Started

This library already contains the necessary polyfill for ```fetch```. As well as initial errors during network requests are processed. So to just start using the script, you just need to pass it the necessary url and settings!: ```let response = await minima(url, settings);```

# Settings 

- ```method (String) (Optional)``` - set method request
- ```headers (Object) (Optional)``` - set headers of request
- ```body (Object) (Optional)``` - set body of request
- ```json, text (Boolean) (Optional)``` - set transformation type
- ```readStream (Boolean)``` - get ReadableStreat.getReader()

# License

License of project located in LICENSE file

# Authors 

[Kirill](http://github.com/steelWinds)
