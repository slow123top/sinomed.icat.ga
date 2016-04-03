<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>五运六气时相医学</title>
    <link rel="stylesheet" href="assets/css/amazeui.min.css">
    <link rel="stylesheet" href="css/wuyunliuqitu.css">
</head>
<body data-not-login="${empty user}" onload="getData()">
<div id="body-wrap">
    <div id="header">
        <%--<img src="img/banner2.jpg">--%>
        <div id="login-area" class="am-fr">
            <button id="login" type="button" class="red-btn"
                    data-am-modal="{target: '#login-modal', closeViaDimmer: 0}">
                登录
            </button>
            <button id="sig" type="button" class="red-btn"
                    data-am-modal="{target: '#sig-modal', closeViaDimmer: 0}">
                注册
            </button>
            <button id="logout" type="button" class="red-btn">
                <a href="${contextPath}/login?logout=true">注销</a>
            </button>
        </div>
        <div class="am-modal am-modal-no-btn" tabindex="-1" id="login-modal">
            <div class="am-modal-dialog">
                <div class="am-modal-hd">登录
                    <a href="javascript: void(0)" class="am-close am-close-spin" data-am-modal-close>&times;</a>
                </div>
                <div class="am-modal-bd">
                    <form class="am-form am-form-horizontal" action="/login" method="post">
                        <div class="am-form-group">
                            <label for="login-username" class="am-u-sm-2 am-form-label">用户名</label>
                            <div class="am-u-sm-10">
                                <input name="username" type="text" id="login-username" placeholder="请输入您的用户名">
                            </div>
                        </div>

                        <div class="am-form-group">
                            <label for="login-password" class="am-u-sm-2 am-form-label">密码</label>
                            <div class="am-u-sm-10">
                                <input name="password" type="password" id="login-password"
                                       placeholder="请输入您的密码">
                            </div>
                        </div>

                        <div class="am-form-group">
                            <label for="login-captcha" class="am-u-sm-2 am-form-label">验证码</label>
                            <div class="am-u-sm-6">
                                <input name="captcha" type="text" id="login-captcha" placeholder="请输入验证码">
                            </div>
                            <div class="am-u-sm-4">
                                <img src="/captcha?r=<%=System.currentTimeMillis()%>" class="captcha-img">
                            </div>
                        </div>
                        <div class="am-form-group">
                            <div class="am-u-sm-10 am-u-sm-offset-1">
                                <span class="am-badge am-badge-danger" id="login-error-messaage"></span>
                            </div>
                        </div>
                        <div class="am-form-group">
                            <div class="am-u-sm-10 am-u-sm-offset-1">
                                <button id="login-btn" type="submit" class="am-btn am-btn-default">登陆</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
        <div class="am-modal am-modal-no-btn" tabindex="-1" id="sig-modal">
            <div class="am-modal-dialog">
                <div class="am-modal-hd">请注册
                    <a href="javascript: void(0)" class="am-close am-close-spin" data-am-modal-close>&times;</a>
                </div>
                <div class="am-modal-bd">
                    <form class="am-form am-form-horizontal" action="/register" method="post">
                        <div class="am-form-group">
                            <label for="register-username" class="am-u-sm-2 am-form-label">用户名</label>
                            <div class="am-u-sm-10">
                                <input name="username" type="text" id="register-username"
                                       placeholder="请输入您的用户名">
                            </div>
                        </div>
                        <div class="am-form-group">
                            <label for="register-displayName" class="am-u-sm-2 am-form-label">昵称</label>
                            <div class="am-u-sm-10">
                                <input name="displayName" type="text" id="register-displayName"
                                       placeholder="请输入您的昵称（用于显示）">
                            </div>
                        </div>
                        <div class="am-form-group">
                            <label for="register-password" class="am-u-sm-2 am-form-label">密码</label>
                            <div class="am-u-sm-10">
                                <input name="password" type="password" id="register-password"
                                       placeholder="请输入您的密码">
                            </div>
                        </div>

                        <div class="am-form-group">
                            <label for="register-captcha" class="am-u-sm-2 am-form-label">验证码</label>
                            <div class="am-u-sm-6">
                                <input name="captcha" type="text" id="register-captcha" placeholder="请输入验证码">
                            </div>
                            <div class="am-u-sm-4">
                                <img src="/captcha?r=<%=System.currentTimeMillis()%>" class="captcha-img">
                            </div>
                        </div>

                        <div class="am-form-group">
                            <div class="am-u-sm-10 am-u-sm-offset-1">
                                <span class="am-badge am-badge-danger" id="register-error-messaage"></span>
                            </div>
                        </div>

                        <div class="am-form-group">
                            <div class="am-u-sm-10 am-u-sm-offset-1">
                                <button type="submit" id="register-btn" class="am-btn am-btn-default">注册</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    </div>
    <div id="main-content" class="am-cf">
        <div id="main-left" class="am-fl">
            <div id="login-status">
                您好，<c:if test="${empty user}">请登录</c:if><c:if test="${not empty user}">${user.displayName}</c:if>！
            </div>
            <div id="function-list">
                <ul class="unstyled-list">
                    <li><a href="/wuyunliuqituAjax.jsp">五运六气图</a></li>
                    <li><a href="/building.jsp">其他..</a></li>
                    <li><a href="/building.jsp">其他..</a></li>
                    <li><a href="/building.jsp">其他..</a></li>
                    <li><a href="/building.jsp">其他..</a></li>
                    <li><a href="/building.jsp">其他..</a></li>
                    <li><a href="/building.jsp">其他..</a></li>
                    <li><a href="/building.jsp">其他..</a></li>
                    <li><a href="/building.jsp">其他..</a></li>
                    <li><a href="/building.jsp">其他..</a></li>
                </ul>
            </div>
        </div>
        <div id="main-right">
            <h1>功能正在设计，请待功能推出后使用</h1>
        </div>
    </div>
    <div id="footer"></div>
</div>

<script src="assets/js/jquery.min.js"></script>
<script src="assets/js/amazeui.min.js"></script>
<script src="assets/js/amazeui.ie8polyfill.min.js"></script>
<script src="assets/js/amazeui.widgets.helper.min.js"></script>
<script src="js/wuyunliuqitu.js"></script>
<script src="js/codecheck.js"></script>

</body>
</html>
