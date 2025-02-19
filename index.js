const express = require('express');
const format = require('date-format');

const app = express();

const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.status(200).send('Hello World');
});

app.get('/api/v1/instagram', (req, res) => {
    const instaSocial = {
        username: 'Rajesh Kumar',
        followers: 66,
        follows: 50,
        date: format.asString("dd-MM-yyyy - hh:mm:ss", new Date())
    };

    res.status(200).json(instaSocial);
});

app.get('/api/v1/:token', (req, res) => {
    console.log(req.params.token);
    res.status(200).json({param: req.params.token});
});

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
})
