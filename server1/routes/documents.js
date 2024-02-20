const express = require('express');
const authenticate = require('./authenticate');
const router = express.Router();

let data = {
  "shanmukh990880@gmail.com": [
    "i am sorry",
    "not my fault",
    "binance is bad",
    "kevin is my best friend",
  ],
  "shannu@gmail.com": [
    "stop loss is bad",
    "conforable with risk",
    "never lost a trade",
    "alameda rocks!",
  ],
};

const getDocuments = async (req, res) => {
  try {
    
    const email = req.user;
    res.status(200).send(data[email]);
    console.log(data[email]);
  } catch (err) {
    res.status(500).send(err);
  }
};

router.get("/",authenticate ,getDocuments);

module.exports = router;