public class MyMainClass {

  public static void main(String[] args) {
    Person him = new Person();
    him.fName = "Mike";
    him.lName = "Peter";
    him.age = 42;

    System.out.println(
        "His Name is " + him.fName + " " + him.lName + " and he is "
            + him.age + " years old.");
String message = him.walk();
    System.out.println(message);
  }
}
