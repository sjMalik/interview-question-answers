1. [What is NodeJS?](#what-is-node-js)
2. [What is callback hell?](#what-is-callback-hell)
3. [What is Inversion Of Control?](#what-is-inversion-of-control)
4. [How to escape from a callback hell?](#how-to-escape-from-a-callback-hell)


## What is node js?
Node.js is the JavaScript runtime environment that is based on Google’s V8 Engine i.e. with the help of Node.js we can run the JavaScript outside of the browser. Other things that you may or may not have read about Node.js is that it is single-threaded, based on event-driven architecture, and non-blocking based on the I/O model.
Node.js application runs only on a single thread and by that, It means whether that Node.js application is being used by 5 users or 5 million users, it will only run on a single thread which makes the Node.js application blockable (which means that a single line of code can block the whole app because an only single thread is being used). So, to keep the Node.js application running, asynchronous code must be used everywhere having callback functions because as we know that asynchronous code keeps on running in the background and the callback gets executed as soon as the promise gets resolved rather than synchronous code which blocks the whole application until it gets finished executing. But, we can still use synchronous code however at some place in our application and that place is before our application enters Event-loop. Event-loop is what allows Node.js applications to run non-blocking asynchronous I/O-based operations i.e, all the asynchronous code is managed and executed within the event-loop and before that, we can use our synchronous code which is in this case known as Top-Level code

![](./images/event_loop.png)

## What is callback hell?
Callback Hell is essentially nested callbacks stacked below one another forming a pyramid structure. Every callback depends on/waits for the previous callback, thereby making a pyramid structure that affects the readability and maintainability of the code.
```
setTimeout(()=> {
    console.log('Hello')
    setTimeout(()=> {
        console.log('NodeJS');
        setTimeout(()=> {
            console.log('World')
        }, 1000)
    }, 1000)
}, 1000)
```

## What is Inversion Of Control?
when we pass a function to other function as a callback we are giving the called function the control of whether to even call it or not or maybe call it in a wrong context. For example a success callback is called when an error occours inside a called function (maybe due to human error while writing the code  for called function), this type of giving up of control over our functions is known as inversion of control.


## How to escape from a callback hell?
* JavaScript provides an easy way of escaping from callback hell. This is done by event queue and promises.
* A promise is a returned object from any asynchronous function, to which callback methods can be added based on the previous function’s result.
* Promises use .then() method to call async callbacks. We can chain as many callbacks as we want and the order is also strictly maintained.
* Promises use .fetch() method to fetch an object from the network. It also uses .catch() method to catch any exception when any block fails.
* So these promises are put in the event queue so that they don’t block subsequent JS code. Also once the results are returned, the event queue finishes its operations.
* There are also other helpful keywords and methods like async, wait, set timeout() to simplify and make better use of callbacks.

## What is Promis.all()?
It is actually a method of Promise object that returns a single Promise after receiving one or more promises as input. when all of the Promises in the input are satisfied, the returning promise is fulfilled. when any of the inputs, or promises are refused, it rejects a promise with this first rejection reason.
```
Promise.all(promise1, promiese2, ...).then(result=> {}).catch(error=> console.log(error))
```
```
try {
  let result = Promise.all([first_promise, second_promise, third_promise]);
  result.then((data) => console.log(data));
} catch (error) {
  console.log(error);
}
```

## How to choose node_modules?
### Factors
* Number of downloads
* How recently updated
* History of updates (has it been updated often over a long period of time)
* Number of contributors
* Have well-known/trusted developers and maintainers started it? [a]
* Do other important packages depend on it? [b]
* Is the package well-documented and has its own website?
* Does the module have test coverage?
### Github factors: 
updated: As of npm 1.2.20 and forward, modules without repository fields will show missing repository fields warning. (Nice touch to put a little pressure on people to package up their modules correctly.)
* Number of forks
* Number of commits
* Are issues being closed on GitHub, or have the same issues been open for a long time?

## What is the difference between Authentication and Authorization
-------------------------------------------------------------------
| Authentication | Authorization |
|----   | ---------
|In the authentication process, the identity of users are checked for providing the access to the system.      | While in authorization process, a the person’s or user’s authorities are checked for accessing the resources.
|In the authentication process, users or persons are verified.      | While in this process, users or persons are validated.
|Authentication determines whether the person is user or not.   | While it determines What permission does the user have?
|Popular Authentication Techniques- Password-Based Authentication, Passwordless Authentication,
2FA/MFA (Two-Factor Authentication / Multi-Factor Authentication), Single sign-on (SSO), Social authentication  |Popular  Authorization Techniques- Role-Based Access Controls (RBAC), JSON web token (JWT) Authorization, SAML Authorization, OpenID Authorization, OAuth 2.0 Authorization

## How do you secure the API?
### Use throttling and rate-limiting: 
Throttling involves setting a temporary state that allows the API to evaluate every request and is often used as an anti-spam measure or to prevent abuse or denial-of-service attacks. There are two primary considerations when implementing the throttling feature: how much data should be allowed per user, and when should the limit be enforced?
On the other hand, rate-limiting helps administer REST API security by avoiding [DoS](https://crashtest-security.com/denial-of-service-attack/) and [Brute force attacks](https://crashtest-security.com/brute-force-attacks/). In some APIs, developers set soft limits, which allow clients to exceed request limits for a brief duration. Setting timeouts is one of the most straightforward API security best practices, as it can handle both synchronous and asynchronous requests

### Express Rate Limit
Basic rate-limiting middleware for Express. Use to limit repeated requests to public APIs and/or endpoints such as password reset. Plays nice with express-slow-down. This module does not share state with other processes/servers by default. If you need a more robust solution, I recommend using an external store.
```
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,   // 15 minutes
    max: 100,                   // Limit each IP to 100 requests per window per minutes
    standardHeaders: true,      // Return ratelimit info in the `Ratelimit - *` headers
    legacyHeaders: false        // Disable `X-Ratelimit-*` headers
});

// Apply rate limiting middleware to all the requests
app.use(limiter);
```

### Express Slow Down
Basic rate-limiting middleware for Express that slows down responses rather than blocking them outright. Use to limit repeated requests to public APIs and/or endpoints such as password reset. Plays nice with Express Rate Limit

Note: this module does not share state with other processes/servers by default. Memory Store (default, built-in) - stores hits in-memory in the Node.js process. when using express-slow-down and express-rate-limit with an external store, you'll need to create two instances of the store and provide different prefixes so that they don't double-count requests.
```
const slowDown = request('express-slow-down');

app.enable("trust proxy");  // // only if you're behind a reverse proxy (Heroku, Bluemix, AWS if you use an ELB, custom Nginx setup, etc)

const speedLimiter = slowDown({
    windowMs: 15 * 60 * 1000,   // 15 mins
    delayAfter: 100,            // allow 100 requests per 15 minutes, then...
    delayMs: 500                // begin adding 500ms of delay per request above 100:
                                // request # 101 is delayed by  500ms
                                // request # 102 is delayed by 1000ms etc.
});

// apply to all the requests
app.use(speedLimter);
```

### Using JWT Authorization
```
const jwt = require('jsonwebtoken');

const payload = {
    id,
    first_name,
    email
};

const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: JWT_TTL
});

jwt.verify(payload, JWT_SECRET, (err, decoded)=> {
    if(!err){
        return decoded;
    }
})
```

### Use HTTPS/TLS for REST APIs
HTTPS and Transport Layer Security (TLS) offer a secured protocol to transfer encrypted data between web browsers and servers. Apart from other forms of information, HTTPS also helps to protect authentication credentials in transit. As one of the most critical practices, every API should implement HTTPS for integrity, confidentiality, and authenticity. In addition, security teams should consider using mutually authenticated client-side certificates that provide extra protection for sensitive data and services. When building a secure REST API, developers should avoid redirecting HTTP to HTTPS, which may break API client security. Adequate steps should also be taken to divert Cross-Origin Resource Sharing (CORS) and JSONP requests for their fundamental vulnerabilities for cross-domain calls.

### Using CORS in middleware
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

## How to build authentication api?
### Method 1
```
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.login = async function(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;

    // Get user from db by email
    const user = getByEmail(email);
    
    if(user){
        const isSame = await bcrypt.compare(password, dbPassword);
        if(isSame){
            const payload = {
                id: user.id,
                first_name: user.first_name,
                email: user.email
            };

            const token = jwt.sign(payload, JWT_SECRET, {
                expiresIn: JWT_TTL
            });

            res.json({
                token
            })
        }
    }
}
```
### Method 2
[Cookie Documentation](https://github.com/sjMalik/node-express-postgres-auth/blob/main/README.md#authentication)
```
const bcrypt = require('bcrypt');

module.exports.login = async function(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;

    // Get user from db by email
    const user = getByEmail(email);
    
    if(user){
        const isSame = await bcrypt.compare(password, dbPassword);
        if(isSame){
            const isSecure = req.app.get('env') !== 'development';
            res.cookie('user_id', user.id, {
                httpOnly: true,
                secure: isSecure,
                signed: true
            });
            res.json({
                id: user.id
            })
        }
    }
}
```






