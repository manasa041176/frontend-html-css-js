//super keywords
/*
method overriding
*/

class Course{
    constructor(ti){
        this.title=ti;

    }
    getdata(){
        return`course is=${this.title}`
    }
}
class Person extends Course{
    constructor(na,title){
        super(title)
        this.name=na;
    }
    getdata(){
        document.writeln(`<h1> hi,${this.name} and ${super.getdata()}</h1>`)
    }
}

let u1=new Person("tom","reactjs")

u1.getdata()