package StepDefenition;

import org.junit.Assert;

import com.bdd.myProject.Base;

import cucumber.api.java.en.Then;
import pageObjects.SubscribeObject;
import utilities.Utility;

public class Subscribe extends Base {
	
	SubscribeObject Subscribe = new SubscribeObject();
	
	
	@Then("^User type first name '(.+)'$")
	public void user_type_first_name_Julia(String userName) throws Throwable {
		Subscribe.enterName(userName);
	}

	@Then("^User type last name '(.+)'$")
	public void user_type_last_name_myLastName(String userLastName) throws Throwable {
		Subscribe.enterLastName(userLastName);
	}

	@Then("^User type email '(.+)'$")
	public void user_type_email_teststudent_gmail_com(String email) throws Throwable {
		Subscribe.enterEmaiAddress(email);
	}

@Then("^User click on subscribe button$")
public void user_click_on_subscribe_button() throws Throwable {
	Subscribe.clickOnSubscribe();
}

@Then("^User should see thank you message$")
public void user_should_see_thank_you_message() throws Throwable {
	
	Thread.sleep(5000);
	Assert.assertEquals(true, Subscribe.verifyThankyouMessage());
	
	System.out.println(driver.getTitle());
	Utility.screenshot(driver);
}



}
