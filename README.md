<!--
title: 'AWS Simple HTTP Endpoint example in NodeJS'
description: 'This template demonstrates how to make a simple HTTP API with Node.js running on AWS Lambda and API Gateway using the Serverless Framework.'
layout: Doc
framework: v3
platform: AWS
language: nodeJS
authorLink: 'https://github.com/serverless'
authorName: 'Serverless, inc.'
authorAvatar: 'https://avatars1.githubusercontent.com/u/13742415?s=200&v=4'
-->



# Serverless Framework Node HTTP API on AWS

This template demonstrates how to make a simple HTTP API with Node.js running on AWS Lambda and API Gateway using the Serverless Framework.

This template does not include any kind of persistence (database). For more advanced examples, check out the [serverless/examples repository](https://github.com/serverless/examples/) which includes Typescript, Mongo, DynamoDB and other examples.

## Usage

### Documentation

```
The documentation is in the file openApi_swapi.yml, you can use https://editor.swagger.io/ to review it
```

### SWAPI - The Star Wars API

```
https://swapi.py4e.com/
```

### Deployment

```
$ serverless deploy
```

After deploying, you should see output similar to:

```bash
Deploying aws-node-http-api-project to stage dev (us-east-1)

✔ Service deployed to stack aws-node-http-api-project-dev (152s)

endpoint: GET - https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/
functions:
  hello: aws-node-http-api-project-dev-hello (1.9 kB)
```

_Note_: In current form, after deployment, your API is public and can be invoked by anyone. For production deployments, you might want to configure an authorizer. For details on how to do that, refer to [http event docs](https://www.serverless.com/framework/docs/providers/aws/events/apigateway/).

### Invocation

After successful deployment, you can call the created application via HTTP:

```bash
curl https://m4y6so3yh2.execute-api.us-east-1.amazonaws.com/
```

Which should result in response similar to the following (removed `input` content for brevity):

```json
{
    "status": 200,
    "body": {
        "data": [
            {
                "nombre": "Tatooine",
                "diametro": "10465",
                "periodo_rotacion": "23",
                "periodo_orbita": "304",
                "poblacion": "200000",
                "clima": "arid",
                "superficie_agua": "1",
                "gravedad": "1 standard",
                "residentes": [
                    "https://swapi.py4e.com/api/people/1/",
                    "https://swapi.py4e.com/api/people/2/",
                    "https://swapi.py4e.com/api/people/4/",
                    "https://swapi.py4e.com/api/people/6/",
                    "https://swapi.py4e.com/api/people/7/",
                    "https://swapi.py4e.com/api/people/8/",
                    "https://swapi.py4e.com/api/people/9/",
                    "https://swapi.py4e.com/api/people/11/",
                    "https://swapi.py4e.com/api/people/43/",
                    "https://swapi.py4e.com/api/people/62/"
                ],
                "peliculas": [
                    "https://swapi.py4e.com/api/films/1/",
                    "https://swapi.py4e.com/api/films/3/",
                    "https://swapi.py4e.com/api/films/4/",
                    "https://swapi.py4e.com/api/films/5/",
                    "https://swapi.py4e.com/api/films/6/"
                ]
            },
            {
                "nombre": "Alderaan",
                "diametro": "12500",
                "periodo_rotacion": "24",
                "periodo_orbita": "364",
                "poblacion": "2000000000",
                "clima": "temperate",
                "superficie_agua": "40",
                "gravedad": "1 standard",
                "residentes": [
                    "https://swapi.py4e.com/api/people/5/",
                    "https://swapi.py4e.com/api/people/68/",
                    "https://swapi.py4e.com/api/people/81/"
                ],
                "peliculas": [
                    "https://swapi.py4e.com/api/films/1/",
                    "https://swapi.py4e.com/api/films/6/"
                ]
            },
            {
                "nombre": "Yavin IV",
                "diametro": "10200",
                "periodo_rotacion": "24",
                "periodo_orbita": "4818",
                "poblacion": "1000",
                "clima": "temperate, tropical",
                "superficie_agua": "8",
                "gravedad": "1 standard",
                "residentes": [],
                "peliculas": [
                    "https://swapi.py4e.com/api/films/1/"
                ]
            },
            {
                "nombre": "Hoth",
                "diametro": "7200",
                "periodo_rotacion": "23",
                "periodo_orbita": "549",
                "poblacion": "unknown",
                "clima": "frozen",
                "superficie_agua": "100",
                "gravedad": "1.1 standard",
                "residentes": [],
                "peliculas": [
                    "https://swapi.py4e.com/api/films/2/"
                ]
            },
            {
                "nombre": "Dagobah",
                "diametro": "8900",
                "periodo_rotacion": "23",
                "periodo_orbita": "341",
                "poblacion": "unknown",
                "clima": "murky",
                "superficie_agua": "8",
                "gravedad": "N/A",
                "residentes": [],
                "peliculas": [
                    "https://swapi.py4e.com/api/films/2/",
                    "https://swapi.py4e.com/api/films/3/",
                    "https://swapi.py4e.com/api/films/6/"
                ]
            },
            {
                "nombre": "Bespin",
                "diametro": "118000",
                "periodo_rotacion": "12",
                "periodo_orbita": "5110",
                "poblacion": "6000000",
                "clima": "temperate",
                "superficie_agua": "0",
                "gravedad": "1.5 (surface), 1 standard (Cloud City)",
                "residentes": [
                    "https://swapi.py4e.com/api/people/26/"
                ],
                "peliculas": [
                    "https://swapi.py4e.com/api/films/2/"
                ]
            },
            {
                "nombre": "Endor",
                "diametro": "4900",
                "periodo_rotacion": "18",
                "periodo_orbita": "402",
                "poblacion": "30000000",
                "clima": "temperate",
                "superficie_agua": "8",
                "gravedad": "0.85 standard",
                "residentes": [
                    "https://swapi.py4e.com/api/people/30/"
                ],
                "peliculas": [
                    "https://swapi.py4e.com/api/films/3/"
                ]
            },
            {
                "nombre": "Naboo",
                "diametro": "12120",
                "periodo_rotacion": "26",
                "periodo_orbita": "312",
                "poblacion": "4500000000",
                "clima": "temperate",
                "superficie_agua": "12",
                "gravedad": "1 standard",
                "residentes": [
                    "https://swapi.py4e.com/api/people/3/",
                    "https://swapi.py4e.com/api/people/21/",
                    "https://swapi.py4e.com/api/people/35/",
                    "https://swapi.py4e.com/api/people/36/",
                    "https://swapi.py4e.com/api/people/37/",
                    "https://swapi.py4e.com/api/people/38/",
                    "https://swapi.py4e.com/api/people/39/",
                    "https://swapi.py4e.com/api/people/42/",
                    "https://swapi.py4e.com/api/people/60/",
                    "https://swapi.py4e.com/api/people/61/",
                    "https://swapi.py4e.com/api/people/66/"
                ],
                "peliculas": [
                    "https://swapi.py4e.com/api/films/3/",
                    "https://swapi.py4e.com/api/films/4/",
                    "https://swapi.py4e.com/api/films/5/",
                    "https://swapi.py4e.com/api/films/6/"
                ]
            },
            {
                "nombre": "Coruscant",
                "diametro": "12240",
                "periodo_rotacion": "24",
                "periodo_orbita": "368",
                "poblacion": "1000000000000",
                "clima": "temperate",
                "superficie_agua": "unknown",
                "gravedad": "1 standard",
                "residentes": [
                    "https://swapi.py4e.com/api/people/34/",
                    "https://swapi.py4e.com/api/people/55/",
                    "https://swapi.py4e.com/api/people/74/"
                ],
                "peliculas": [
                    "https://swapi.py4e.com/api/films/3/",
                    "https://swapi.py4e.com/api/films/4/",
                    "https://swapi.py4e.com/api/films/5/",
                    "https://swapi.py4e.com/api/films/6/"
                ]
            },
            {
                "nombre": "Kamino",
                "diametro": "19720",
                "periodo_rotacion": "27",
                "periodo_orbita": "463",
                "poblacion": "1000000000",
                "clima": "temperate",
                "superficie_agua": "100",
                "gravedad": "1 standard",
                "residentes": [
                    "https://swapi.py4e.com/api/people/22/",
                    "https://swapi.py4e.com/api/people/72/",
                    "https://swapi.py4e.com/api/people/73/"
                ],
                "peliculas": [
                    "https://swapi.py4e.com/api/films/5/"
                ]
            }
        ]
    }
}
```

### Local development

You can invoke your function locally by using the following command:

```bash
serverless invoke local --function hello
```

Which should result in response similar to the following:

```
{
  "statusCode": 200,
  "body": "{\n  \"message\": \"Go Serverless v3.0! Your function executed successfully!\",\n  \"input\": \"\"\n}"
}
```


Alternatively, it is also possible to emulate API Gateway and Lambda locally by using `serverless-offline` plugin. In order to do that, execute the following command:

```bash
serverless plugin install -n serverless-offline
```

It will add the `serverless-offline` plugin to `devDependencies` in `package.json` file as well as will add it to `plugins` in `serverless.yml`.

After installation, you can start local emulation with:

```
serverless offline
```

To learn more about the capabilities of `serverless-offline`, please refer to its [GitHub repository](https://github.com/dherault/serverless-offline).
