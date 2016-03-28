package icat.sinomed.controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import cong.common.util.WebUtil;
import cong.common.view.JSONView;
import icat.sinomed.entity.APIResponse;
import icat.sinomed.entity.User;
import icat.sinomed.filter.LoginFilter;
import icat.sinomed.service.UserService;

/**
 * Created by liucong on  16-3-25-025.
 */
@WebServlet(name = "LoginControllerServlet", urlPatterns = "/login")
public class LoginControllerServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        final Boolean logout = WebUtil.getParameter(request, Boolean.class, "logout");
        if(logout){
            final HttpSession session = request.getSession();
            session.invalidate();
            response.sendRedirect("/");
        }else{
            doLogin(request, response);
        }
    }

    private void doLogin(HttpServletRequest request, HttpServletResponse response) throws IOException {
        final String captcha = request.getParameter("captcha");

        final CaptchaControllerServlet.Validity validity = CaptchaControllerServlet.validateCaptcha(request, captcha);
        final APIResponse                       r;
        if (validity == CaptchaControllerServlet.Validity.VALID) {
            final String username = request.getParameter("username");
            final String password = request.getParameter("password");
            final User   user     = new User();
            user.setUsername(username);
            user.setPassword(password);
            final UserService userService = new UserService();
            final User        loginUser   = userService.login(user);
            request.getSession().setAttribute(LoginFilter.USER_SESSION_KEY, loginUser);
            if(loginUser != null){
                r = new APIResponse("登陆成功", APIResponse.Status.SUCCESS, "").setDataValue("jumpUrl", "/wuyunliuqitu");
            }else{
                r = new APIResponse("登陆失败，用户名或密码错误!", APIResponse.Status.ERROR, "");
            }

        } else {
            r = new APIResponse("登陆失败,验证码无效!", APIResponse.Status.ERROR, validity.toString());
        }
        JSONView.render(request, response, r);
    }
}
