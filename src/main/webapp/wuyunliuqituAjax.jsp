<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--<jsp:forward page='<%="/api/wuyunliuqitu"%>'/>--%>
<%--<jsp:include page='<%="/api/wuyunliuqitu"%>'/>--%>
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
            <c:if test="${not empty user}">
                <div id="main-right-up">
                    <div id="date-container">
                        <form name="form" action="wuyunliuqitu" method="get" class="date">
                            <label>出生日期：</label>
                            <div id="gre-date" class="gredate">
                            <select id="calendar-type" class="calendar-type" name="calendarType">
                                <option>公历</option>
                                <option>阴历</option>
                            </select>
                            <select id="year" class="year" name="YYYY">
                                <c:forEach begin="1901" end="2049" step="1" var="y">
                                    <option value="${y}">${y}年</option>
                                </c:forEach>
                            </select>
                            <select id="month" class="month" name="MM">
                                <c:forEach begin="1" end="12" step="1" var="m">
                                    <option value="${m}">${m}月</option>
                                </c:forEach>
                            </select>
                            <select id="day" class="day" name="DD">
                                <c:forEach begin="1" end="31" step="1" var="d">
                                    <option class="m-day" value="${d}">${d}日</option>
                                </c:forEach>
                            </select>
                            <select id="hour" class="hour" name="HH">
                                <c:forEach begin="00" end="23" step="1" var="h">
                                    <option value="${h}">${h}时</option>
                                </c:forEach>
                            </select>
                            <select id="minute" class="minute" name="mm">
                                <c:forEach begin="00" end="59" step="1" var="mm">
                                    <option value="${mm}">${mm}分</option>
                                </c:forEach>
                            </select>
                            </div>
                            <input type="submit" value="查询" class="red-btn" id="query-mtbtn"/>

                        </form>
                        <div id="convertTime" style="align-content: flex-end" class="convertedDateTime"></div>
                    </div>
                    <div id="mingtu" class="am-cf">

                        <div id="wylq-table" class="am-fl am-cf">
                            <div id="wylq-table-left" class="am-fl">
                                <table class="am-table am-table-bordered">
                                    <tr>
                                        <td>
                                            <div>司天</div>
                                        </td>
                                        <td>
                                            <div class="sitian-text"></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div>客气</div>
                                        </td>
                                        <td>
                                            <div class="keqi-text"></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div>中运</div>
                                        </td>
                                        <td>
                                            <div class="zhongyun-text"></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div>主气</div>
                                        </td>
                                        <td>
                                            <div class="zhuqi-text"></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div>在泉</div>
                                        </td>
                                        <td>
                                            <div class="zaiquan-text"></div>
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
                                            <div id="sinum" class="sitian-num"></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div id="kenum" class="keqi-num"></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div id="zhongnum" class="zhongyun-num"></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div id="zhunum" class="zhuqi-num"></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div id="zainum" class="zaiquan-num"></div>
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


                <div id="main-right-down">
                    <div id="date-container2">
                        <form name="form" action="/wuyunliuqitu" method="get" class="date2">
                            <label>发病日期：</label>
                            <select id="calendar-type2" class="calendar-type" name="datetwo">
                                <option>公历</option>
                                <option>阴历</option>
                            </select>
                            </select>
                            <select id="b-year" class="year" name="YYYY">
                                <c:forEach begin="1901" end="2049" step="1" var="y2">
                                    <option value="${y2}" ${y2 == currentYear2 ? "selected":""} >${y2}年</option>
                                </c:forEach>
                            </select>
                            <select id="b-month" class="month" name="MM">
                                <c:forEach begin="1" end="12" step="1" var="m2">
                                    <option value="${m2}" ${m2 == currentMonth2 ? "selected":""} >${m2}月</option>
                                </c:forEach>
                            </select>
                            <select id="b-day" class="day" name="DD">
                                <c:forEach begin="1" end="31" step="1" var="d2">
                                    <option value="${d2}" ${d2 == currentDay2 ? "selected":""} >${d2}日</option>
                                </c:forEach>
                            </select>
                            <select id="b-hour" class="hour" name="HH">
                                <c:forEach begin="00" end="24" step="1" var="h2">
                                    <option value="${h2}" ${h2 == currentHour2 ? "selected":""} >${h2}时</option>
                                </c:forEach>
                            </select>
                            <select id="b-minute" class="minute" name="mm">
                                <c:forEach begin="00" end="59" step="1" var="mm">
                                    <option value="${mm}">${mm}分</option>
                                </c:forEach>
                            </select>
                            <input type="submit" value="查询" class="red-btn" id="query-btbtn"/>

                        </form>
                        <div id="convertTime2" style="align-content: flex-end" class="convertedDateTime"></div>
                    </div>
                    <div id="bingtu" class="am-cf">

                        <div id="wylq-table2" class="am-fl am-cf">
                            <div id="wylq-table-left2" class="am-fl">
                                <table class="am-table am-table-bordered">
                                    <tr>
                                        <td>
                                            <div>司天</div>
                                        </td>
                                        <td>
                                            <div class="sitian-text"></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div>客气</div>
                                        </td>
                                        <td>
                                            <div class="keqi-text"></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div>中运</div>
                                        </td>
                                        <td>
                                            <div class="zhongyun-text"></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div>主气</div>
                                        </td>
                                        <td>
                                            <div class="zhuqi-text"></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div>在泉</div>
                                        </td>
                                        <td>
                                            <div class="zaiquan-text"></div>
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
                                            <div id="sinum2" class="sitian-num"></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div id="kenum2" class="keqi-num"></div>
                                        </td>
                                    </tr>
                                    <tr>
                                            <%--${x}--%>
                                        <td>
                                            <div id="zhongnum2" class="zhongyun-num"></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div id="zhunum2" class="zhuqi-num"></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div id="zainum2" class="zaiquan-num"></div>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div id="wylq-bt" class="am-fr">
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
<script src="js/wuyunliuqituAjax.js"></script>
<%--<script src="js/wuyunliuqitu2.js"></script>--%>
<%--<script src="js/ylyear.js"></script>--%>
</body>
<script language="javascript">
    function getData(){
        $(".calendar-type").val("公历");
        var currentDate = new Date();
        $(".year").val(currentDate.getFullYear());
        $(".month").val(currentDate.getMonth()+1);
        $(".day").val(currentDate.getDate());
        $(".hour").val(currentDate.getHours());
        $(".minute").val(currentDate.getMinutes());
        var $this = $(this);
        var apiUrl = "/api/wuyunliuqitu";
        var $form = $this.parents("form");

        var calendarType = $form.children(".calendar-type").val();
        var year = $form.children(".year").val();
        var month = $form.children(".month").val();
        var day = $form.children(".day").val();
        //var hour = $form.children(".hour").val();


        $.ajax({
            url: apiUrl,
            type: "POST",
            data: {
                "calendarType": calendarType,
                "year": year,
                "month": month,
                "day": day,
                //"hour": hour
            },
            success: function (data) {
                if (data["status"] != "ERROR") {
                    var $mingtu = $("#mingtu");
                    var $bingtu = $("#bingtu");
                    $("#date-container").find(".convertedDateTime").text(data["data"]["convertedDateTime"]);
                    $mingtu.find(".sitian-text").text(data["data"]["si"]);
                    $mingtu.find(".keqi-text").text(data["data"]["ke"]);
                    $mingtu.find(".zhongyun-text").text(data["data"]["zhong"]);
                    $mingtu.find(".zhuqi-text").text(data["data"]["zhu"]);
                    $mingtu.find(".zaiquan-text").text(data["data"]["zai"]);
                    $mingtu.find(".sitian-num").text(data["data"]["siNum"]);
                    $mingtu.find(".keqi-num").text(data["data"]["keNum"]);
                    $mingtu.find(".zhongyun-num").text(data["data"]["zhongNum"]);
                    $mingtu.find(".zhuqi-num").text(data["data"]["zhuNum"]);
                    $mingtu.find(".zaiquan-num").text(data["data"]["zaiNum"]);

                    var canvas = document.getElementById('wylq-canvas');
                    var ctx;

                    if (canvas) {
                        ctx = canvas.getContext('2d');
                        ctx.clearRect(0, 0, 400, 400);
                        paintArc(ctx, 80, 180, 35, 4);//木
                        paintArc(ctx, 200, 60, 35, 4);//火
                        paintArc(ctx, 320, 180, 35, 4);//金
                        paintArc(ctx, 200, 300, 35, 4);//水
                        paintArc(ctx, 200, 180, 35, 4);//土
                        paintLine(ctx, 200, 95, 200, 145);//上
                        paintLine(ctx, 200, 215, 200, 265);//下
                        paintLine(ctx, 115, 180, 165, 180);//左
                        paintLine(ctx, 235, 180, 285, 180);//右
                        paintWord();
                        paintSonarc(ctx);
                    }

                    $("#date-container2").find(".convertedDateTime").text(data["data"]["convertedDateTime"]);
                    $bingtu.find(".sitian-text").text(data["data"]["si"]);
                    $bingtu.find(".keqi-text").text(data["data"]["ke"]);
                    $bingtu.find(".zhongyun-text").text(data["data"]["zhong"]);
                    $bingtu.find(".zhuqi-text").text(data["data"]["zhu"]);
                    $bingtu.find(".zaiquan-text").text(data["data"]["zai"]);
                    $bingtu.find(".sitian-num").text(data["data"]["siNum"]);
                    $bingtu.find(".keqi-num").text(data["data"]["keNum"]);
                    $bingtu.find(".zhongyun-num").text(data["data"]["zhongNum"]);
                    $bingtu.find(".zhuqi-num").text(data["data"]["zhuNum"]);
                    $bingtu.find(".zaiquan-num").text(data["data"]["zaiNum"]);

                    var canvas = document.getElementById('wylq-canvas2');
                    var ctx;
                    if (canvas) {
                        ctx = canvas.getContext('2d');
                        ctx.clearRect(0, 0, 400, 400);
                        paintArc(ctx, 80, 180, 35, 4);//木
                        paintArc(ctx, 200, 60, 35, 4);//火
                        paintArc(ctx, 320, 180, 35, 4);//金
                        paintArc(ctx, 200, 300, 35, 4);//水
                        paintArc(ctx, 200, 180, 35, 4);//土
                        paintLine(ctx, 200, 95, 200, 145);//上
                        paintLine(ctx, 200, 215, 200, 265);//下
                        paintLine(ctx, 115, 180, 165, 180);//左
                        paintLine(ctx, 235, 180, 285, 180);//右
                        paintWord2();
                        paintSonarc2(ctx);
                    }
                }
            }
        })
    }
</script>
</html>
