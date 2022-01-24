package stepsDefinitions;

import com.sun.deploy.cache.Cache;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import webDriver.BaseSteps;
import webDriver.DriverFactory;

import java.io.File;
import java.io.IOException;

public class Hooks {

    /**
     * Hooks
     **/
    @Before
    public void scenario(Scenario _scenario) throws Throwable {
        BaseSteps.scenario = _scenario;

        BaseSteps.OpenBrowser();

        System.out.println("------------------------------------------------------------");
        System.out.println("Starting - " + _scenario.getName());
        System.out.println("------------------------------------------------------------");
        DriverFactory.getDriver().manage().window().maximize();
        //DriverFactory.getDriver().get("https://www.amazon.com.br/");

    }
    @After(order = 1)
    public void screenshot(Scenario cenario) {
        File file = ((TakesScreenshot) DriverFactory.getDriver()).getScreenshotAs(OutputType.FILE);
        try {
            FileUtils.copyFile(file, new File("target/screenshots/" + cenario.getName() +".jpg"));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @After(order = 0)
    public void fechaBrowser() throws InterruptedException {
        DriverFactory.killDriver();
        System.out.println("Finalizando cenário de teste.");
    }

   /* @After
    public void Finish(Scenario scenario) throws Throwable {
        System.out.println("------------------------------------------------------------");
        System.out.println(scenario.getStatus() + " " + scenario.getName());
        System.out.println("------------------------------------------------------------");
        //Gera ScreenShot
        if (scenario.isFailed()) {
            BaseSteps.screenShotNow();
        }
        BaseSteps.CloseBrowser();

    }*/
}