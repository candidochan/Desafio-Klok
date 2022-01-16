package config;

import java.io.FileReader;
import java.util.Properties;

import static java.lang.System.getenv;

public class ConfigUtils {
    private static Properties config;
    private static String URL_TOTEM = "totem.url";
    private static final String CONFIG_FILE = "src/test/resources/config.properties";


    private static Properties load() throws Exception {
        config = new Properties();
        if (config.isEmpty()) {
            config.load(new FileReader(CONFIG_FILE));
        }
        return config;
    }

    public static String getProperty(String property, String defaultValue) {
        String result = null;

        try {
            result = getenv(property);
            if (isBlank(result)) {
                result = System.getProperty(property);
            }
            if (isBlank(result)) {
                Properties file = load();
                result = file.getProperty(property, defaultValue);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return result;
    }

    private static boolean isBlank(String result) {
        return false;
    }

    public static String getUrl() {
        return getProperty(URL_TOTEM, "");
    }


}
