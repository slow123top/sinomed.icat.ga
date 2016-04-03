package wuyunliuqi;

/**
 * Created by Hu_2015 on 2016/4/1.
 */
public class hourToLunarhour {
    public static String toLunarhour(String hour) {
        String lunarhour = null;
        int intHour = Integer.parseInt(hour);
        String[] lunarHour = {"子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"};

        if (intHour < 1 || intHour >= 23) {
            lunarhour = lunarHour[0];
        } else if (intHour >= 1 && intHour < 3) {
            lunarhour = lunarHour[1];
        } else if (intHour >= 3 && intHour < 5) {
            lunarhour = lunarHour[2];
        } else if (intHour >= 5 && intHour < 7) {
            lunarhour = lunarHour[3];
        } else if (intHour >= 7 && intHour < 9) {
            lunarhour = lunarHour[4];
        } else if (intHour >= 9 && intHour < 11) {
            lunarhour = lunarHour[5];
        } else if (intHour >= 11 && intHour < 13) {
            lunarhour = lunarHour[6];
        } else if (intHour >= 13 && intHour < 15) {
            lunarhour = lunarHour[7];
        } else if (intHour >= 15 && intHour < 17) {
            lunarhour = lunarHour[8];
        } else if (intHour >= 17 && intHour < 19) {
            lunarhour = lunarHour[9];
        } else if (intHour >= 19 && intHour < 21) {
            lunarhour = lunarHour[10];
        } else {
            lunarhour = lunarHour[11];
        }
        return lunarhour;
    }

    public static String toGrehour(String hour) {

        String grehour = null;
        if (hour.equals("子")) {
            grehour = "23:00-1:00";
        } else if (hour.equals("丑")) {
            grehour = "1:00-3:00";
        } else if (hour.equals("寅")) {
            grehour = "3:00-5:00";
        } else if (hour.equals("卯")) {
            grehour = "5:00-7:00";
        } else if (hour.equals("辰")) {
            grehour = "7:00-9:00";
        } else if (hour.equals("巳")) {
            grehour = "9:00-11:00";
        } else if (hour.equals("午")) {
            grehour = "11:00-13:00";
        } else if (hour.equals("未")) {
            grehour = "13:00-15:00";
        } else if (hour.equals("申")) {
            grehour = "15:00-17:00";
        } else if (hour.equals("酉")) {
            grehour = "17:00-19:00";
        } else if (hour.equals("戌")) {
            grehour = "19:00-21；00";
        } else {
            grehour = "21:00-23:00";
        }
        return grehour;

    }
}
