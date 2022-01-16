package config;

import java.awt.*;
import java.awt.event.KeyEvent;

public class RobotUtil {

    public void fecharJanela() throws AWTException {
        Robot robot = new Robot();
        robot.keyPress(KeyEvent.VK_ALT);
        robot.keyPress(KeyEvent.VK_F4);
        robot.keyRelease(KeyEvent.VK_F4);
        robot.keyRelease(KeyEvent.VK_ALT);

    }

}
