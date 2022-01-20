package stepsDefinitions;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import webDriver.BaseSteps;
import webDriver.DriverFactory;

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


    @After
    public void Finish(Scenario scenario) throws Throwable {
        System.out.println("------------------------------------------------------------");
        System.out.println(scenario.getStatus() + " " + scenario.getName());
        System.out.println("------------------------------------------------------------");
        //Gera ScreenShot
        if (scenario.isFailed()) {
            BaseSteps.screenShotNow();
        }
        BaseSteps.CloseBrowser();

    }
}