@verify-against-production
Feature: The game page
	In order for people to play the game
	As a website visitor
	I want to see the game page

	Scenario: Browsing the game page
    Given I am on "/game"
    Then I should see "Avira JS Game - Play" as the page title

Feature: The Playground
    On order for people to see where they should play
    As a website visitor
    the page should have an element "playground"
