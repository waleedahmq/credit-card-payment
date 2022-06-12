# credit-card-payment
A payment system to accept credit cards and store them securely

# Steps TODO to run the service.

1- In the terminal, clone the code, Go at the root of the project. Then type "npm install" to install all the dependencies.

2- Create a .env file at the root of the project.

3- The .env file have both must have values and may not have values.

    i. Must have values are.

        POSTGRES_HOST=

        POSTGRES_PORT=

        POSTGRES_USER=

        POSTGRES_PASSWORD=

    ii. May not have values are, default values are provided in these cases.

        PORT=

        POSTGRES_URL=

        SECRET_KEY=

4- Make sure the database "payment" exists in the PostgreSQL. If there is none with this name, make sure to create it.

5- Try start your project with "Node server.js" command on terminal from root of the project. Open the app in broswer on given port. Default port is 3000.

6- To run test case, try "npm test" command. Right now test is having error, because of helper which is globally defined but is unaccessable by mocha.
