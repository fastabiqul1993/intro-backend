# INTRO TO BACKEND

![](https://img.shields.io/badge/Code%20Style-Standard-informational.svg)
![](https://img.shields.io/badge/Dependencies-Express-success.svg)
![](https://img.shields.io/badge/License-ISC-orange.svg)

<p align="center">
  <a href="https://nodejs.org/">
    <img alt="restfulapi" title="Restful API" src="https://i.pinimg.com/originals/d5/35/b7/d535b7e2dc5d8d9661f05fe4837e883e.jpg">
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
DB_SOCKET = "YOUR-DB-SOCKET" //optional
```
### Start Development Server
```
$ npm start
```

## Documentation

### Books Routes

#### GET Request

 - "/store/" => display all bikes, with default pagination {page:1, limit:10}. Query params:
	- page -> page to display (default 1),
	- limit -> number of bikes displayed in a page (default 10).

 - "/store/{id}" => display one bikes with the id specified by id parameter.
 - "/store/{name}" => display bikes specified by name parameter.
 - "/store/{type}" => display bikes specified by type parameter.
 - "/store/{branch}" => display bikes specified by branch parameter.

#### POST Request

 - "/store/" => Inserting a new bike to bikes tables. Data required = name, type, branch, price.

#### PATCH Request

 - "/store/{bikeID}" => Updating a existing bike in tables. Data required = bikeID and parameter that needs to update.

#### DELETE Request

 - "/store/{bikeID}" => Deleting a existing bike in tables. Data required = bikeID.

## Optional

For demo, use this link : https://introbackend.herokuapp.com/


### License
----
[ISC](https://en.wikipedia.org/wiki/ISC_license "ISC")