package wuyunliuqi;

import java.security.InvalidParameterException;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.text.ParseException;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import sqlUtil.sqlUtil;
import toLunar.GreToLun;

/**
 * Created by Hu_2015 on 2016/3/21.
 */
public class SiTian {
    /*
    返回司天
     */

    public enum ST {
        YS(1,"寅申", 17, "少阳相火", 410, "厥阴风木"),
        MY(2,"卯酉", 28, "阳明燥金", 115, "少阴君火"),
        CX(3,"辰戌", 39, "太阳寒水", 126, "太阴湿土"),
        SH(4,"巳亥", 410, "厥阴风木", 17, "少阳相火"),
        WZ(5,"午子", 115, "少阴君火", 28, "阳明燥金"),
        WC(6,"未丑", 126, "太阴湿土", 39, "太阳寒水");
        int mon;
        String dz;
        int stnum;
        String st;
        int zqnum;
        String zq;

        ST(int mon,String dz, int stnum, String st, int zqnum, String zq) {
            this.mon = mon;
            this.dz = dz;
            this.stnum = stnum;
            this.st = st;
            this.zqnum = zqnum;
            this.zq = zq;
        }

        public int getMon() {
            return mon;
        }

        public String getDz() {
            return dz;
        }

        public String getSt() {
            return st;
        }

        public String getZq() {
            return zq;
        }

        public int getStnum() {
            return stnum;
        }

        public int getZqnum() {
            return zqnum;
        }
    }
        private static List<ST> stList = Arrays.asList(new ST[]{ST.YS, ST.MY, ST.CX, ST.SH, ST.WZ, ST.WC});

        public static ST st(String cal) throws ParseException {

            String TD = GreToLun.toTDyear(cal);
            final String stVal = TD.substring(1);
            final Optional<ST> stOptional = stList.stream().filter(st -> st.dz.substring(0, 1).equals(stVal) || st.dz.substring(1).equals(stVal)).findAny();
            if (stOptional.isPresent()) {
                return stOptional.get();
            } else {
                throw new InvalidParameterException(String.format("输入参数为%s, 无法算出有效司天和在泉。", cal));
            }
        }
    public static ST kq(String cal) throws ParseException{
       int kqnum = 0;
        //String kq3 = SiTian.sT(cal);
        int zkq_step = ZhuQi.zq(cal).getStep();
        int skq_step = SiTian.st(cal).getMon();
//        int zq_num = KeQi.kq_num(cal);
        if(skq_step <= 3) {
            kqnum = skq_step + 6 - (3 - zkq_step);
        } else if(skq_step > 3) {
            kqnum = zkq_step - 3 + skq_step;
        }
        while(kqnum >= 7)
            kqnum -= 6;
//        String kq = SiTian.st(cal).getSt();
        final int kq_num = kqnum;
        final Optional<ST> kqOptional = stList.stream().filter(kq->kq.mon ==kq_num).findAny();
        if (kqOptional.isPresent()) {
            return kqOptional.get();
        } else {
            throw new InvalidParameterException(String.format("输入参数为%s, 无法算出有效客气。", cal));
        }
    }
    }

