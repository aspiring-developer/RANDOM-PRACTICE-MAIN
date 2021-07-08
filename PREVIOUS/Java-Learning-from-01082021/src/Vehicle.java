public class Vehicle {

  String name;
  int year;
  String model;

  public Vehicle(String name, int year, String model) {
    this.name = name;
    this.year = year;
    this.model = model;
  }

  public Vehicle(String name, int year) {
    this.name = name;
    this.year = year;
  }

  public static void main(String[] args) {
    Vehicle myVehicle = new Vehicle("Toyota", 1997, "Corolla");
    System.out.println(myVehicle.name + " " + myVehicle.year + " " + myVehicle.model);

    Vehicle myVehicle2 = new Vehicle("Honda", 2007);
    System.out.println(myVehicle2.name + " " + myVehicle2.year);
  }

}