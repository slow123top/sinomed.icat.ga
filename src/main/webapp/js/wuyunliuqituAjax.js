function paintArc(ctx, x, y, r, length) {
    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2, true)
    ctx.closePath();
    ctx.lineWidth = length;
    ctx.stroke();
}

function paintLine(ctx, srcx, srcy, destx, desty) {
    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.moveTo(srcx, srcy);
    ctx.lineTo(destx, desty);
    ctx.lineWidth = 3;
    ctx.stroke();
}

function paintWord() {
    //ctx.font = "18px Arial";
    var c = document.getElementById("wylq-canvas");
    var ctx = c.getContext("2d");
    var gradient = ctx.createLinearGradient(0, 0, c.width, 0);
    gradient.addColorStop("0.5", "blue");
// Fill with gradient
    ctx.fillStyle = gradient;
    ctx.font = "bold 20px Georgia";
    ctx.textAlign = "start";
    ctx.fillText("金", 335, 145);
    ctx.fillText("火", 140, 90);
    ctx.fillText("土", 225, 225);
    ctx.fillText("木", 50, 145);
    ctx.fillText("水", 145, 280);
    //ctx.fillText("命图",320,300);
    ctx.stroke();
}
function paintWord2() {
    //ctx.font = "18px Arial";
    var c = document.getElementById("wylq-canvas2");
    var ctx = c.getContext("2d");
    var gradient = ctx.createLinearGradient(0, 0, c.width, 0);
    gradient.addColorStop("0.5", "blue");
// Fill with gradient
    ctx.fillStyle = gradient;
    ctx.font = "bold 20px Georgia";
    ctx.textAlign = "start";
    ctx.fillText("金", 335, 145);
    ctx.fillText("火", 140, 90);
    ctx.fillText("土", 225, 225);
    ctx.fillText("木", 50, 145);
    ctx.fillText("水", 145, 280);
    //ctx.fillText("命图",320,300);
    ctx.stroke();
}
function sonArc(ctx, property, count) {
    var x, y;
    var r = [12, 8, 16, 4, 20];
    var len = [2, 2, 2, 2, 2];
    if (count != 0) {
        for (var i = 0; i < count; i++) {
            switch (property) {
                case 1:
                    x = 45 + r[i];
                    y = 180;
                    break;
                case 2:
                    x = 355 - r[i];
                    y = 180;
                    break;
                case 3:
                    x = 200;
                    y = 180;
                    break;
                case 4:
                    x = 200;
                    y = 25 + r[i];
                    break;
                case 5:
                    x = 200;
                    y = 335 - r[i];
                    break;
            }
            if (i > 2) {
                paintArc(ctx, x, y, r[i], len[i]);
            } else {
                paintArc(ctx, x, y, r[i], len[i]);
            }
        }
    }
}
function paintSonarc(ctx) {
    var jcount = 0;
    var mcount = 0;
    var scount = 0;
    var hcount = 0;
    var tcount = 0;
    var si = document.getElementById("sinum").innerText;
    var ke = document.getElementById("kenum").innerText;
    var zhong = document.getElementById("zhongnum").innerText;
    var zhu = document.getElementById("zhunum").innerText;
    var zai = document.getElementById("zainum").innerText;
    var s = new Array();
    s[0] = si;
    s[1] = ke;
    s[2] = zhong;
    s[3] = zhu;
    s[4] = zai;
    for (var i = 0; i < 5; i++) {
        if (s[i] == 28 || s[i] == "28▲" || s[i] == "28▼") {//金
            jcount++;
            switch (jcount) {
                case 1:
                    sonArc(ctx, 2, 1);
                    break;
                case 2:
                    sonArc(ctx, 2, 2);
                    break;
                case 3:
                    sonArc(ctx, 2, 3);
                    break;
                case 4:
                    sonArc(ctx, 2, 4);
                    break;
                case 5:
                    sonArc(ctx, 2, 5);
                    break;
            }
        } else if (s[i] == 410 || s[i] == "410▲" || s[i] == "410▼") {//木
            mcount++;
            switch (mcount) {
                case 1:
                    sonArc(ctx, 1, 1);
                    break;
                case 2:
                    sonArc(ctx, 1, 2);
                    break;
                case 3:
                    sonArc(ctx, 1, 3);
                    break;
                case 4:
                    sonArc(ctx, 1, 4);
                    break;
                case 5:
                    sonArc(ctx, 1, 5);
                    break;
            }
        } else if (s[i] == 39 || s[i] == "39▲" || s[i] == "39▼") {//水
            scount++;
            switch (scount) {
                case 1:
                    sonArc(ctx, 5, 1);
                    break;
                case 2:
                    sonArc(ctx, 5, 2);
                    break;
                case 3:
                    sonArc(ctx, 5, 3);
                    break;
                case 4:
                    sonArc(ctx, 5, 4);
                    break;
                case 5:
                    sonArc(ctx, 5, 5);
                    break;
            }
        } else if (s[i] == 115 || s[i] == 17 || s[i] == "115▲" || s[i] == "115▼" || s[i] == "17▲" || s[i] == "17▼") {//火
            hcount++;
            switch (hcount) {
                case 1:
                    sonArc(ctx, 4, 1);
                    break;
                case 2:
                    sonArc(ctx, 4, 2);
                    break;
                case 3:
                    sonArc(ctx, 4, 3);
                    break;
                case 4:
                    sonArc(ctx, 4, 4);
                    break;
                case 5:
                    sonArc(ctx, 4, 5);
                    break;
            }
        } else if (s[i] == 126 || s[i] == "126▲" || s[i] == "126▼") {//土
            tcount++;
            switch (tcount) {
                case 1:
                    sonArc(ctx, 3, 1);
                    break;
                case 2:
                    sonArc(ctx, 3, 2);
                    break;
                case 3:
                    sonArc(ctx, 3, 3);
                    break;
                case 4:
                    sonArc(ctx, 3, 4);
                    break;
                case 5:
                    sonArc(ctx, 3, 5);
                    break;
            }
        }
    }

}
function paintSonarc2(ctx) {
    var jcount = 0;
    var mcount = 0;
    var scount = 0;
    var hcount = 0;
    var tcount = 0;
    var si = document.getElementById("sinum2").innerText;
    var ke = document.getElementById("kenum2").innerText;
    var zhong = document.getElementById("zhongnum2").innerText;
    var zhu = document.getElementById("zhunum2").innerText;
    var zai = document.getElementById("zainum2").innerText;
    var s = new Array();
    s[0] = si;
    s[1] = ke;
    s[2] = zhong;
    s[3] = zhu;
    s[4] = zai;
    for (var i = 0; i < 5; i++) {
        if (s[i] == 28 || s[i] == "28▲" || s[i] == "28▼") {//金
            jcount++;
            switch (jcount) {
                case 1:
                    sonArc(ctx, 2, 1);
                    break;
                case 2:
                    sonArc(ctx, 2, 2);
                    break;
                case 3:
                    sonArc(ctx, 2, 3);
                    break;
                case 4:
                    sonArc(ctx, 2, 4);
                    break;
                case 5:
                    sonArc(ctx, 2, 5);
                    break;
            }
        } else if (s[i] == 410 || s[i] == "410▲" || s[i] == "410▼") {//木
            mcount++;
            switch (mcount) {
                case 1:
                    sonArc(ctx, 1, 1);
                    break;
                case 2:
                    sonArc(ctx, 1, 2);
                    break;
                case 3:
                    sonArc(ctx, 1, 3);
                    break;
                case 4:
                    sonArc(ctx, 1, 4);
                    break;
                case 5:
                    sonArc(ctx, 1, 5);
                    break;
            }
        } else if (s[i] == 39 || s[i] == "39▲" || s[i] == "39▼") {//水
            scount++;
            switch (scount) {
                case 1:
                    sonArc(ctx, 5, 1);
                    break;
                case 2:
                    sonArc(ctx, 5, 2);
                    break;
                case 3:
                    sonArc(ctx, 5, 3);
                    break;
                case 4:
                    sonArc(ctx, 5, 4);
                    break;
                case 5:
                    sonArc(ctx, 5, 5);
                    break;
            }
        } else if (s[i] == 115 || s[i] == 17 || s[i] == "115▲" || s[i] == "115▼" || s[i] == "17▲" || s[i] == "17▼") {//火
            hcount++;
            switch (hcount) {
                case 1:
                    sonArc(ctx, 4, 1);
                    break;
                case 2:
                    sonArc(ctx, 4, 2);
                    break;
                case 3:
                    sonArc(ctx, 4, 3);
                    break;
                case 4:
                    sonArc(ctx, 4, 4);
                    break;
                case 5:
                    sonArc(ctx, 4, 5);
                    break;
            }
        } else if (s[i] == 126 || s[i] == "126▲" || s[i] == "126▼") {//土
            tcount++;
            switch (tcount) {
                case 1:
                    sonArc(ctx, 3, 1);
                    break;
                case 2:
                    sonArc(ctx, 3, 2);
                    break;
                case 3:
                    sonArc(ctx, 3, 3);
                    break;
                case 4:
                    sonArc(ctx, 3, 4);
                    break;
                case 5:
                    sonArc(ctx, 3, 5);
                    break;
            }
        }
    }

}
/*
 公历函数返回某年某月的天数
 */
