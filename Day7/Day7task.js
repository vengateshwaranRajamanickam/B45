let xho=new XMLHttpRequest();
let user=new Array;
xho.open("GET","https://restcountries.com/v3.1/all");
xho.send();

// let der=document.createElement("p");
// document.body.appendChild(der);
// let current={voltage:{name:"resistor",reading:"time"},element:{name:"resist",reading:"t"}}
// if((current.voltage).hasOwnproperty(`name`)){
// let {voltage}=current;
// console.log(voltage);}


xho.onload=function (){
    user=JSON.parse(xho.response);
    let ans1,ans2,ans3 = new Array;
    let findusd=new Object;
    ans1=user.filter(({continents})=>continents=="Asia");
    ans1=ans1.map((value)=>value.capital);
    ans2=user.filter(({population})=>population<200000);
    ans3=user.filter(({currencies})=>currencies?.USD);
    ans3=ans3.map((value)=>value.capital);
    ans4=user.forEach(({name, capital, flags})=>{
        let img=new Object();
        console.log(name.common);
        console.log(capital);
        let {png}=flags;
        img.src=png;
        console.log(png);  
    });

    console.log(ans1);
    console.log(ans2);
    console.log(ans3);
   
}
