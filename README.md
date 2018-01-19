# Watson Machine Learning Scoring Demo

## Overview

This is a simple application that shows you how to call the scoring endpoint for a deployed model in the Watson Machine Learning service.

## Installing

1. Install [Node](https://nodejs.org)
2. Clone this repo
  - *change to directory where you want to install*
  - `git clone https://github.com/ibm-watson-data-lab/watson-ml-scoring-demo`
3. Install node modules
  - `cd watson-ml-scoring-demo`
  - `npm install`

## Run Locally

1. Copy the `.env.template` file to `.env`
  - `cp .env.template .env`
  
The file should look similar to the following:

```
WML_SERVICE_PATH=https://ibm-watson-ml.mybluemix.net
WML_USERNAME=
WML_PASSWORD=
WML_INSTANCE_ID=
WML_MODEL_ID=
WML_DEPLOYMENT_ID=
```

2. Fill in `WML_USERNAME`, `WML_PASSWORD`, and `WML_INSTANCE_ID`:
  - Go to your IBM Watson Machine Learning service in your IBM Cloud instance
  - Click _Service Credentials_
  - Expand your credentials
  - Copy and paste the username, password, and instance_id values

![Watson ML Service Credentials](https://raw.githubusercontent.com/ibm-watson-data-lab/watson-ml-scoring-util-nodejs/master/readme/img/watson-ml-credentials.png)

3. Fill in `WML_MODEL_ID` and `WML_DEPLOYMENT_ID`:
  - Click your model under _Models_ in the _Assets_ tab in your Data Science Platform or Watson Data Platform account
  - Click the _Deployments_ tab
  - Click the deployment
  - Copy and paste the Deployment ID and Model ID values

## Run in IBM Cloud

1. Copy the `manifest.yml.template` file to `manifest.yml`
  - `cp manifest.yml.template manifest.yml`

The file should look similar to the following:

```
applications:
- path: .
  buildpack: sdk-for-nodejs
  no-route: false
  memory: 128M
  instances: 1
  domain: mybluemix.net
  name: watson-ml-scoring-demo
  host: watson-ml-scoring-demo-${random-word}
disk_quota: 256M
services:
 - IBM Watson Machine Learning
env:
  WML_MODEL_ID: xxx
  WML_DEPLOYMENT_ID: xxx
```

2. Specify the name of your Watson Machine Learning Service
  - Replace `IBM Watson Machine Learning` under *services:* with the name of the Watson Machine Learning service provisioned in your account

3. Fill in `WML_MODEL_ID` and `WML_DEPLOYMENT_ID`:
  - Click your model under _Models_ in the _Assets_ tab in your Data Science Platform or Watson Data Platform account
  - Click the _Deployments_ tab
  - Click the deployment
  - Copy and paste the Deployment ID and Model ID values

![Watson ML Model Deployment](https://raw.githubusercontent.com/ibm-watson-data-lab/watson-ml-scoring-util-nodejs/master/readme/img/watson-ml-model-deployment.png)