var getDaysOfYearMonth = function (year, month) {
    var isLeapYear = function (year) {
        return year % 400 == 0 || (year % 4 == 0 && year % 100 != 0);
    };
    var daysOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    daysOfMonth[1] = isLeapYear(year) ? 29 : 28;
    return daysOfMonth[month - 1];
};
/*
 公历函数  对下拉列表中的天数进行相应的改变，一共31天，该隐藏的就隐藏，该显示的就显示
 */
var updateDaySelect = function () {//

    var $year = $(".year");
    var $month = $(".month");
    var $day = $(".day");
    var y = $year.val();
    var m = $month.val();
    var d = $day.val();
    var days = getDaysOfYearMonth(y, m);
    if ($day.find("option:visible").length != days) {
        var $options = $day.find("option");
        $options.each(function () {
            var $option = $(this);
            if ($option.val() > days) {
                $option.hide();
            } else {
                $option.show();
            }
        });
        if (d > days) {
            $day.val(days);
        }
    }
};


/*
 进行阴历事件的选中，测试一下，当阴历被选中时，加上闰月并且隐藏31或者31和30天，并且加上子丑寅卯等时间
 */

var lunarInfo = [
    0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554, 0x056a0, 0x09ad0, 0x055d2,//1900
    0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255, 0x0b540, 0x0d6a0, 0x0ada2, 0x095b0, 0x14977,
    0x04970, 0x0a4b0, 0x0b4b5, 0x06a50, 0x06d40, 0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970,
    0x06566, 0x0d4a0, 0x0ea50, 0x06e95, 0x05ad0, 0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950,
    0x0d4a0, 0x1d8a6, 0x0b550, 0x056a0, 0x1a5b4, 0x025d0, 0x092d0, 0x0d2b2, 0x0a950, 0x0b557,
    0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a5d0, 0x14573, 0x052d0, 0x0a9a8, 0x0e950, 0x06aa0,
    0x0aea6, 0x0ab50, 0x04b60, 0x0aae4, 0x0a570, 0x05260, 0x0f263, 0x0d950, 0x05b57, 0x056a0,
    0x096d0, 0x04dd5, 0x04ad0, 0x0a4d0, 0x0d4d4, 0x0d250, 0x0d558, 0x0b540, 0x0b5a0, 0x195a6,
    0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a, 0x06a50, 0x06d40, 0x0af46, 0x0ab60, 0x09570,
    0x04af5, 0x04970, 0x064b0, 0x074a3, 0x0ea50, 0x06b58, 0x055c0, 0x0ab60, 0x096d5, 0x092e0,
    0x0c960, 0x0d954, 0x0d4a0, 0x0da50, 0x07552, 0x056a0, 0x0abb7, 0x025d0, 0x092d0, 0x0cab5,
    0x0a950, 0x0b4a0, 0x0baa4, 0x0ad50, 0x055d9, 0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930,
    0x07954, 0x06aa0, 0x0ad50, 0x05b52, 0x04b60, 0x0a6e6, 0x0a4e0, 0x0d260, 0x0ea65, 0x0d530,
    0x05aa0, 0x076a3, 0x096d0, 0x04bd7, 0x04ad0, 0x0a4d0, 0x1d0b6, 0x0d250, 0x0d520, 0x0dd45,
    0x0b5a0, 0x056d0, 0x055b2, 0x049b0, 0x0a577, 0x0a4b0, 0x0aa50, 0x1b255, 0x06d20, 0x0ada0
];
//求出农历y年总天数
function yearDays(y) {
    var i, sum = 348;
    for (i = 0x8000; i > 0x8; i >>= 1) {
        if ((lunarInfo[y - 1900] & i) != 0)
            sum += 1;
    }
    return (sum + leapDays(y));
}
//    ====== 传回农历 y年闰月的天数
function leapDays(y) {
    if (leapMonth(y) != 0) {
        if ((lunarInfo[y - 1900] & 0x10000) != 0)
            return 30;
        else
            return 29;
    } else
        return 0;
}
//    传回农历 y年闰哪个月 1-12 , 没闰传回 0
function leapMonth(y) {
    return parseInt((lunarInfo[y - 1900] & 0xf), 16);
}

