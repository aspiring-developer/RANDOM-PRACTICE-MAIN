// REGULAR WORKING CODES
//public class Practice1 {
//int i = 12;
//int j = 24;
//
//public void result() {
//  int k = i + j;
//  System.out.println(k);
//}
//
//  public static void main(String[] args) {
//Practice1 p = new Practice1();
//    p.result();
//    System.out.println(p.i);
//    System.out.println(p.j);
//  }
//}

// TRYING THROUGH CONSTRUCTOR
public class Practice1 {
  int i = 12;
  int j = 24;

  public Practice1() {
    int k = i + j;
    System.out.println(k);
  }

  public static void main(String[] args) {
    Practice1 pObject = new Practice1();
    System.out.println(pObject.i);
    System.out.println(pObject.j);
  }
}