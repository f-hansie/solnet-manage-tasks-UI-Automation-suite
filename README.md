# SOLNET-ManageTaskUIAutomation

## Running Automation Testing for manage task App
The test are sitting on the cypress e2e folder, the page folder consists of the page locators for the app and the test folder consist of the cypress spec test that includes all the scenarios or tests

## Pre-requisites
install cypress v.12 or latest
you will need java 8 installed on your system to be able to run the allure report
=> run npm install, to install all dependencies for cypress and typescript
## Before executing the cypress automation tests suite you need to launch the angular app for manage tasks on your local machine. 

## Running the automtion test on Cypress test runner
=> npx cypress open
=> cypress test runner will launch
=> select ETE Testing
=> select the browser of your choice to execute the tests, chrome or electron
=> ALL the tests for are sitting currently on the tests folder under E2E project folder
=> click 'manage-user-tasks-spec.cy' to execute the tests on cypress test runner
=> after the test has done executing it will show the number of tests that ran showing the  pass or fail on test runner GUI 

## Running the automtion test on command line on headless mode and generating the allure html report
=> run  tests on command : npm run endtoend-ui-test
=> opening the allure report after test execution: npm run allure:report 
