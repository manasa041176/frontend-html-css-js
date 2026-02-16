//prototype keyword

//used to add properties to this constructor from outside

function User(){

}

//constructor.prototype.property=value;
User.prototype.name="John";
User.prototype.email="John@email.com";
User.prototype.age=22;
User.prototype.display=function(){
    document.writeln(`<h3>name is ${this.name}<, age is ${this.age} yers, and email is =${this.email}/h3>`);
}

let x=new User()

x.display()