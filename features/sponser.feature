Feature: Verify the Sponser dropdown
    # To check Sponser dropdown -positive test case
    Scenario: Scenario Outline name: Verify Sponser Dropdown
        Given The browser is open
        When open the login page
        When Enter the username "admin@blueprint-dev.com" and password "Test1234!"
        Then Verify the sponser drop down
        Then close the browser