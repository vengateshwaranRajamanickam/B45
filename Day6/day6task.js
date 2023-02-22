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
console.log(ubercustomer1.startjourney());
console.log(ubercustomer1.Totalfair()); 
