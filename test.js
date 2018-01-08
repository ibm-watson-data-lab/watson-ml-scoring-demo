let WatsonMLScoring = require("./watson-ml-scoring");

// Example specifying all values
// let endpoint = new WatsonMLScoring(['SquareFeet', 'Bedrooms'], {
//     servicePath: 'https://ibm-watson-ml.mybluemix.net',
//     username: 'xxx',
//     password: 'xxx',
//     instanceId: 'xxx',
//     modelId: 'xxx',
//     deploymentId: 'xxx'
// });

// Example specifying modelId and deploymentId and reading other values from environment
// let endpoint = new WatsonMLScoring(['SquareFeet', 'Bedrooms'], {
//     modelId: 'xxx',
//     deploymentId: 'xxx'
// });

// Example reading all values from environment
let endpoint = new WatsonMLScoring(['SquareFeet', 'Bedrooms']);

// Running a single prediction
endpoint.score([2400, 4])
    .then(predictions => console.log(predictions))
    .catch(err => console.log('ERROR'));

// Running multiple predictions at once
endpoint.scoreMulti([[2400, 4], [2000, 3], [2600, 6]])
    .then(predictions => console.log(predictions))
    .catch(err => console.log('ERROR'));