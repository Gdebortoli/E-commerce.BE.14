# E-commerce Back End 

## Description

E-commerce backend application that uses ORM.

### User Story

* AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies

## Table of Contents

- [Acceptance Criteria](#acceptance-criteria)
- [Assets](#assets)
- [Installation](#installation)
- [Walkthough Video](#walkthough-video)
- [Github Link](#github-link)

## Acceptance Criteria

GIVEN a functional Express.js API

* WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
* WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
* WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
* WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
* WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database


## Assets

* MySQL2
* Sequelize
* dotenv
* insomnia 
* npm 
* express

## Installation

Clone the repository, then in the command line enter the following:

To start the mysql server. Type 
~~~ 
npm mysql -u root -p 
~~~ 
To install all package dependancies. Type 
~~~ 
npm install 
~~~ 
To start the mysql server. Type 
~~~ 
npm mysql -u root -p 
~~~ 
Connect to the mysql server
~~~ 
source db/schema.sql
~~~ 
Exit mysql server. Type
~~~ 
quit
~~~ 
Seed the db. Type 
~~~ 
npm run seed
~~~ 
To start the server on your localhost.
~~~ 
npm start 
~~~ 

* open insomnoa or postman 

<p align="right">(<a href="#top">back to top</a>)</p>

## Walk through Video

![Walkthrough](https://drive.google.com/file/d/14gou3z5_d1544BZFuCHXgZY8gSYm7c7G/view)


## Github Link

Click here for the link to my [Github Respository](https://github.com/Gdebortoli/bee-comm-any1.3)

