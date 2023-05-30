const express = require('express');

const app = express();

app.get('/', (req, res)=> {
    for(let i = 0; i < 1e8; i++){
        // Long running task
    }

    res.status(200).send(`Ok ....`)
});

app.listen(3000, ()=> console.log(`Server running @ http://localhost:3000`))