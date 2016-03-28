package cong.common.util;
/**
 * Created by cong on 2014/3/19.
 */

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.Iterator;

import jodd.props.Props;
import jodd.props.PropsEntry;

/**
 * @author cong onion_sheep@163.com|onionsheep@gmail.com
 */
public class Config {
    public static final String DEFAULT_PROP_FILE_PATH = "config.props";

    private static String propFilePath = DEFAULT_PROP_FILE_PATH;
    private static final Logger log = LoggerFactory.getLogger(Config.class);

    public static Props load(String filePath) {
        return load(new File(filePath));
    }

    public static Props load() {
        return load(Config.class.getClassLoader().getResourceAsStream(propFilePath));
    }

    public static Props load(File configFile) {
        if (configFile.isFile() && configFile.canRead()) {
            try {
                return load(new FileInputStream(configFile));
            } catch (FileNotFoundException e) {
                e.printStackTrace();
            }
        }
        return new Props();
    }

    public static Props load(InputStream is) {
        Props props = new Props();
        try {
            props.load(is);
        } catch (IOException e) {
            e.printStackTrace();
        }

        if (log.isDebugEnabled()) {
            log.debug("props loaded.");
            final Iterator<PropsEntry> iterator = props.iterator();
            while (iterator.hasNext()) {
                log.debug("{}", iterator.next());
            }
        }
        return props;
    }

    public static String getPropFilePath() {
        return propFilePath;
    }

    public static void setPropFilePath(String propFilePath) {
        Config.propFilePath = propFilePath;
    }
}
