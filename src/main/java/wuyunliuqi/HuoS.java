package wuyunliuqi;

/**
 * Created by Hu_2015 on 2016/3/23.
 */
public class HuoS {
    public static String Sh(String cal){
        String si = null;
        String ke = null;
        String zhong = null;
        String zhu = null;
        String zai = null;
        try {
            si = SiTian.st(cal).getSt();
            ke = SiTian.kq(cal).getSt();
//            ke = KeQi.kq(cal);
            zhong = ZhongYun.zy(cal).getZy();
            zhu = ZhuQi.zq(cal).getZq();
            zai = SiTian.st(cal).getZq();
//            zai = ZaiQuan.z_q(cal);
        }catch (Exception e){
            e.printStackTrace();
        }
        String[] con = si.concat(ke).concat(zhong).concat(zhu).concat(zai).split("");
        int scount = 0;
        int hcount = 0;
        String x;
        for(int i = 3; i < 20; i++){
            if(con[i].equals("水"))
                scount ++;
            else if(con[i].equals("火"))
                hcount ++;
        }
        if(hcount >= scount) {
            x = "▲";
        }else
            x = "▼";
        return x;
    }
}
