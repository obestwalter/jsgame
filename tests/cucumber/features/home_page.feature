@verify-against-production
Feature: The home page
	In order to get people interested in the game
	As a website visitor
	I want to see the home page

	Scenario: Browsing the home page
    Given I am on "/"
    Then I should see "Avira JS Game - Home" as the page title
