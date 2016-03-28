package icat.sinomed.controller;

import com.github.cage.Cage;
import com.github.cage.GCage;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import jodd.util.StringUtil;


@WebServlet(name = "CaptchaServlet", urlPatterns = {"/captcha"})
public class CaptchaControllerServlet extends HttpServlet {

    public static final String CAPTCHA_SESSION_NAME = "captcha";
    public static final Logger LOG                  = LoggerFactory.getLogger(CaptchaControllerServlet.class);


    public enum Validity {
        /**
         * 有效的
         */
        VALID,
        /**
         * 无效的
         */
        INVALID,
        /**
         * 过期的
         */
        EXPERIED
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        final HttpSession session = request.getSession();
        final String token = cage.getTokenGenerator().next();
        final String subtoken = token.substring(0, 4);
        session.setAttribute(CAPTCHA_SESSION_NAME, subtoken);
        setResponseHeaders(response);
        cage.draw(subtoken, response.getOutputStream());
    }

    protected static final Cage cage = new GCage();

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);

    }

    protected void setResponseHeaders(HttpServletResponse resp) {
        resp.setContentType("image/" + cage.getFormat());
        resp.setHeader("Cache-Control", "no-cache, no-store");
        resp.setHeader("Pragma", "no-cache");
        final long time = System.currentTimeMillis();
        resp.setDateHeader("Last-Modified", time);
        resp.setDateHeader("Date", time);
        resp.setDateHeader("Expires", time);
    }

    protected static Validity validateCaptcha(HttpServletRequest request, String captcha){
        if(StringUtil.isBlank(captcha)){
            return Validity.INVALID;
        }
        final HttpSession session = request.getSession();
        final Object sessionCaptcha = session.getAttribute(CAPTCHA_SESSION_NAME);
        session.removeAttribute(CAPTCHA_SESSION_NAME);
        LOG.debug("captcha in session : {}, captcha to be validate : {}", sessionCaptcha, captcha);
        if(sessionCaptcha == null){
            return Validity.EXPERIED;
        }
        if(!(sessionCaptcha instanceof String)){
            throw new RuntimeException("session中的验证码不是字符串");
        }
        final String sessionCaptchaString = (String) sessionCaptcha;

        if(captcha.equalsIgnoreCase(sessionCaptchaString)){
            return Validity.VALID;
        }else{
            return Validity.INVALID;
        }
    }

}