//====== 传回农历 y年m月的总天数
function monthDays(y, m) {
    if ((lunarInfo[y - 1900] & (0x10000 >> m)) == 0)
        return 29;
    else
        return 30;
}


//用于隐藏31或者31和30天
var Rlmonthdays = function () {
    var year = $(".year");
    var month = $(".month");
    var day = $(".day");
    var y = year.val();
    var m = month.val();
    var d = day.val();
    var eachmonthdays = monthDays(y, m);
    //var days = getDaysOfYearMonth(y, m);
    if (day.find("option:visible").length != eachmonthdays) {
        var $options = day.find("option");
        $options.each(function () {
            var $option = $(this);
            if ($option.val() > eachmonthdays) {
                $option.hide();
            } else {
                $option.show();
            }
        });
        if (d > eachmonthdays) {
            day.val(eachmonthdays);
        }
    }
}
/*
 用于改变小时，加上闰月的
 */

/*
 农历年份
 */
var tiangan = new Array();
tiangan[0] = "甲";
tiangan[1] = "乙";
tiangan[2] = "丙";
tiangan[3] = "丁";
tiangan[4] = "戊";
tiangan[5] = "己";
tiangan[6] = "庚";
tiangan[7] = "辛";
tiangan[8] = "壬";
tiangan[9] = "癸";
var dizhi = new Array();
dizhi[0] = "子";
dizhi[1] = "丑";
dizhi[2] = "寅";
dizhi[3] = "卯";
dizhi[4] = "辰";
dizhi[5] = "巳";
dizhi[6] = "午";
dizhi[7] = "未";
dizhi[8] = "申";
dizhi[9] = "酉";
dizhi[10] = "戌";
dizhi[11] = "亥";
var addlunaryear = function () {
    var i = 1900, j = 6, k = 0;
    for (i, j, k; i <= 2100; i++, j++, k++) {
        j = j % 10;
        k = k % 12;
        $("#lunaryear").append("<option value='" + i + "'>" + tiangan[j] + "" + dizhi[k] + "(" + i + ")</option>");
    }
}
/*
 农历月份
 */
