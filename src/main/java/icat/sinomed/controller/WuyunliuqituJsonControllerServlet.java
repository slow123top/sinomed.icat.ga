package icat.sinomed.controller;

import cong.common.view.JSONView;
import icat.sinomed.entity.APIResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import toLunar.GreToLun;
import wuyunliuqi.*;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.text.ParseException;
import java.time.LocalDateTime;

import static org.eclipse.jetty.util.StringUtil.isBlank;

/**
 * Created by Hu_2015 on 2016/3/31.
 */
@WebServlet(name = "WuyunliuqituJsonControllerServlet", urlPatterns = "/api/wuyunliuqitu")
public class WuyunliuqituJsonControllerServlet extends HttpServlet {

    private static final Logger logger = LoggerFactory.getLogger(WuyunliuqituJsonControllerServlet.class);
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String calendarType = request.getParameter("calendarType");
        String year = request.getParameter("year");
        String month = request.getParameter("month");
        String day = request.getParameter("day");
        String hour = request.getParameter("hour");
        String minute = request.getParameter("minute");
        String nyrcal = null;
        String convertedDateTime = null;
        String gregorianNyrCal = null;
//        if(hour  )
        if (isBlank(year) || isBlank(month) || isBlank(day) || isBlank(minute) || isBlank(calendarType)) {
            final LocalDateTime now = LocalDateTime.now();
            day = Integer.toString(now.getDayOfMonth());
            month = Integer.toString(now.getMonthValue());
            year = Integer.toString(now.getYear());
            hour = Integer.toString(now.getHour());
            minute = Integer.toString(now.getMinute());
            calendarType = "公历";
        }

        APIResponse apiResponse = new APIResponse();

        nyrcal = String.format("%s年%s月%s日", year, month, day);
        try {
            if (calendarType.equals("阴历")) {
                gregorianNyrCal = GreToLun.toGlYear(nyrcal);//公历用来被调用
                convertedDateTime = "公历  ：" + GreToLun.toGlYear(nyrcal).concat(hourToLunarhour.toGrehour(hour));//公历时间用于显示.concat(hour).concat("时").concat(minute).concat("分")
            } else {//如果是公历就直接调用了
                gregorianNyrCal = nyrcal;
                convertedDateTime = "阴历  ：" + GreToLun.toTDYear(nyrcal).concat(hourToLunarhour.toLunarhour(hour)).concat("时");
            }
            apiResponse.setDataValue("convertedDateTime", convertedDateTime);

            String triangleSign = HuoS.Sh(gregorianNyrCal);
            String si = SiTian.st(gregorianNyrCal).getSt();
            String ke = SiTian.kq(gregorianNyrCal).getSt();
            String zhong = ZhongYun.zy(gregorianNyrCal).getZy();
            String zhu = ZhuQi.zq(gregorianNyrCal).getZq();
            String zai = SiTian.st(gregorianNyrCal).getZq();
            int siNum = SiTian.st(gregorianNyrCal).getStnum();
            int keNum = SiTian.kq(gregorianNyrCal).getStnum();
            int zhongNum = ZhongYun.zy(gregorianNyrCal).getZynum();
            int zhuNum = ZhuQi.zq(gregorianNyrCal).getNum();
            int zaiNum = SiTian.st(gregorianNyrCal).getZqnum();
            String zhongyunNum = String.valueOf(zhongNum);
            zhongyunNum = zhongyunNum + triangleSign;
//            apiResponse.setDataValue("triangleSign", triangleSign);
            apiResponse.setDataValue("si", si);
            apiResponse.setDataValue("ke", ke);
            apiResponse.setDataValue("zhong", zhong);
            apiResponse.setDataValue("zhu", zhu);
            apiResponse.setDataValue("zai", zai);
            apiResponse.setDataValue("siNum", siNum);
            apiResponse.setDataValue("keNum", keNum);
            apiResponse.setDataValue("zhongNum", zhongyunNum);
            apiResponse.setDataValue("zhuNum", zhuNum);
            apiResponse.setDataValue("zaiNum", zaiNum);

            apiResponse.setStatus(APIResponse.Status.SUCCESS);

        } catch (ParseException e) {
            //TODO 返回错误消息
            apiResponse.setMessage("输入的参数格式不正确");
            apiResponse.setStatus(APIResponse.Status.ERROR);
            apiResponse.setData(null);
            logger.error("输入的参数格式不正确," + e.getMessage(), e);
        }
        JSONView.render(request, response, apiResponse);

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }
}
