//static methods
//1.can defined by adding atatic keyword before methods name
//2. can be called only using classname

class Course{
    constructor(ti,du,ty){
        this.title=ti;
        this.duration=du;
        this.type=ty;
    }
    getCourseInfo(){
        document.writeln(`<h3>title=${this.title},duration=${this.duration}months and type=${this.type}</h3>`)
    }
    static getCourseTitle(){
        document.writeln(`<h3> course title${this.title}</h3>`)
    }
}

let x= new Course("ReactJS",1.5,"offline")

x.getCourseInfo();
Course.getCourseTitle();