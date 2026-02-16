// singleton class / anonymous class

let sum=new class {
    constructor(a,b){
        this.x=a;
        this.y=b;
    }

    calculate(){
        document.writeln(`<h3> sum=${this.x + this.y}</h3>`)
    }
    }(10,20)

    sum.calculate()