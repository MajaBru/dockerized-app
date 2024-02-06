const express = require("express");
const mongo = require("mongodb");
const path = require("path");


const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
console.log(`Server is up on port: ${PORT}`);
});

app.get('/', (req, res) => {
    res.send('hi');
});