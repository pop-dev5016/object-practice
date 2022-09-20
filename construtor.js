function Aliens(name,dep,regN0,cgpa,placed){
    this.name=name;
    this.dep=dep;
    this.regno=regN0;
    this.cgpa=cgpa;
    this.placed=placed;
    this.work = function(){
        console.log("testing");
    }
   
}

let friends1 = new Aliens("prem","e&i",2012505017,9.9,"facebook");
let friends2 = new Aliens("pavitharan","e&i",2012505016,5.1,"unemployed");

friends2.cgpa = 10;
console.log(friends1);
console.log(friends2);
friends1.work();
console.log(friends1.cgpa);  
console.log(friends1.work());  



