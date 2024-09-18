Alex Nebot Oller's submission to the Ottonova QA Coding challenge for the open position of QA Automation Engineer.

- **Linkedin**: https://www.linkedin.com/in/alex-nebot-oller/
- **Email**: alex.nebot.sds@gmail.com
- **Phone**: +49 152 36964918

## Project set up

Run `npm install` to install the dependencies of this project before running any tests.

**NOTE**: The file paths specified bellow, like the one for running the API tests, will work on Windows, but when running this on Linux / MacOS, you may have to change the slashes to **/**.

## Frontend tests - Ottonova Online Beitragsrechner

### Running the tests

- `npx cypress run` runs the tests printing the results in the terminal.
- `npx cypress open` opens the Cypress Test Runner, which let's you run the tests from a browser and see the realtime execution of them.

### Test description

This test suite automates the process of filling out the insurance calculator on the Ottonova website. It verifies the workflow of selecting employment status, entering income, and validating birthdate input fields. Additionally, it checks the behavior for incorrect birthdates (invalid date, future date, too old, and too young).

### Modules used

- **Cypress**: The main testing framework used to simulate user interaction with the web application.
- **Fixtures**: External JSON files (`inputData.json`, `birthDateErrors.json`, and `selectors.json`) are used to store data inputs and error messages for reuse across the test.
  - **`inputData.json`**: Contains the data for form inputs such as employment type, income, and birthdates.
  - **`birthDateErrors.json`**: Stores expected error messages for invalid birthdates.
  - **`selectors.json`**: Holds CSS selectors used in the test to select DOM elements.
- **Mocha**: Provides the structure for organizing the test suite.
- **Chai**: Used for making assertions to validate conditions, such as checking that certain elements are disabled or that validation messages are displayed.

## Backend tests - PokeAPI

### Running the tests

- `npx mocha .\api_tests\*` runs the tests printing the tests results in the terminal.
- `npx mocha .\api_tests\* --reporter mochawesome` runs the tests and generates an HTML report which can be found in the `\mochawesome-report` directory.

### Test description

In the first test, it sends a GET request for the Pokémon "Pikachu" using Axios and checks the response status to ensure it's successful (status 200). It also verifies that the Pokémon's name is "pikachu" and that it has an ability named "lightning-rod." The second test mocks a GET request for "Charmander" using Nock for intercepting and modifying the response of the HTTP request made. In this case, the mock returns a 404 error, and the test asserts that the response indeed has a 404 status, verifying error handling.

### Modules used

- **Mocha**: A JavaScript testing framework used to structure and run the test suite.
- **Chai**: An assertion library used to write the expectations (`expect`) for response validation.
- **Axios**: A promise-based HTTP client used to send HTTP requests to the PokeAPI.
- **Nock**: A library used to mock and intercept HTTP requests, allowing control over responses (e.g., simulating a `404` error).
- **Mochawesome**: Library to generate HTML reports for Mocha tests.
