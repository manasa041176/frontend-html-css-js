// class expression

/*
class Name{
constructor(params){
this.key = value; property
}

mathod(param){
}
}
*/

let User=class{
    constructor(na,em){
        this.name=na;
        this.email=em;
    }
    getUserInfo(){
        document.writeln(`<h3>name is ${this.emailname}and email is ${this.email}
            </h3>`)
    }
}

let u1=new User("tom", "tom@gmail.com")
u1.getUserInfo()