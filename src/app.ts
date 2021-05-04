import express from 'express';
// const express = require('express');
const app = express();
const port = 3000;

const pageRoutes = require('./routes/pages');

app.get('/', (req, res) => {
  res.send('We are alive!');
});

app.listen(port, () => console.log(`server is listening on ${port}`));
