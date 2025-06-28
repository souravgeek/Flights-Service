This is a base NodeJS backend template

"src" : all the actual source code regarding the project will reside here

-'config' : everything regarding configuration or setup of a library or module will be done here. For eg. setting up dotenv

-'routes' : here we register our routes and the corresponding middlewares and controllers.

-'middlewares' : they are just going to intercept the incoming requests where we can write our validators, authenticators, etc.

-'controllers' : they are kind of the last middlewares, as post them you call your business layer to execute the business logic. In controllers, we just recieve the incoming request and pass it to the business layer, and on recieving an output, we structure the response ans send it further.

-'repositories' : this folder contains all the logic used to interact with the database by writing queries.

-'services' : contains the business logic.

-'utils' : contains some helper functions, error classes, etc.

### setup the project

- Download the project from github and open it
- In the root directory create '.env' file and add the following env variables:

```
   PORT
```

-Go inside the 'src' folder, and execute the following command

```
npx sequelize init
```

--if you are setting up your developement,set the values of username, password, db correctly

--to run the server, execute

```
npm run dev
```