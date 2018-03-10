const express = require('express');
const router = express.Router();
const { WatsonMLScoringEndpoint } = require("watson-ml-model-utils");
const watsonMLScoringEndpoint = new WatsonMLScoringEndpoint(['SquareFeet', 'Bedrooms']);

router.post('/predictHousePrice', function(req, res, next) {
  watsonMLScoringEndpoint.score([req.body.squareFeet, req.body.numBedrooms])
    .then((response) => {
      res.json({
        ok: true,
        price: response.prediction
      });
    })
    .catch((err) => {
      res.json({ok: false});
    });
});

module.exports = router;
