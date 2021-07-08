package com.myPackage;

import java.awt.Point;

public class Main {

    public static void main(String[] args) {
//      byte x = 1;
//      x = 2;
//      byte y = x;
//      x = 3;
//        System.out.println(y);
        Point point1 = new Point(2, 4);
        Point point2 = point1;
        point1.x=3;
        System.out.println(point2);
    }
}
