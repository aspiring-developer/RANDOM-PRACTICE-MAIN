public class Practice1 {
int i = 12;
int j = 24;

public void result() {
  int k = i + j;
  //return k;
  System.out.println(k);
}

  public static void main(String[] args) {
Practice1 p = new Practice1();
    p.result();
    System.out.println(p.i);
    System.out.println(p.j);
  }
}