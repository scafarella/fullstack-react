require('isomorphic-fetch');
require('es6-promise').polyfill();

const express = require('express');
const app = express();
const api = require('./api/');


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

/**
  Simple flight search api wrapper.

  Api params and location values are here:
  http://business.skyscanner.net/portal/en-GB/Documentation/FlightsLivePricingQuickStart
*/
app.get('/api/search', (req, res) => {
  const payload = {
    adults: req.query.adults,
    class: req.query.class,
    toPlace: req.query.toPlace,
    fromPlace: req.query.fromPlace,
    toDate: req.query.toDate,
    fromDate: req.query.fromDate
  };
  api.livePricingValidator.validate(payload).then(api.livePricing.search).then(api.livePricingPopulator.populate)
  .then((results) => {
    res.json(results);
  })
  .catch(function(error){

    res.json({
      errors: [
        error.message
      ]
    });
  });
});


app.get('/api/mock', (req, res) =>{
  const resMock = require('./mock');
  res.json(resMock);
});

app.listen(4000, () => {
  console.log('Node server listening on http://localhost:4000');
});
