const express = require('express');
const router = express.Router();
const WatsonMLScoring = require("../watson-ml-scoring");
const watsonMLScoringEndpoint = new WatsonMLScoring(['SquareFeet', 'Bedrooms']);

router.post('/getHousePrice', function(req, res, next) {
  watsonMLScoringEndpoint.score([req.body.squareFeet, req.body.numBedrooms])
    .then((predictions) => {
      res.json({
        ok: true,
        price: predictions
      });
    })
    .catch((err) => {
      response.json({ok: false});
    });
});

module.exports = router;
