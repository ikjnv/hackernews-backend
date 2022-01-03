<h4 align="center">Hackernews backend</h4>
<p align="center">GraphQL server built with TypeScript, Apollo Server, Nexus, Prisma and PostgreSQL</p>
<hr />

<div align="center">

[![Node](https://img.shields.io/badge/nodejs-%2014.8.2-brightgreen)](https://nodejs.org/dist/v14.18.2/docs/api/)
[![Npm package version](https://badgen.net/npm/v/npm/6.14)](https://www.npmjs.com/package/npm/v/6.14.15)
[![Prisma Client](https://shields.io/badge/%40prisma%2Fclient-3.7.0-brightgreen)](https://www.prisma.io/docs/concepts/components/prisma-client)
[![Apollo Server](https://shields.io/badge/apollo--server-3.6.1-brightgreen)](https://www.apollographql.com/docs/apollo-server/getting-started/)
[![Bcrypt](https://shields.io/badge/bcrypt--js-2.4.3-brightgreen)](https://github.com/dcodeIO/bcrypt.js#readme)
[![GraphQL](https://shields.io/badge/graphql-15.8.0-brightgreen)](https://graphql.org/)
[![GraphQL Scalars](https://shields.io/badge/graphql--scalars-1.14.1-brightgreen)](https://www.graphql-scalars.dev/)
[![Json Web Token](https://shields.io/badge/jsonwebtoken-8.5.1-brightgreen)](https://github.com/auth0/node-jsonwebtoken#readme)
[![Nexus](https://shields.io/badge/nexus-1.1.0-brightgreen)](https://nexusjs.org/)

</div>
<hr />

#### Features
 - authentication(login, sign up)
 - fetch links
 - create links
 - filtering
 - pagination


#### Notes
 - In order to run this project locally you must have PostgreSQL 
installed on your machine or you can configure Prisma to use another database by yourself. To use another database check [prisma database connector docs](https://www.prisma.io/docs/concepts/database-connectors)
 - you must create ***.env*** file which contains environment variables for the project in the project root directory and provide ***APP_SECRET***, ***DATABASE_URL***. For example:

		 DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=SCHEMA"
		 APP_SECRET="test-secret-string"



#### Contributing to this project
Feel free to contribute to this project
