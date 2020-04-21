package pageObjects;

import org.openqa.selenium.ElementNotInteractableException;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import com.bdd.myProject.Base;

public class SubscribeObject extends Base {
	
	
	public SubscribeObject () {
		PageFactory.initElements(driver, this);
		
	}
	
	@FindBy(how=How.XPATH, using="//input[@name='FNAME']")
	private WebElement firstName;
	
	
	@FindBy(how=How.XPATH, using="//input[@name='LNAME']")
	private WebElement lastName;
	
	@FindBy(how=How.XPATH, using="//input[@name='EMAIL']")
	private WebElement emailField;
	
	
	@FindBy(how=How.XPATH, using="//input[@value='Subscribe']")
	private WebElement subscribeButton;
	
	@FindBy(how = How.XPATH, using = "//p[text()='Thank you, your sign-up request was successful! Please check your e-mail inbox.']")
	private WebElement thankyouMessage;
	
	public void enterEmaiAddress(String email) {
		emailField.sendKeys(email.trim());	
	}	
	
	public void enterName(String userName) {
		firstName.sendKeys(userName.trim());
	}
	
	public void enterLastName(String userLastName) {
	lastName.sendKeys(userLastName.trim());
	}
	
	public void clickOnSubscribe() {
		//try {
			subscribeButton.click();
		//}catch(ElementNotInteractableException e) {
		//	subscribeButton.sendKeys(Keys.ENTER);
		//}
	}
	
	
		public boolean verifyThankyouMessage() {
			boolean verifyThankyouMessage1 = thankyouMessage.isDisplayed();
			return verifyThankyouMessage1;
		}
	

}
