## Contents


## CORS
CORS is a security mechanism that blocks web pages from accessing resourses from a different domain by default. It enables the browser to check with the server and receive permission to access the requested resources based on the security policy configured on the server.
```
const cors = require('cors');

// Enable all domain to access the resources
app.use(cors());

const corsOption = {
    origin: 'https://example.com'
};

// Only enable example.com to access the resource
app.use(cors(corsOption))
```

## morgan
Logger
## helmet
Helmet helps secure Express apps by setting HTTP response headers.
## dotenv
Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env
Create a .env file in the root of your project:

`.env`
```
S3_BUCKET="YOURS3BUCKET"
SECRET_KEY="YOURSECRETKEYGOESHERE"
```
`app.js`
```
require('dotenv').config()
console.log(process.env.S3_BUCKET) // YOURS3BUCKET
```