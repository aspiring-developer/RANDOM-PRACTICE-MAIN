public class MyMainClass {

  public static void main(String[] args) {
    Person thePerson = new Person();
    thePerson.fName = "Mike";
    thePerson.lName = "Peter";
    thePerson.age = 42;

    System.out.println(
        "His Name is " + thePerson.fName + " " + thePerson.lName + " and he is "
            + thePerson.age + " years old.");
String message = thePerson.walk();
    System.out.println(message);
  }
}
