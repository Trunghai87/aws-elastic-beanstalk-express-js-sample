const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello Brave New World 2023!!!!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
