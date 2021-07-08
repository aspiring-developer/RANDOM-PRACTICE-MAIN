import java.util.Arrays;

public class Anagram {

  public static boolean isAnagram(String str1, String str2){
    if(str1.length() != str2.length()){
      return false;
    }

    int[] strArray1 = new int[str1.length()];
    int[] strArray2 = new int[str2.length()];


    for (int i = 0; i < str1.length(); i++) {
      strArray1[i] = str1.charAt(i);
      strArray2[i] = str2.charAt(i);
    }

    printArr(strArray1);
    printArr(strArray2);

    Arrays.sort(strArray1);
    Arrays.sort(strArray2);

    printArr(strArray1);
    printArr(strArray2);



    for (int i = 0; i < strArray1.length; i++) {
      if (strArray1[i] != strArray2[i]) {
        return false;
      }
    }

    return true;
  }


  public static void main(String[] args) {

    String s1 = "eye";
    String s2 = "eeye";

    System.out.println(isAnagram(s1, s2));
  }

  public static void printArr(int[] arr){

    for (int i = 0; i < arr.length; i++) {
      System.out.print(arr[i]+" ");
    }
    System.out.println();
  }

}
