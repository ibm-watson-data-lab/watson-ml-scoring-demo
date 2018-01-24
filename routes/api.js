const express = require('express');
const router = express.Router();
const { WatsonMLScoringEndpoint } = require("watson-ml-scoring-util");
const watsonMLScoringEndpoint = new WatsonMLScoringEndpoint(['SquareFeet', 'Bedrooms']);

router.post('/predictHousePrice', function(req, res, next) {
  watsonMLScoringEndpoint.score([req.body.squareFeet, req.body.numBedrooms])
    .then((predictions) => {
      res.json({
        ok: true,
        price: predictions
      });
    })
    .catch((err) => {
      res.json({ok: false});
    });
});

module.exports = router;
