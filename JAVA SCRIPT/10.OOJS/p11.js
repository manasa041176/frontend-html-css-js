//parameter contructor

function Product(a,b){
    this.x=a;
    this.y=b;
    this.calc=function(){
     document.writeln(`<h3> product=${this.x*this.y}</h3>`);
    }
}
let p1=new Product(10,5);
p1.calc()

let p2=new Product(25,5);
p2.calc()

