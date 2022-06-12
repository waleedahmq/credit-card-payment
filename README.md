# credit-card-payment
A payment system to accept credit cards and store them securely

This app is developed on Node.js version 14.17.0 and PostgreSQL version 14.3.

This app uses Crypto JS AES algorithm for encryption and decryption for secure values. Also to not have duplicate entries hash is being used which is generated using HMAC SHA256 algorithm.

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

5- Try start your project with "npm start" command on terminal from root of the project. Open the app in broswer on given port. Default port is 3000.

6- To run test case, try "npm test" command. The folder "test" contains the code of test case.

7- If all information including Account Number for Luhn's Algorithm is saved successfully, it would also mean the given Account Number is valid otherwise it must throw the error.

8- Note that Account Number field is not required for now. Luhn's Algorithm will only run if user will enter the value of Account Number in the form.
