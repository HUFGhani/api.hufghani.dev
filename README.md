# Welcome to api-hufghani 👋

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#)
[![Twitter: the_ghani](https://img.shields.io/twitter/follow/the_ghani.svg?style=social)](https://twitter.com/the_ghani)

> Backend for frontend for hufghani.dev

## Install

```sh
yarn global add serverless
yarn install
```

## LocalStack

### To Add Github API key to System Manger

```
aws --region eu-west-2 --endpoint-url=http://localhost:4566 ssm put-parameter --name "github_api_key" --value <API_KEY> --type "SecureString"
```

### To Deploy to LocalStack

```
serverless deploy --stage local
```

### To Deploy to AWS

```
serverless deploy --stage production
```

## Author

👤 **Hamza Ghani**

- Website: hufghani.dev
- Twitter: [@the_ghani](https://twitter.com/the_ghani)
- Github: [@hufghani](https://github.com/hufghani)
- LinkedIn: [@hamza-u-f-ghani](https://linkedin.com/in/hamza-u-f-ghani)
