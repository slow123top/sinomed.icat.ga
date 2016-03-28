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

function paintWord(ctx) {
    ctx.font = "18px Arial";
    ctx.textAlign = "start";
    ctx.fillText("金", 375, 270);
    ctx.fillText("火", 175, 115);
    ctx.fillText("土", 245, 245);
    ctx.fillText("木", 50, 145);
    ctx.fillText("水", 175, 285);
    ctx.stroke();
}

function sonArc(ctx, property, count) {
    var x, y;
    var r = [18, 12, 24, 6, 30];
    var len = [2.5, 2, 2.5, 1, 2.5];
    if (count != 0) {
        for (var i = 0; i < count; i++) {
            switch (property) {
                case 1:
                    x = 5 + r[i];
                    y = 200;
                    break;
                case 2:
                    x = 395 - r[i];
                    y = 200;
                    break;
                case 3:
                    x = 200;
                    y = 200;
                    break;
                case 4:
                    x = 200;
                    y = 5 + r[i];
                    break;
                case 5:
                    x = 200;
                    y = 395 - r[i];
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

    var getDaysOfYearMonth = function (year, month) {
        var isLeapYear = function (year) {
            return year % 400 == 0 || (year % 4 == 0 && year % 100 != 0);
        };
        var daysOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        daysOfMonth[1] = isLeapYear(year) ? 29 : 28;
        return daysOfMonth[month - 1];

    };

    var updateDaySelect = function () {
        var $year = $("#year");
        var $month = $("#month");
        var $day = $("#day");
        var y = $year.val();
        var m = $month.val();
        var d = $day.val();

        var days = getDaysOfYearMonth(y, m);
        if ($day.find("option:visible") != days) {
            var $options = $day.find("option");
            $options.each(function () {
                var $option = $(this);
                if ($option.val() > days) {
                    $option.hide();
                } else {
                    $option.show();
                }
            });
            if(d > days){
                $day.val(days);
            }
        }

    };

    $("#year").on("change", updateDaySelect);
    $("#month").on("change", updateDaySelect);

    var canvas = document.getElementById('wylq-canvas');
    var ctx;
    if (canvas) {
        ctx = canvas.getContext('2d');
        paintArc(ctx, 50, 200, 45, 4);
        paintArc(ctx, 200, 50, 45, 4);
        paintArc(ctx, 350, 200, 45, 4);
        paintArc(ctx, 200, 350, 45, 4);
        paintArc(ctx, 200, 200, 45, 4);
        paintLine(ctx, 200, 97, 200, 152);
        paintLine(ctx, 200, 247, 200, 302);
        paintLine(ctx, 97, 200, 152, 200);
        paintLine(ctx, 247, 200, 302, 200);
        paintWord(ctx);
        paintSonarc(ctx);
    }


});
