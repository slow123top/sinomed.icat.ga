package icat.sinomed.controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import cong.common.view.JSONView;
import icat.sinomed.entity.APIResponse;
import icat.sinomed.entity.User;
import icat.sinomed.service.UserService;

/**
 * Created by liucong on  16-3-25-025.
 */
@WebServlet(name = "RegisterControllerServlet", urlPatterns = "/register")
public class RegisterControllerServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request,response);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        final String                            captcha = request.getParameter("captcha");
        final CaptchaControllerServlet.Validity validity = CaptchaControllerServlet.validateCaptcha(request, captcha);
        final APIResponse                       r;
        if (validity == CaptchaControllerServlet.Validity.VALID) {
            final String username = request.getParameter("username");
            final String password = request.getParameter("password");
            final String displayName = request.getParameter("displayName");
            final User   user     = new User().setUsername(username).setPassword(password).setDisplayName(displayName);
            final UserService us = new UserService();
            if(us.existSameNameUser(user)){
                r = new APIResponse("用户名已被使用，请换个名字吧", APIResponse.Status.ERROR);
            }else{
                if(user.isValidNewUser()){
                    final int i = us.addUser(user);
                    if(i == 1){
                        r = new APIResponse("注册成功，请登陆吧", APIResponse.Status.SUCCESS);
                    }else{
                        r = new APIResponse("注册失败，请联系管理员", APIResponse.Status.ERROR);
                    }
                }else{
                    r = new APIResponse("注册失败，你填写的用户信息不完整", APIResponse.Status.ERROR);
                }
            }

        }else{
            r = new APIResponse("验证码错误，请点击验证码刷新后输入", APIResponse.Status.ERROR);
        }

        JSONView.render(request, response, r);
    }
}
