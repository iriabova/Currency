$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/MyCasesPrt2.feature");
formatter.feature({
  "line": 1,
  "name": "Tek School Scenarios2",
  "description": "",
  "id": "tek-school-scenarios2",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6216084900,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on TekSchool page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User Click on Test Environment link",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User should see Test Environment page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#Scenario: SDET2019AUG_SDET_003_Execution"
    }
  ],
  "line": 10,
  "name": "User click on my account menu on top of the page",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User click on login on my account menu",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enter username \u0027teststudent@gmail.com\u0027 and password \u0027Tek@Test.com\u0027 in returning menu",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User should be logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_TekSchool_page()"
});
formatter.result({
  "duration": 2618573200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_Click_on_Test_Environment_link()"
});
formatter.result({
  "duration": 1311934800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_should_see_Test_Environment_page()"
});
formatter.result({
  "duration": 2033872600,
  "status": "passed"
});
formatter.match({
  "location": "TekSchoolScenariosStepDefinitions.user_click_on_my_account_menu_on_top_of_the_page()"
});
formatter.result({
  "duration": 488220500,
  "status": "passed"
});
formatter.match({
  "location": "TekSchoolScenariosStepDefinitions.user_click_on_login_on_my_account_menu()"
});
formatter.result({
  "duration": 371954500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "teststudent@gmail.com",
      "offset": 21
    },
    {
      "val": "Tek@Test.com",
      "offset": 58
    }
  ],
  "location": "TekSchoolScenariosStepDefinitions.user_enter_username_username_and_password_password_in_returning_menu(String,String)"
});
formatter.result({
  "duration": 203439700,
  "status": "passed"
});
formatter.match({
  "location": "TekSchoolScenariosStepDefinitions.user_click_on_login_button()"
});
formatter.result({
  "duration": 896476800,
  "status": "passed"
});
formatter.match({
  "location": "TekSchoolScenariosStepDefinitions.user_should_be_logged_in()"
});
formatter.result({
  "duration": 397212200,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "SDET_07_When_user_verify_\"Wish_list\"",
  "description": "",
  "id": "tek-school-scenarios2;sdet-07-when-user-verify-\"wish-list\"",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@SDET_007"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "User clicks on button phones\u0026PDAs",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User clicks on the HeartIcon",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User should see the message Success: You have added HTC Touch HD to your wish list!",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "verify item was added on WishList on the top of the menu",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "User clicks on the image of the product",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "User clicks on the HeartIcon1",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 25,
      "value": "#Then User should see the message Success: You have added HTC Touch HD to your wish list!"
    }
  ],
  "line": 26,
  "name": "User can clicks on on the Wish List menu on the top",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User should see Wish List Page",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "User clicks on RedXButton",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Item should be removed and user should see Success: You have modified your wish list!",
  "keyword": "Then "
});
formatter.match({
  "location": "MyCasesAutomation.user_clicks_on_button_phones_PDAs()"
});
formatter.result({
  "duration": 554730600,
  "status": "passed"
});
formatter.match({
  "location": "MyCasesAutomation.user_clicks_on_the_HeartIcon()"
});
formatter.result({
  "duration": 90475000,
  "status": "passed"
});
formatter.match({
  "location": "MyCasesAutomation.user_should_see_the_message_Success_You_have_added_HTC_Touch_HD_to_your_wish_list()"
});
formatter.result({
  "duration": 623905100,
  "status": "passed"
});
formatter.match({
  "location": "MyCasesAutomation.verify_item_was_added_on_WishList_on_the_top_of_the_menu()"
});
formatter.result({
  "duration": 421376700,
  "status": "passed"
});
formatter.match({
  "location": "MyCasesAutomation.user_clicks_on_the_image_of_the_product()"
});
formatter.result({
  "duration": 1153862200,
  "status": "passed"
});
formatter.match({
  "location": "MyCasesAutomation.user_clicks_on_the_HeartIcon1()"
});
formatter.result({
  "duration": 264721100,
  "status": "passed"
});
formatter.match({
  "location": "MyCasesAutomation.user_can_clicks_on_on_the_Wish_List_menu_on_the_top()"
});
formatter.result({
  "duration": 313483500,
  "status": "passed"
});
formatter.match({
  "location": "MyCasesAutomation.user_should_see_Wish_List_Page()"
});
formatter.result({
  "duration": 400344800,
  "status": "passed"
});
formatter.match({
  "location": "MyCasesAutomation.user_clicks_on_RedXButton()"
});
formatter.result({
  "duration": 413996100,
  "status": "passed"
});
formatter.match({
  "location": "MyCasesAutomation.item_should_be_removed_and_user_should_see_Success_You_have_modified_your_wish_list()"
});
formatter.result({
  "duration": 431259600,
  "status": "passed"
});
formatter.after({
  "duration": 1377336200,
  "status": "passed"
});
});