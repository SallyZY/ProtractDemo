Feature: Search book in Amazon, and add a book to cart

  Scenario: Search a book in Baidu
    Given I go to Baidu
    When I search book "Agile Estimating and Planning"
    Then I should see the book "Agile Estimating and Planning" in search result

