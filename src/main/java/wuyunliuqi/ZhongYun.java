package wuyunliuqi;

import sqlUtil.sqlUtil;
import toLunar.GreToLun;

import java.security.InvalidParameterException;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.text.ParseException;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

/**
 * Created by Hu_2015 on 2016/3/21.
 */
public class ZhongYun {
    /*

     */

    public enum ZY {
        JJ("甲己", "土", 126, "太阴湿土"),
        YG("乙庚", "金", 28, "阳明燥金"),
        BX("丙辛", "水", 39, "太阳寒水"),
        DR("丁壬", "木", 410, "厥阴风木"),
        WG("戊癸", "火", 115, "少阴君火");
//        String tg;
        String tg;
        String wx;
        int zynum;
        String zy;

        ZY(String tg, String wx, int zynum, String zy) {
            this.tg = tg;
            this.wx = wx;
            this.zy = zy;
            this.zynum = zynum;
//              this.tg = tg;

        }

        public java.lang.String getTg() {
            return tg;
        }

        public java.lang.String getWx() {
            return wx;
        }

        public int getZynum() {
            return zynum;
        }

        public java.lang.String getZy() {
            return zy;
        }
    }

    private static List<ZY> zyList = Arrays.asList(new ZY[]{ZY.JJ, ZY.YG, ZY.BX, ZY.DR, ZY.WG});

    public static ZY zy(String cal) throws ParseException {
        String TD = GreToLun.toTDyear(cal);
//        String[] zy1 = TD.split("");
        final String zyVal = TD.substring(0,1);
        final Optional<ZY> zyOptional =
                zyList.stream().filter(st -> st.tg.substring(0, 1).equals(zyVal) || st.tg.substring(1).equals(zyVal)).findAny();
        if (zyOptional.isPresent()) {
            return zyOptional.get();
        } else {
            throw new InvalidParameterException(String.format("输入参数为%s, 无法算出有效的中运。", cal));
        }
    }
}
