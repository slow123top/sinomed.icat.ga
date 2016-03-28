package sqlUtil;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

/**
 * Created by Hu_2015 on 2016/3/21.
 */
public class sqlUtil {

//    static final String driver;
//    static final String url;
//    static final String username;
//    static final String password;

    private static final String DB_driver = "com.mysql.jdbc.Driver";
    private static final String DB_url    = "jdbc:mysql://192.168.11.9:3306/five&six";
    private static final String DB_user   = "root";
    private static final String DB_passwd = "123456";

//    static {
//        final Properties properties = new Properties();
//        try {
//            properties.load(ClassLoader.getSystemResourceAsStream("config.props"));
//        } catch (IOException e) {
//            throw new RuntimeException("读取配置文件错误");
//        }
//        if (!properties.isEmpty()) {
//            driver = properties.getProperty("db.driver");
//            url = properties.getProperty("db.url");
//            username = properties.getProperty("db.username");
//            password = properties.getProperty("db.password");
//        } else {
//            driver = null;
//            url = null;
//            username = null;
//            password = null;
//        }
//    }

    public static Connection createConntion() throws ClassCastException, SQLException, ClassNotFoundException {
        Connection conn;
        Class.forName(DB_driver);
        conn = DriverManager.getConnection(DB_url, DB_user, DB_passwd);

        return conn;
    }
/*
    public static void main(String[] args) throws SQLException, ClassNotFoundException {

        //Statement stmt = null;
        Connection conn = sqlUtil.createConntion();
        ResultSet rs;
        String sql;
        //Connection conn;
        Statement stmt = conn.createStatement();
        sql="select * from zhongyun where TG = '丁'";

        rs = stmt.executeQuery(sql);
        while(rs.next())
        {
            System.out.println(rs.getString(1));
            System.out.println(rs.getString(2));
        }
        rs.close();
        stmt.close();
        conn.close();
    }
*/
}