var lunarmonth = new Array();
lunarmonth[0] = "正月";
lunarmonth[1] = "二月";
lunarmonth[2] = "三月";
lunarmonth[3] = "四月";
lunarmonth[4] = "五月";
lunarmonth[5] = "六月";
lunarmonth[6] = "七月";
lunarmonth[7] = "八月";
lunarmonth[8] = "九月";
lunarmonth[9] = "十月";
lunarmonth[10] = "冬月";
lunarmonth[11] = "腊月";
/*
 农历日期
 */
var lunarday = new Array();
lunarday[0] = "初一";
lunarday[1] = "初二";
lunarday[2] = "初三";
lunarday[3] = "初四";
lunarday[4] = "初五";
lunarday[5] = "初六";
lunarday[6] = "初七";
lunarday[7] = "初八";
lunarday[8] = "初九";
lunarday[9] = "初十";
lunarday[10] = "十一";
lunarday[11] = "十二";
lunarday[12] = "十三";
lunarday[13] = "十四";
lunarday[14] = "十五";
lunarday[15] = "十六";
lunarday[16] = "十七";
lunarday[17] = "十八";
lunarday[18] = "十九";
lunarday[19] = "廿";
lunarday[20] = "廿一";
lunarday[21] = "廿二";
lunarday[22] = "廿三";
lunarday[23] = "廿四";
lunarday[24] = "廿五";
lunarday[25] = "廿六";
lunarday[26] = "廿七";
lunarday[27] = "廿八";
lunarday[28] = "廿九";
lunarday[29] = "卅";
/*
 农历时辰
 */
