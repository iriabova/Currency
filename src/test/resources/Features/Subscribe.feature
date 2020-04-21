Feature: Subscribe

Background: 
Given User is on TekSchool page

@Subscribe
Scenario: Subscribe
Then User type first name 'Julia'
And User type last name 'myLastName'
And User type email 'teststudent1@gmail.com' 
Then User click on subscribe button
And User should see thank you message


@Subscribe_Outline

Scenario Outline: Subscribe Outline
Then User type first name '<firstName>'
And User type last name '<lastName>'
And User type email '<email>' 
Then User click on subscribe button
And User should see thank you message

Examples:

|firstName|lastName|email|
|Julia|myLastName|teststudent@gmail.com|
|Viktor|lastname|okkoi0o@gmail.com|
|Arthur|hhuhuj|mkuklmlk@gmail.com|
