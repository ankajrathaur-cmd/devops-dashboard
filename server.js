const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send(`
        <h1>Welcome to Abhi DevOps Dashboard!</h1>
        <h2>Node.js Server is Running</h2>
        <p>My First Node.js Project</p>
        <p>GitHub + Jenkins + AWS CI/CD</p>
    `);
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
