# INTRO TO BACKEND

![](https://img.shields.io/badge/Code%20Style-Standard-informational.svg)
![](https://img.shields.io/badge/Dependencies-Express-success.svg)
![](https://img.shields.io/badge/License-ISC-important.svg)

<p align="center">
  <a href="https://nodejs.org/">
    <img alt="restfulapi" title="Restful API" src="https://cdn-images-1.medium.com/max/871/1*d2zLEjERsrs1Rzk_95QU9A.png">
  </a>
</p>

----
## Table of contents
* [Prerequiste](#prerequiste)
* [Installation](#installation)
* [Documentation](#documentation)
* [Optional](#optional)
* [License](#license)

## Prerequiste
- Node.js - Download and Install [Node.js](https://nodejs.org/en/) with [NVM](https://github.com/creationix/nvm) (Node Version Manager) - Simple bash script to manage multiple active node.js versions.
- MySQL - Download and Install [MySQL](https://www.mysql.com/downloads/) - Make sure it's running on the default port.
- Postman - Download and Install [Postman](https://www.getpostman.com/downloads) - Implementation with postman latest version.

## Installation
### Clone
```
$ git clone https://github.com/fastaman993/intro-to-js.git
$ cd intro-to-js
$ npm install
```

### Create Environment Variable
```
$ cp .env.example .env
$ nano .env
```

```
SERVER_PORT = YOUR-PORT

DB_HOST = "YOU-DB-HOST"
DB_USER = "YOUR-DB-USER"
DB_PASSWORD = "YOUR-DB-PASSWORD"
DB_NAME = "YOUR-DB-NAME"
```
### Start Development Server
```
$ npm start
```

## Documentation

### Books Routes

#### GET Request

 - "/store" => display all store, with default pagination {page:1, limit:5}. Query params:
    - findAll -> display all store data,
	- page -> page to display (default 1),
	- limit -> number of store displayed in a page (default 5).

 - "/store/{storeID}" => display one store data with the id specified by ID parameter.
 - "/store/type/?type" => display store data specified by type parameter.
 - "/store/branch/?branch" => display store data specified by branch parameter.

#### POST Request

 - "/store" => Inserting a new store data to database. Data required = name, brand, type, branch, price.

#### PATCH Request

 - "/store/{storeID}" => Updating a existing store data in database. Data required = storeID and parameter that needs to update.

#### DELETE Request

 - "/store/{storeID}" => Deleting a existing store data in database. Data required = storeID.

## Optional

For demo, use this link : https://ancient-sea-92924.herokuapp.com/


### License
----
[ISC](https://en.wikipedia.org/wiki/ISC_license "ISC")