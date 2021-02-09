const express = require('express');

const router = express.Router();

// Importing the model to use its database functions
const burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get('/', (req, res) => {
    burger.all((data) => {
      const hbsObject = {
        burgers: data,
      };
      console.log('hbsObject', hbsObject);
      res.render('index', hbsObject);
    });
  });

// Export routes for server.js to use.
module.exports = router;