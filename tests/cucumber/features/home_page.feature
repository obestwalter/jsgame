@verify-against-production
Feature: The home page
	In order to get people interested in the game
	As a website visitor
	I want to see the home page

	Scenario: Browsing the home page
    Given I am on "/"
    Then I should see "Avira JS Game - Home" as the page title

@verify-against-production
Feature: The game page
	In order for people to play the game
	As a website visitor
	I want to see the game page

	Scenario: Browsing the game page
    Given I am on "/game"
    Then I should see "Avira JS Game - Play" as the page title
