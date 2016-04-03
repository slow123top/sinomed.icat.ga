package icat.sinomed.filter;

import cong.common.view.JSONView;
import icat.sinomed.entity.APIResponse;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

/**
 * Created by liucong on  16-3-25-025.
 */
@WebFilter(filterName = "LoginFilter", urlPatterns = {"/wuyunliuqitu", "/wuyunliuqituAjax.jsp", "/api/wuyunliuqitu"})
public class LoginFilter implements Filter {

    public static final String USER_SESSION_KEY = "user";

    public static boolean isLogin(HttpSession session) {
        return session.getAttribute(USER_SESSION_KEY) != null;
    }

    public void destroy() {
    }

    public void doFilter(ServletRequest req, ServletResponse resp, FilterChain chain) throws ServletException, IOException {
        final HttpServletResponse response = (HttpServletResponse) resp;
        final HttpServletRequest request = (HttpServletRequest) req;

        final HttpSession session = request.getSession();

        final boolean isLogin = isLogin(session);

        if (!isLogin) {
            String requestURI = request.getRequestURI();
            if (requestURI.startsWith("/api/")) {
//                response.sendRedirect("/wuyunliuqituAjax.jsp");
                JSONView.render(request, response, new APIResponse("未登录，无权使用此接口", APIResponse.Status.ERROR, "403"));
            } else {
                response.sendRedirect("/login.jsp");

        }
        } else {
            chain.doFilter(req, resp);
        }
        }

    public void init(FilterConfig config) throws ServletException {

    }

}
