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
    var c=document.getElementById("wylq-canvas");
    var ctx=c.getContext("2d");
    var gradient=ctx.createLinearGradient(0,0,c.width,0);
    gradient.addColorStop("0.5","blue");
// Fill with gradient
    ctx.fillStyle=gradient;
    ctx.font = "bold 20px Georgia";
    ctx.textAlign = "start";
    ctx.fillText("金", 330, 240);
    ctx.fillText("火", 140, 90);
    ctx.fillText("土", 230, 230);
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
$(function () {
    $(".captcha-img").on("click", function () {
        $(this).attr("src", "/captcha?" + Math.random());
    });

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

    var getDaysOfYearMonth = function (year, month) {//返回某年某月的天数
        var isLeapYear = function (year) {
            return year % 400 == 0 || (year % 4 == 0 && year % 100 != 0);
        };
        var daysOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        daysOfMonth[1] = isLeapYear(year) ? 29 : 28;
        return daysOfMonth[month - 1];
    };

    var updateDaySelect = function () {//

        var $year = $("#year");
        var $month = $("#month");
        var $day = $("#day");
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
    $("#year").on("change",updateDaySelect);
    $("#month").on("change",updateDaySelect);
    var canvas = document.getElementById('wylq-canvas');
    var ctx;
    if (canvas) {
        ctx = canvas.getContext('2d');
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


});
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
$(function(){
    var canvas2 = document.getElementById('wylq-canvas2');
    var ctx;
    if (canvas2) {
        ctx = canvas2.getContext('2d');
        paintArc(ctx, 80, 180,35, 4);//木
        paintArc(ctx, 200, 60, 35, 4);//火
        paintArc(ctx, 320, 180, 35, 4);//金
        paintArc(ctx, 200, 300, 35, 4);//水
        paintArc(ctx, 200, 180, 35, 4);//土
        paintLine(ctx, 200, 95, 200, 145);//上
        paintLine(ctx, 200, 215, 200, 265);//下
        paintLine(ctx, 115, 180, 165, 180);//左
        paintLine(ctx, 235, 180, 285, 180);//右
        paintWord2();
        paintSonarc(ctx);
    }
    })
function paintWord2() {
    //ctx.font = "18px Arial";
    var c=document.getElementById("wylq-canvas2");
    var ctx=c.getContext("2d");
    var gradient=ctx.createLinearGradient(0,0,c.width,0);
    gradient.addColorStop("0.5","blue");
// Fill with gradient
    ctx.fillStyle=gradient;
    ctx.font = "bold 20px Georgia";
    ctx.textAlign = "start";
    ctx.fillText("金", 330, 240);
    ctx.fillText("火", 140, 90);
    ctx.fillText("土", 230, 230);
    ctx.fillText("木", 50, 145);
    ctx.fillText("水", 145, 280);
    //ctx.fillText("命图",320,300);
    ctx.stroke();
}