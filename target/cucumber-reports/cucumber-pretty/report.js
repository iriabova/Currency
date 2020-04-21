$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/TekSchoolScenario.feature");
formatter.feature({
  "line": 2,
  "name": "Tek School Scenarios",
  "description": "",
  "id": "tek-school-scenarios",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@ExapleTag"
    }
  ]
});
formatter.before({
  "duration": 10413930300,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on TekSchool page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Click on Test Environment link",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User should see Test Environment page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_TekSchool_page()"
});
formatter.result({
  "duration": 3598528000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_Click_on_Test_Environment_link()"
});
formatter.result({
  "duration": 630212200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_should_see_Test_Environment_page()"
});
formatter.result({
  "duration": 4017520600,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "SDET2019AUG_SDET_003_Execution",
  "description": "",
  "id": "tek-school-scenarios;sdet2019aug-sdet-003-execution",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@SDET_003"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User click on my account menu on top of the page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User click on login on my account menu",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enter username \u0027teststudent@gmail.com\u0027 and password \u0027Tek@Test.com\u0027 in returning menu",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User should be logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "TekSchoolScenariosStepDefinitions.user_click_on_my_account_menu_on_top_of_the_page()"
});
formatter.result({
  "duration": 540461500,
  "status": "passed"
});
formatter.match({
  "location": "TekSchoolScenariosStepDefinitions.user_click_on_login_on_my_account_menu()"
});
formatter.result({
  "duration": 280427400,
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
  "duration": 191257200,
  "status": "passed"
});
formatter.match({
  "location": "TekSchoolScenariosStepDefinitions.user_click_on_login_button()"
});
formatter.result({
  "duration": 841986400,
  "status": "passed"
});
formatter.match({
  "location": "TekSchoolScenariosStepDefinitions.user_should_be_logged_in()"
});
formatter.result({
  "duration": 409196100,
  "status": "passed"
});
formatter.after({
  "duration": 649883100,
  "status": "passed"
});
});