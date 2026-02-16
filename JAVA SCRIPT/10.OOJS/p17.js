//inheritance

class SuperClass{
    constructor(a,b){
        this.name=a;
        this.email=b;
    }
    getUserInfo(){
        document.writeln(`<h3>name is ${this.name}and email=${this.email}</h3>`)
    }
}

class BaseClass extends SuperClass{
    constructor(a,b,c){
        super(a,b)
        this.age=c;
    }
}

let x = new BaseClass("raju","raju@gmail.com",26)
x.getUserInfo();

document.writeln(`<h3>age is ${x.age} years</h3>`)