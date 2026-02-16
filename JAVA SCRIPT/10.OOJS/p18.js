//class inheritance

class Course{
    constructor(){
      this.title="react";
      this.duration=2;
    }
    getCourseInfo(){
        document.writeln(`<h1> course title${this.title}and duration is${this.duration}months.</h1>`)
    }
}

//base class
class Person extends Course{
    constructor(){
        super()
        this.name="John"
    }
    getPerson(){
        document.writeln(`<h1> user name${this.name}</h1>`)
    }

}

//intance
let p1=new Person()

p1.getPerson()
p1.getCourseInfo()