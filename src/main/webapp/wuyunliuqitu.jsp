<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <title>五运六气时相医学</title>
    <link rel="stylesheet" href="assets/css/amazeui.min.css">
    <link rel="stylesheet" href="css/wuyunliuqitu.css">
</head>
<body data-not-login="${empty user}">
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
            <%--<div id="main-right-top" class="am-cf">--%>

            <%--</div>--%>
                <c:if test="${not empty user}">
                    <div id="main-right-up">
                        <div id="date-container">
                            <form name="form" action="wuyunliuqitu" method="get" class="date">
                                <label>出生日期：</label>
                                <select id="date1" name="dateone">
                                    <c:forEach items="${list}" var="rl">
                                        <option  value="${rl}" ${rl == currentRl ? "selected":""} >${rl}</option>
                                    </c:forEach>
                                </select>
                                <select id="year" name="YYYY">
                                    <c:forEach begin="1901" end="2049" step="1" var="y">
                                        <option value="${y}" ${y == currentYear ? "selected":""} >${y}年</option>
                                    </c:forEach>
                                </select>
                                <select id="month" name="MM">
                                    <c:forEach begin="1" end="12" step="1" var="m">
                                        <option value="${m}" ${m == currentMonth ? "selected":""} >${m}月</option>
                                    </c:forEach>
                                </select>
                                <select id="day" name="DD">
                                    <c:forEach begin="1" end="31" step="1" var="d">
                                        <option value="${d}" ${d == currentDay ? "selected":""} >${d}日</option>
                                    </c:forEach>
                                </select>
                                <select id="hour" name="HH">
                                    <c:forEach begin="00" end="23" step="1" var="h">
                                        <option value="${h}" ${h == currentHour ? "selected":""} >${h}时</option>
                                    </c:forEach>
                                </select>
                                <input type="submit" value="查询" class="red-btn" id="query-btn"/>
                            </form>

                            <p>
                            <div id="c" style="align-content: flex-end" class="f">${rl}${TDyear}</div>
                            </p>
                        </div>
                        <div id="wuyunliuqitu" class="am-cf">
                            <div id="wylq-table" class="am-fl am-cf">
                                <div id="wylq-table-left" class="am-fl">
                                    <table class="am-table am-table-bordered">
                                        <tr>
                                            <td>
                                                <div>司天</div>
                                            </td>
                                            <td>
                                                <div>${si}</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div>客气</div>
                                            </td>
                                            <td>
                                                <div>${ke}</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div>中运</div>
                                            </td>
                                            <td>
                                                <div>${zhong}</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div>主气</div>
                                            </td>
                                            <td>
                                                <div>${zhu}</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div>在泉</div>
                                            </td>
                                            <td>
                                                <div>${zai}</div>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                                <div id="wylq-table-arrow" class="am-fl">
                                    <img src='/img/arrow.png'/>
                                </div>
                                <div id="wylq-table-right" class="am-fl">
                                    <table class="am-table am-table-bordered">
                                        <tr>
                                            <td>
                                                <div id="sinum">${si_num}</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div id="kenum">${ke_num}</div>
                                            </td>
                                        </tr>
                                        <tr>
                                                <%--${x}--%>
                                            <td>
                                                <div id="zhongnum">${zhong_num}</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div id="zhunum">${zhu_num}</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div id="zainum">${zai_num}</div>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                            <div id="wylq-image" class="am-fr">

                                <canvas id="wylq-canvas" width="400" height="400">你的浏览器不支持canvas
                                </canvas>
                                <div id="mt">命图</div>
                            </div>
                        </div>
                    </div>
                </c:if>
                <c:if test="${not empty user}">
                    <div id="main-right-down">
                        <div id="date-container2">
                            <form name="form" action="/wuyunliuqitu" method="get" class="date2">
                                <label>发病日期：</label>
                                <select id="date2" class="calendar-type" name="datetwo">
                                        <c:forEach items="${list2}" var="rl2">
                                            <option  value="${rl2}">${rl2}</option>
                                        </c:forEach>
                                    </select>
                                </select>
                                <select id="year2" name="YYYY">
                                    <c:forEach begin="1901" end="2049" step="1" var="y2">
                                        <option value="${y2}">${y2}年</option>
                                    </c:forEach>
                                </select>
                                <select id="month2" name="MM">
                                    <c:forEach begin="1" end="12" step="1" var="m2">
                                        <option value="${m2}"} >${m2}月</option>
                                    </c:forEach>
                                </select>
                                <select id="day2" name="DD">
                                    <c:forEach begin="1" end="31" step="1" var="d2">
                                        <option value="${d2}"} >${d2}日</option>
                                    </c:forEach>
                                </select>
                                <select id="hour2" name="HH">
                                        <c:forEach begin="00" end="24" step="1" var="h2">
                                    <option value="${h2}"} >${h2}时</option>
                                        </c:forEach>
                                </select>
                                <input id="search-btn" type="submit" value="查询" class="red-btn" id="query-btn2"/>
                            </form>

                            <p>
                            <div id="c2" style="align-content: flex-end" class="f">${TDyear2}</div>
                            </p>
                        </div>
                        <div id="wuyunliuqitu2" class="am-cf">
                            <div id="wylq-table2" class="am-fl am-cf">
                                <div id="wylq-table-left2" class="am-fl">
                                    <table class="am-table am-table-bordered">
                                        <tr>
                                            <td>
                                                <div>司天</div>
                                            </td>
                                            <td>
                                                <div>${si2}</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div>客气</div>
                                            </td>
                                            <td>
                                                <div>${ke2}</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div>中运</div>
                                            </td>
                                            <td>
                                                <div>${zhong2}</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div>主气</div>
                                            </td>
                                            <td>
                                                <div>${zhu2}</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div>在泉</div>
                                            </td>
                                            <td>
                                                <div>${zai2}</div>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                                <div id="wylq-table-arrow2" class="am-fl">
                                    <img src='/img/arrow.png'/>
                                </div>
                                <div id="wylq-table-right2" class="am-fl">
                                    <table class="am-table am-table-bordered">
                                        <tr>
                                            <td>
                                                <div id="sinum2">${si_num2}</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div id="kenum2">${ke_num2}</div>
                                            </td>
                                        </tr>
                                        <tr>
                                                <%--${x}--%>
                                            <td>
                                                <div id="zhongnum2">${zhong_num2}</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div id="zhunum2">${zhu_num2}</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div id="zainum2">${zai_num2}</div>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                            <div id="wylq-image2" class="am-fr">
                                <canvas id="wylq-canvas2" width="400" height="400">你的浏览器不支持canvas</canvas>
                                <div id="bt">
                                    病图
                                </div>
                            </div>
                        </div>
                    </div>
                </c:if>
        </div>

    </div>
    <div id="footer">
        <div id="footer-label">
            Copy right@山东大学威海计算机应用技术研究所 地址：山东省威海市文化西路180号 E-mail:pjc@sdu.edu.cn
        </div>
    </div>
</div>
<script src="assets/js/jquery.min.js"></script>
<script src="assets/js/amazeui.min.js"></script>
<script src="assets/js/amazeui.ie8polyfill.min.js"></script>
<script src="assets/js/amazeui.widgets.helper.min.js"></script>
<script src="js/wuyunliuqitu.js"></script>
<script src="js/wuyunliuqitu2.js"></script>
<%--<script src="js/ylyear.js"></script>--%>
</body>
</html>
