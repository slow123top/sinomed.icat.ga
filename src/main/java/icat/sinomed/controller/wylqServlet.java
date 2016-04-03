package icat.sinomed.controller;

import wuyunliuqi.SiTian;
import wuyunliuqi.ZhongYun;
import wuyunliuqi.ZhuQi;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.text.ParseException;
import java.time.LocalDate;
import static org.eclipse.jetty.util.StringUtil.isBlank;

/**
 * Created by Hu_2015 on 2016/3/28.
 */
@WebServlet(name = "wylqServlet", urlPatterns = "/wylqt")
public class wylqServlet extends HttpServlet{
/**
 * Created by Hu_2015 on 2016/3/28.
 */
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        PrintWriter out = response.getWriter();

        String year = request.getParameter("y");
        String month = request.getParameter("m");
        String day = request.getParameter("d");

        if (isBlank(year) || isBlank(month) || isBlank(day)) {
            final LocalDate now = LocalDate.now();
            day = Integer.toString(now.getDayOfMonth());
            month = Integer.toString(now.getMonthValue());
            year = Integer.toString(now.getYear());
        }
        int[] a = new int[5];
        String nyrcal = String.format("%s年%s月%s日", year, month, day);
        try {
            int si_num = SiTian.st(nyrcal).getStnum();
            int ke_num = SiTian.kq(nyrcal).getStnum();
            int zhong_num = ZhongYun.zy(nyrcal).getZynum();
            int zhu_num = ZhuQi.zq(nyrcal).getNum();
            int zai_num = SiTian.st(nyrcal).getZqnum();

            a = new int[]{si_num,ke_num,zhong_num,zhu_num,zai_num};

        } catch (Exception e) {
            e.printStackTrace();
        }
        for(int i = 0; i <=4; i++) {
//            out.print("司天：");
            out.println(a[i]);
//            out.print(",");
//
        }
        response.flushBuffer();
    }

}


