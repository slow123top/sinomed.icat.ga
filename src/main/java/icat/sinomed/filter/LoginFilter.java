package icat.sinomed.filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Created by liucong on  16-3-25-025.
 */
@WebFilter(filterName = "LoginFilter")
public class LoginFilter implements Filter {

    public static final String USER_SESSION_KEY = "user";

    public static boolean isLogin(HttpSession session){
        return session.getAttribute(USER_SESSION_KEY) != null;
    }

    public void destroy() {
    }

    public void doFilter(ServletRequest req, ServletResponse resp, FilterChain chain) throws ServletException, IOException {
        final HttpServletResponse response = (HttpServletResponse) resp;
        final HttpServletRequest  request     = (HttpServletRequest) req;

        final HttpSession session = request.getSession();

        final boolean isLogin = isLogin(session);



        chain.doFilter(req, resp);
    }

    public void init(FilterConfig config) throws ServletException {

    }

}
