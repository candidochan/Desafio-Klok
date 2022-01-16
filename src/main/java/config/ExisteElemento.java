package config;

import webDriver.BasePage;
import webDriver.DriverFactory;

public class ExisteElemento extends BasePage {
    String URL = "https://homobapp.sompo.com.br/PortalCorretor_Th/Login.aspx";

    public void setUp() {
        DriverFactory.getDriver().get(URL);
    }

}
