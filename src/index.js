const express = require("express");
const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
})

app.get("/", async (req, res) => {
    res.send((Math.random() < 1 / 2) | (Math.random() < 1 / 2));
});

const port = 8080;
app.listen(port, () => {
    console.log(`Started at port ${port}`);
});
