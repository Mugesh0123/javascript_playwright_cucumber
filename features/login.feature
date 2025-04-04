Feature: Login Functionality

  Scenario: Successful Login
    Given I navigate to the login page
    When I enter username "testuser" and password "password123"
    And I click the login button
    Then I should see the homepage
