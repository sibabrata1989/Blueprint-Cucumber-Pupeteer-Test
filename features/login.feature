Feature: Login to blueprint application
    # To check login -positive test case
    Scenario: Scenario Outline name: Verify login-Positive
        Given The browser is open
        When open the login page
        When Enter the username "admin@blueprint-dev.com" and password "Test1234!"
        Then Verify the home page
        Then close the browser

    # To check login with invalid password-negative test case
    Scenario: Scenario Outline name: Verify login-Negative
        Given The browser is open
        When open the login page
        When Enter the username "admin@blueprint-dev.com" and password "Test!"
        Then Verify error message "Invalid username or password."
        Then close the browser  