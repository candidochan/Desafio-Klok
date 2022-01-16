package webDriver;

import cucumber.api.Scenario;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriverException;

public class BaseSteps {
    public static Scenario scenario;

    public static void OpenBrowser() {
        DriverFactory.getDriver();
    }

    public static void CloseBrowser() {
        DriverFactory.killDriver();
    }

    public static void screenShotNow() {
        try {
            byte[] screenshot = ((TakesScreenshot) DriverFactory.getDriver()).getScreenshotAs(OutputType.BYTES);
            scenario.embed(screenshot, "image/png");
            scenario.write("URL ScreenShot: " + DriverFactory.getDriver().getCurrentUrl());
        } catch (WebDriverException wde) {
            scenario.write("Embed ScreenShot " + wde.getMessage());
        } catch (ClassCastException cce) {
            cce.printStackTrace();
        }
    }
}

