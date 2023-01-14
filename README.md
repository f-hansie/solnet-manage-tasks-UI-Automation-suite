# SOLNET-ManageTaskUIAutomation

## Running Automation Testing for manage task App
The test are sitting on the cypress e2e folder, the page folder consists of the page locators for the app and the test folder consist of the cypress spec test that includes all the scenarios or tests

## Pre-requisites
install cypress v.12 or latest
npm install
*Before execute the automation tests you need to launch the angular app for manage tasks by running the commands  on the above instructions*

## Running the automtion test on Cypress test runner
=> npx cypress open
=> cypress test runner will launch
=> select ETE Testing
=> select the browser of your choice to execute the tests, chrome or electron
=> ALL the tests for are sitting currently on the tests folder under E2E project folder
=> click 'manage-user-tasks-spec' to execute the tests on cypress test runner
=> after the test has done executing it will show the number of tests that ran pass or fail on test runner GUI 

## Running the automtion test on command headless mode
=> run command : ./node_modules/.bin/cypress run
