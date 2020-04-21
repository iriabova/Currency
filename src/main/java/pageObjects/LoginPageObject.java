package pageObjects;

import java.util.Iterator;
import java.util.Set;

import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import com.bdd.myProject.Base;

public class LoginPageObject extends Base {
	
	public LoginPageObject() {
		PageFactory.initElements(driver, this);
		
	}

	@FindBy(how=How.XPATH, using="//a[text()= 'Test Environment']")
	private WebElement testEnvironmentLink;
	
	
	
	public void clickOnTestEnvironmentLink() {
		
		
		testEnvironmentLink.click();
		
		
		   Set<String> WindowHandels = driver.getWindowHandles();
	        //2. Use Iterator to iterate in window Handlers SET
	        Iterator<String> it = WindowHandels.iterator();
	        //3. store Parent window handler in a sting
	        String parentWindow = it.next();
	        //4. store child window handler in a srting
	        String childWindow = it.next();
	        //5. use SwithTo.Window method for switching from parent to child
	        driver.switchTo().window(childWindow);
			
		
		/**
		 * This method will click on Login to class Link On Tek School page
		 */
	}
	
}
