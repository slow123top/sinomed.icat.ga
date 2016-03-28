<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>五运六气时相医学</title>
    <link rel="stylesheet" href="assets/css/amazeui.min.css">
    <link rel="stylesheet" href="css/wuyunliuqitu.css">
</head>
<body data-notLogin="<%=session.getAttribute("user") == null ? "true" : "false"%>">
<div id="body-wrap">
    <div id="header">
        <img src="img/banner2.jpg">
    </div>
    <div id="main-content" class="am-cf">
        <div id="main-left" class="am-fl">
            <div id="login-status">
                您好，请登录！
            </div>
            <div id="function-list">
                <ul class="unstyled-list">
                    <li><a href="/wuyunliuqitu">五运六气图</a></li>
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
