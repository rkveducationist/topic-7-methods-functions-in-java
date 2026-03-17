const questions = [

/* =========================
MCQ QUESTIONS
========================= */

{
type:"mcq",
question:"What is a method in Java?",
options:[
"A block of code that performs a task",
"A variable",
"A loop",
"A class"
],
answer:"A block of code that performs a task",
hint:"Reusable code"
},

{
type:"mcq",
question:"Which keyword is used to define a method?",
options:["datatype","method","function","define"],
answer:"datatype",
hint:"Example: int add()"
},

{
type:"mcq",
question:"What is the return type of a method that returns nothing?",
options:["void","int","null","none"],
answer:"void",
hint:"No return value"
},

{
type:"mcq",
question:"Which keyword is used to return a value?",
options:["return","break","continue","exit"],
answer:"return",
hint:"Ends method execution"
},

{
type:"mcq",
question:"What are parameters?",
options:[
"Variables in method definition",
"Values passed to method",
"Return values",
"Loops"
],
answer:"Variables in method definition",
hint:"Inside method declaration"
},

{
type:"mcq",
question:"What are arguments?",
options:[
"Values passed to method",
"Variables",
"Return values",
"Loops"
],
answer:"Values passed to method",
hint:"Used during method call"
},

{
type:"mcq",
question:"Can a method return multiple values?",
options:["No","Yes","Sometimes","Depends"],
answer:"No",
hint:"One return value"
},

{
type:"mcq",
question:"Which method is called automatically in Java program?",
options:["main","start","run","init"],
answer:"main",
hint:"Entry point"
},

{
type:"mcq",
question:"Which access modifier is commonly used with methods?",
options:["public","private","protected","all"],
answer:"public",
hint:"Main method uses it"
},

{
type:"mcq",
question:"What is method overloading?",
options:[
"Same method name with different parameters",
"Different methods",
"Multiple classes",
"Loops"
],
answer:"Same method name with different parameters",
hint:"Compile-time polymorphism"
},

/* =========================
CODING QUESTIONS
========================= */

{
type:"code",
question:"Write a method that prints Hello World",

required:["void","system.out.println"],

hint:"void method",

solution:`class Demo {
  static void printMessage(){
    System.out.println("Hello World");
  }

  public static void main(String[] args){
    printMessage();
  }
}`
},

{
type:"code",
question:"Write a method that adds two numbers and prints result",

required:["int","+","system.out.println"],

hint:"Use parameters",

solution:`class Add {
  static void add(int a, int b){
    int sum = a + b;
    System.out.println(sum);
  }

  public static void main(String[] args){
    add(5, 3);
  }
}`
},

{
type:"code",
question:"Write a method that returns square of a number",

required:["return","*","int"],

hint:"return n*n",

solution:`class Square {
  static int square(int n){
    return n * n;
  }

  public static void main(String[] args){
    int result = square(4);
    System.out.println(result);
  }
}`
},

{
type:"code",
question:"Write a method to check even or odd",

required:["if","%","system.out.println"],

hint:"Use num % 2",

solution:`class EvenOdd {
  static void check(int num){
    if(num % 2 == 0){
      System.out.println("Even");
    } else {
      System.out.println("Odd");
    }
  }

  public static void main(String[] args){
    check(10);
  }
}`
},

{
type:"code",
question:"Write a method that returns maximum of two numbers",

required:["if","return","int"],

hint:"Compare a and b",

solution:`class Max {
  static int max(int a, int b){
    if(a > b){
      return a;
    } else {
      return b;
    }
  }

  public static void main(String[] args){
    System.out.println(max(5, 8));
  }
}`
},

{
type:"code",
question:"Write a method to print numbers from 1 to 5",

required:["for","system.out.println"],

hint:"Loop inside method",

solution:`class PrintNumbers {
  static void print(){
    for(int i = 1; i <= 5; i++){
      System.out.println(i);
    }
  }

  public static void main(String[] args){
    print();
  }
}`
},

{
type:"code",
question:"Write a program to demonstrate method overloading",

required:["int","double","return"],

hint:"Same method name",

solution:`class Overload {
  static int add(int a, int b){
    return a + b;
  }

  static double add(double a, double b){
    return a + b;
  }

  public static void main(String[] args){
    System.out.println(add(2,3));
    System.out.println(add(2.5,3.5));
  }
}`
}

]