var yl = new Array();
yl[0] = "子时";
yl[1] = "丑时";
yl[2] = "寅时";
yl[3] = "卯时";
yl[4] = "辰时";
yl[5] = "巳时";
yl[6] = "午时";
yl[7] = "未时";
yl[8] = "申时";
yl[9] = "酉时";
yl[10] = "戌时";
yl[11] = "亥时";
var addlunarmonth = function () {
    var i = 0;
    for (i; i < 12; i++) {
        j = j % 12;
        $("#year").append("<option value='" + i + "'>" + tiangan[j] + "" + dizhi[k] + "(" + i + ")</option>");
    }
}
var addlunarday = function () {
    var i = 0;
    for (i; i < 12; i++) {
        j = j % 12;
        $("#year").append("<option value='" + i + "'>" + tiangan[j] + "" + dizhi[k] + "(" + i + ")</option>");
    }
}
var addlunardate = function () {
var lunardatediv = $("<div id='lun-date'></div>");
    $("#lun-date").append("<select id='lunaryear'></select>");
    addlunaryear();
    lunardatediv.appendto('form');
}
/*
 测试程序
 */

/*
 js执行函数
 */

$(function () {
    /*
     验证码
     */
    $(".captcha-img").on("click", function () {
        $(this).attr("src", "/captcha?" + Math.random());
    });
    /*
     登录
     */
    $("#login-btn").on("click", function () {
        var username = $("#login-username").val();
        var password = $("#login-password").val();
        var captcha = $("#login-captcha").val();
        $.ajax({
            url: "/login",
            data: {username: username, password: password, captcha: captcha},
            success: function (data) {
                if (data["status"] == "SUCCESS") {
                    location.href = data["data"]["jumpUrl"];
                } else {
                    $("#login-error-messaage").text(data["message"]);
                }
            }
        });
        return false;
    });
    /*
     注册
     */
    $("#register-btn").on("click", function () {
        var username = $("#register-username").val();
        var password = $("#register-password").val();
        var displayName = $("#register-displayName").val();
        var captcha = $("#register-captcha").val();
        $.ajax({
            url: "/register",
            data: {username: username, displayName: displayName, password: password, captcha: captcha},
            success: function (data) {
                $("#register-error-messaage").text(data["message"]);
            }
        });
        return false;
    });
    /*
     命图搜索按钮触发函数
     */
    $("#query-mtbtn").on("click", function () {
        var $this = $(this);
        var apiUrl = "/api/wuyunliuqitu";
        var $form = $this.parents("form");

        var calendarType = $form.children(".calendar-type").val();
        var year = $form.children(".year").val();
        var month = $form.children(".month").val();
        var day = $form.children(".day").val();
        var hour = $form.children(".hour").val();
        var minute = $form.children(".minute").val();


        $.ajax({
            url: apiUrl,
            type: "POST",
            data: {
                "calendarType": calendarType,
                "year": year,
                "month": month,
                "day": day,
                "hour": hour,
                "minute": minute,
            },
            success: function (data) {
                if (data["status"] != "ERROR") {
                    var $mingtu = $("#mingtu");
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

                } else {
                    alert(data["message"]);
                }
            }
        });
        return false;
    });

    /*
     病图按钮函数触发
     */
    $("#query-btbtn").on("click", function () {
        var $this = $(this);
        var apiUrl = "/api/wuyunliuqitu";
        var $form = $this.parents("form");

        var calendarType = $form.children(".calendar-type").val();
        var year = $form.children(".year").val();
        var month = $form.children(".month").val();
        var day = $form.children(".day").val();
        var hour = $form.children(".hour").val();
        var minute = $form.children(".minute").val();
        $.ajax({
            url: apiUrl,
            type: "POST",
            data: {
                "calendarType": calendarType,
                "year": year,
                "month": month,
                "day": day,
                "minute": minute,
                "hour": hour

            },
            success: function (data) {
                if (data["status"] != "ERROR") {
                    var $bingtu = $("#bingtu");
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

                } else {
                    alert(data["message"]);
                }
            }
        });
        return false;
    });
    /*
     选择不同的历法  出现不同的年月日时
     */
    $("#calendar-type").change(function () {
        var calendartype = $("#calendar-type").val();
        var year = $("#year");
        var month = $("#month");
        var day = $("#day");
        var hour = $("#hour");
        var minute = $("#minute");
        if (calendartype == "阴历") {
            var $options = hour.find("option");
            $options.each(function () {
                var $option = $(this);
                $option.hide();
            });
            /*
             更换农历年
             */
            for (var i = 0; i < yl.length; i++) {
                hour.append("<option value=\"\">" + yl[i] + "</option>");
            }
            /*
             更换农历月份
             */
            //
            addlunardate();
            $("#year").on("change", Rlmonthdays);
            $("#month").on("change", Rlmonthdays);
        } else {
            var $options = hour.find("option");
            $options.each(function () {
                var $option = $(this);
                $option.show();
            });
            for (var i = 0; i < yl.length; i++) {
                if (hour.find("option:visible") == yl[i]) {
                    var $options = hour.find("option");
                    $options.each(function () {
                        var $option = $(this);
                        $option.hide();
                    });
                }

            }
            $("#year").on("change", updateDaySelect);
            $("#month").on("change", updateDaySelect);
//hour.val(${h});
        }
    })
    ;
    $("#calendar-type2").change(function () {
        var calendartype = $("#calendar-type2").val();
        var hour = $("#b-hour");
        var minute = $("#b-minute");
        if (calendartype == "阴历") {
            $("#gre-date").hide();
            //$("#date-container").css('display','none');
            var $options = hour.find("option");
            $options.each(function () {
                var $option = $(this);
                $option.hide();
            });
            //for (var i = 0; i < yl.length; i++) {
            //    hour.append("<option>庚子(1900)</option><option>辛丑(1901)</option><option>壬寅(1902)</option><option>癸卯(1903)</option><option>甲辰(1904)</option><option>乙巳(1905)</option><option>丙午(1906)</option><option>丁未(1907)</option><option>戊申(1908)</option><option>己酉(1909)</option><option>庚戌(1910)</option><option>辛亥(1911)</option><option>壬子(1912)</option><option>癸丑(1913)</option><option>甲寅(1914)</option><option>乙卯(1915)</option><option>丙辰(1916)</option><option>丁巳(1917)</option><option>戊午(1918)</option><option>己未(1919)</option><option>庚申(1920)</option><option>辛酉(1921)</option><option>壬戌(1922)</option><option>癸亥(1923)</option><option>甲子(1924)</option><option>乙丑(1925)</option><option>丙寅(1926)</option><option>丁卯(1927)</option><option>戊辰(1928)</option><option>己巳(1929)</option><option>庚午(1930)</option><option>辛未(1931)</option><option>壬申(1932)</option><option>癸酉(1933)</option><option>甲戌(1934)</option><option>乙亥(1935)</option><option>丙子(1936)</option><option>丁丑(1937)</option><option>戊寅(1938)</option><option>己卯(1939)</option><option>庚辰(1940)</option><option>辛巳(1941)</option><option>壬午(1942)</option><option>癸未(1943)</option><option>甲申(1944)</option><option>乙酉(1945)</option><option>丙戌(1946)</option><option>丁亥(1947)</option><option>戊子(1948)</option><option>己丑(1949)</option><option>庚寅(1950)</option><option>辛卯(1951)</option><option>壬辰(1952)</option><option>癸巳(1953)</option><option>甲午(1954)</option><option>乙未(1955)</option><option>丙申(1956)</option><option>丁酉(1957)</option><option>戊戌(1958)</option><option>己亥(1959)</option><option>庚子(1960)</option><option>辛丑(1961)</option><option>壬寅(1962)</option><option>癸卯(1963)</option><option>甲辰(1964)</option><option>乙巳(1965)</option><option>丙午(1966)</option><option>丁未(1967)</option><option>戊申(1968)</option><option>己酉(1969)</option><option>庚戌(1970)</option><option>辛亥(1971)</option><option>壬子(1972)</option><option>癸丑(1973)</option><option>甲寅(1974)</option><option>乙卯(1975)</option><option>丙辰(1976)</option><option>丁巳(1977)</option><option>戊午(1978)</option><option>己未(1979)</option><option>庚申(1980)</option><option>辛酉(1981)</option><option>壬戌(1982)</option><option>癸亥(1983)</option><option>甲子(1984)</option><option>乙丑(1985)</option><option>丙寅(1986)</option><option>丁卯(1987)</option><option>戊辰(1988)</option><option>己巳(1989)</option><option>庚午(1990)</option><option>辛未(1991)</option><option>壬申(1992)</option><option>癸酉(1993)</option><option>甲戌(1994)</option><option>乙亥(1995)</option><option>丙子(1996)</option><option>丁丑(1997)</option><option>戊寅(1998)</option><option>己卯(1999)</option><option>庚辰(2000)</option><option>辛巳(2001)</option><option>壬午(2002)</option><option>癸未(2003)</option><option>甲申(2004)</option><option>乙酉(2005)</option><option>丙戌(2006)</option><option>丁亥(2007)</option><option>戊子(2008)</option><option>己丑(2009)</option><option>庚寅(2010)</option><option>辛卯(2011)</option><option>壬辰(2012)</option><option>癸巳(2013)</option><option>甲午(2014)</option><option>乙未(2015)</option><option>丙申(2016)</option><option>丁酉(2017)</option><option>戊戌(2018)</option><option>己亥(2019)</option><option>庚子(2020)</option><option>辛丑(2021)</option><option>壬寅(2022)</option><option>癸卯(2023)</option><option>甲辰(2024)</option><option>乙巳(2025)</option><option>丙午(2026)</option><option>丁未(2027)</option><option>戊申(2028)</option><option>己酉(2029)</option><option>庚戌(2030)</option><option>辛亥(2031)</option><option>壬子(2032)</option><option>癸丑(2033)</option><option>甲寅(2034)</option><option>乙卯(2035)</option><option>丙辰(2036)</option><option>丁巳(2037)</option><option>戊午(2038)</option><option>己未(2039)</option><option>庚申(2040)</option><option>辛酉(2041)</option><option>壬戌(2042)</option><option>癸亥(2043)</option><option>甲子(2044)</option><option>乙丑(2045)</option><option>丙寅(2046)</option><option>丁卯(2047)</option><option>戊辰(2048)</option><option>己巳(2049)</option><option>庚午(2050)</option><option>辛未(2051)</option><option>壬申(2052)</option><option>癸酉(2053)</option><option>甲戌(2054)</option><option>乙亥(2055)</option><option>丙子(2056)</option><option>丁丑(2057)</option><option>戊寅(2058)</option><option>己卯(2059)</option><option>庚辰(2060)</option><option>辛巳(2061)</option><option>壬午(2062)</option><option>癸未(2063)</option><option>甲申(2064)</option><option>乙酉(2065)</option><option>丙戌(2066)</option><option>丁亥(2067)</option><option>戊子(2068)</option><option>己丑(2069)</option><option>庚寅(2070)</option><option>辛卯(2071)</option><option>壬辰(2072)</option><option>癸巳(2073)</option><option>甲午(2074)</option><option>乙未(2075)</option><option>丙申(2076)</option><option>丁酉(2077)</option><option>戊戌(2078)</option><option>己亥(2079)</option><option>庚子(2080)</option><option>辛丑(2081)</option><option>壬寅(2082)</option><option>癸卯(2083)</option><option>甲辰(2084)</option><option>乙巳(2085)</option><option>丙午(2086)</option><option>丁未(2087)</option><option>戊申(2088)</option><option>己酉(2089)</option><option>庚戌(2090)</option><option>辛亥(2091)</option><option>壬子(2092)</option><option>癸丑(2093)</option><option>甲寅(2094)</option><option>乙卯(2095)</option><option>丙辰(2096)</option><option>丁巳(2097)</option><option>戊午(2098)</option><option>己未(2099)</option><option>庚申(2100)</option>");
            //}

            $("#b-year").on("change", Rlmonthdays);
            $("#b-month").on("change", Rlmonthdays);
        } else {
            $("#date-container2").hide();
            var $options = hour.find("option");
            $options.each(function () {
                var $option = $(this);
                $option.show();
            });
            $("#hour option[index='0']").remove();
            $("#b-year").on("change", updateDaySelect);
            $("#b-month").on("change", updateDaySelect);
        }
    });
});
