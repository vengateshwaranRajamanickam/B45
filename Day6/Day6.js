/*
//`use strict`;
console.log(2=='2');
function fun(){
    //this.arr=arr;
    console.log(this);
}

fun();

//class for person totalmark
class person{
    constructor (name,rollnumber,maths,physics,chemistry){
this.name=name;
this.rollnumber=rollnumber;
this.maths=maths;
this.physics=physics;
this.chemistry=chemistry;

}   
    totalmarks()
    {
        let total=this.maths+this.physics+this.chemistry;
        return`Total mark scored by ${this.name} - roll number ${this.rollnumber} is ${total}`;
    }  
}
let student1=new person("revi",15,67,87,89);
let student2=new person("mickel",25,89,45,90,);
let student3=new person("arun",30,36,89,66);
let student4=new person("raja",14,45,56,78);
let student5=new person("mani",05,77,88,99);

console.log(student1.totalmarks());
console.log(student2.totalmarks());
console.log(student3.totalmarks());
console.log(student4.totalmarks());
console.log(student5.totalmarks());
//child class
class rank extends person{
    constructor(name,rollnumber,maths,physics,chemistry,rank){
    super(name,rollnumber,maths,physics,chemistry);
    this.rank=rank;
    }
}
rank.prototype.award="school first";

//class for uber fare
class uber{
    constructor(name,email,mobile,otp,uberpoint,tripid){
this.name=name;
this.email=email;
this.mobile=mobile;
this.otp=otp;
this.uberpoint=uberpoint;
this.tripid=tripid;

}   
    startjourney()
    {
        console.log(`Hi ${this.name}`);
        console.log(this.otp);
        let n =prompt("enter ride otp");
        return (this.otp==n) ? `wish you a happy and safe journey : uberpoint ${this.uberpoint}`:`wrong otp`;
    }  
    Totalfair(){
        let kms=5;
        let price;
        if(kms>0 && kms<=100)
        price = kms*2;
        else if (kms>=101 && kms<500)
        price= kms*5;
        return `Price for tripid ${this.rideid} is ${price} Anytime Anywhere Always Uber`;
    }
}
let ubercustomer1=new uber("revi","revi@a,in",01234567,1234,50,2);
//console.log(ubercustomer1.startjourney());
//console.log(ubercustomer1.endjourney());
console.log(ubercustomer1.Totalfair()); 
*/

//class for movie of PG value
class movie{
    constructor(title,studio,rating){
this.title=title;
this.studio=studio;
this.rating=rating;
    }
    PGonly(){
        if(this.rating==="PG")
        return this.title;
    }
    instant(){
        let inst =new Object();
        inst.title=prompt("enter movie name");
        inst.studio=prompt("enter production house name");
        inst.rating=prompt("enter rating");
        return inst
    }

    
}
let Movie1= new movie("robo","sun picture","PG 13");
let Movie2= new movie("2.0","lyca","PG");
let Movie3= new movie("love today","ags","PG 18");
let Movie4=new Object();
Movie4= new movie("","","");
let findPGmovie=[];
findPGmovie[1]=Movie1.PGonly();
findPGmovie[2]=Movie2.PGonly();
findPGmovie[3]=Movie3.PGonly();
findPGmovie[4]=Movie4.PGonly();
console.log(findPGmovie);
//console.log(Movie4.instant());


/*
//prototype to class for add variable and function
class uberdemo{
    constructor(name){
    this.name=name;
    }    
}
let customer3=new uberdemo("li");
uberdemo.prototype.sex="m";                 //adding value in object class
uberdemo.prototype.age=function(){          //adding function to the object class
    let date= new Date;
    return date.getFullYear() -this.birth;
}
customer3.birth=1993;
console.log(customer3.sex);
console.log(customer3.age());

//prototype for asyn function
Array.prototype.firstElement=function (){
    return this[0];
}
let test1=new Array();
test1=[34,55,32]
console.log(test1.firstElement([34,55,32]));

//prototype for arrow function
Array.prototype.firstElement=(value)=>{
    return value[0];
};
let test=new Array();//[7,9,0];
console.log(test.firstElement([34,55,32]));

*/