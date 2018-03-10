const { WatsonMLScoringEndpoint } = require("watson-ml-model-utils");

// Example specifying all values
// let endpoint = new WatsonMLScoringEndpoint(['SquareFeet', 'Bedrooms'], {
//     servicePath: 'https://ibm-watson-ml.mybluemix.net',
//     username: 'xxx',
//     password: 'xxx',
//     instanceId: 'xxx',
//     modelId: 'xxx',
//     deploymentId: 'xxx'
// });

// Example specifying modelId and deploymentId and reading other values from environment
// let endpoint = new WatsonMLScoringEndpoint(['SquareFeet', 'Bedrooms'], {
//     modelId: 'xxx',
//     deploymentId: 'xxx'
// });

// Example reading all values from environment
let endpoint = new WatsonMLScoringEndpoint(['SquareFeet', 'Bedrooms']);

// Running a single prediction
endpoint.score([2400, 4])
  .then(response => console.log(response.prediction))
  .catch(e => console.log(e));

// Running multiple predictions at once
endpoint.scoreMulti([[2400, 4], [2000, 3], [2600, 6]])
  .then(response => console.log(response.predictions))
  .catch(e => console.log(e));