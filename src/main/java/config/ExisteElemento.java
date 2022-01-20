package config;

import webDriver.BasePage;
import webDriver.DriverFactory;

public class ExisteElemento extends BasePage {
    String URL = "https://www.amazon.com.br/";

    public void setUp() {
        DriverFactory.getDriver().get(URL);
    }

}
