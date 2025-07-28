class Person {
  private name: string;

  public constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }             
  protected show():Object{
    console.log("This is a person class");
    return "person class" 
   

  }
  
}

class test extends Person {
    public show(): int {

        console.log("This is a test class");
        return "hello veer"
    }
}

let test1: test = new test("veer");
test1.getName(); // "John"
console.log(test1.getName());
let result=test1.show() // "John"
//console.log(result); // "hello veer"
console.log(test1 instanceof test); // true