package wuyunliuqi;

import java.security.InvalidParameterException;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

/**
 * Created by Hu_2015 on 2016/3/21.
 */
public class ZhuQi {

    public enum ZQ {
        JYFM(1, 121, 321, 410, "厥阴风木"),
        SYJH(2, 321, 521, 115, "少阴君火"),
        SYXH(3, 521, 721, 17, "少阳相火"),
        TYST(4, 721, 921, 126, "太阴湿土"),
        YMZJ(5, 921, 1121, 28, "阳明燥金"),
        TYHS(6, 1121, 1321, 39, "太阳寒水");

        int    step;
        int    start;
        int    end;
        int    num;
        String zq;

        public String getZq() {
            return zq;
        }

        ZQ(int step, int start, int end, int num, String zq) {
            this.step = step;
            this.start = start;
            this.end = end;
            this.num = num;
            this.zq = zq;
        }

//        public String getSt() {
//            return st;
//        }

        public int getStep() {
            return step;
        }

        public int getStart() {
            return start;
        }

        public int getEnd() {
            return end;
        }

        public int getNum() {
            return num;
        }

//        public String getText() {
//            return text;
//        }
    }

    private static List<ZQ> zqList = Arrays.asList(new ZQ[]{ZQ.JYFM, ZQ.SYJH, ZQ.SYXH, ZQ.TYST, ZQ.YMZJ, ZQ.TYHS});


    public static ZQ zq(String cal) {
        String y = cal.substring(0, 4);
        String m = cal.substring(cal.indexOf('年') + 1, cal.indexOf('月'));
        String d = cal.substring(cal.indexOf('月') + 1, cal.indexOf('日'));
        if (d.length() == 1) {
            d = "0" + d;
        }
        int zq4 = Integer.parseInt(m + d);
        if (zq4 <= 121)
            zq4 += 1200;

        final int zaVal = zq4;

        final Optional<ZQ> zqOptional = zqList.stream().filter(zq -> zq.start <= zaVal && zq.end > zaVal).findAny();
        if (zqOptional.isPresent()) {
            return zqOptional.get();
        } else {
            throw new InvalidParameterException(String.format("输入参数为%s, 无法算出有效主气。", cal));
        }
    }
//    public stat
}


