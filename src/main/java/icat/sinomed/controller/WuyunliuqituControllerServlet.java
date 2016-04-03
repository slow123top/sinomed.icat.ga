package icat.sinomed.controller;

import toLunar.GreToLun;
import wuyunliuqi.HuoS;
import wuyunliuqi.SiTian;
import wuyunliuqi.ZhongYun;
import wuyunliuqi.ZhuQi;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.text.ParseException;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import static org.eclipse.jetty.util.StringUtil.isBlank;

/**
 * Created by liucong on  16-3-25-025.
 */
@WebServlet(name = "WuyunliuqituControllerServlet", urlPatterns = {"/wuyunliuqitu"})
public class WuyunliuqituControllerServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setAttribute("contextPath", request.getContextPath());
        // String dateString = "2015-12-23";
        List list = new ArrayList();
        list.add("公历");
        list.add("阴历");
        String dateone       = request.getParameter("dateone");
        String year       = request.getParameter("YYYY");
        String month      = request.getParameter("MM");
        String day        = request.getParameter("DD");
        String hour        = request.getParameter("HH");
//        String rlj        = request.getParameter("dateone");
        String rl = null;
        String rlj = null;
        String nyrcal = null;
        String fromtoyear = null;
        // String cal = null, cal1 = null;
        if (isBlank(year) || isBlank(month) || isBlank(day) || isBlank(hour) || isBlank(dateone)) {
//            final LocalDate now = LocalDate.now();
            final LocalDateTime now = LocalDateTime.now();
            day = Integer.toString(now.getDayOfMonth());
            month = Integer.toString(now.getMonthValue());
            year = Integer.toString(now.getYear());
            hour = Integer.toString(now.getHour());
            nyrcal = String.format("%s年%s月%s日", year, month, day);
            try {
                fromtoyear = GreToLun.toTDYear(nyrcal);
            } catch (ParseException e) {
                e.printStackTrace();
            }
            rlj = "公历";//
            rl = "阴历  ：";
        }else if(dateone.equals("公历")){
            nyrcal = String.format("%s年%s月%s日", year, month, day);

            try {
                fromtoyear = GreToLun.toTDYear(nyrcal);
            } catch (ParseException e) {
                e.printStackTrace();
            }
            rl = "阴历  ：";
        }else if(dateone.equals("阴历")){

            nyrcal = String.format("%s年%s月%s日", year, month, day);
                fromtoyear = GreToLun.toGlYear(nyrcal);

            nyrcal = fromtoyear;
            rl = "公历  ：";
        }
        request.setAttribute("rl",rl);
        request.setAttribute("list",list);
        request.setAttribute("currentRl", dateone);
        request.setAttribute("currentYear", year);
        request.setAttribute("currentMonth", month);
        request.setAttribute("currentDay", day);
        request.setAttribute("currentHour", hour);

            /*
            输出三角号
             */

        try {
            String x = HuoS.Sh(nyrcal);
            request.setAttribute("TDyear", fromtoyear);
            String si        = SiTian.st(nyrcal).getSt();
            String ke        = SiTian.kq(nyrcal).getSt();
            String zhong     = ZhongYun.zy(nyrcal).getZy();
           //String zhu       = ZhuQi.zq(nyrcal);
            String zhu       = ZhuQi.zq(nyrcal).getZq();
            String zai       = SiTian.st(nyrcal).getZq();
            int    si_num    = SiTian.st(nyrcal).getStnum();
            int    ke_num    = SiTian.kq(nyrcal).getStnum();
            int    zhong_num = ZhongYun.zy(nyrcal).getZynum();
            int    zhu_num   = ZhuQi.zq(nyrcal).getNum();
            //int    zhu_num   = ZhuQi.zq(nyrcal);
            int    zai_num   = SiTian.st(nyrcal).getZqnum();
             String zhongnum = String.valueOf(zhong_num);
            zhongnum = zhongnum + x;
            request.setAttribute("si", si);
            request.setAttribute("ke", ke);
            request.setAttribute("zhong", zhong);
            request.setAttribute("zhu", zhu);
            request.setAttribute("zai", zai);
            request.setAttribute("si_num", si_num);
            request.setAttribute("ke_num", ke_num);
            request.setAttribute("zhong_num", zhongnum);
            request.setAttribute("zhu_num", zhu_num);
            request.setAttribute("zai_num", zai_num);


        } catch (Exception e) {
            e.printStackTrace();
        }


        response.setContentType("text/html");
        response.setCharacterEncoding("UTF-8");

//        request.getRequestDispatcher("/wuyunliuqituAjax.jsp").forward(request, response);
    }
}
