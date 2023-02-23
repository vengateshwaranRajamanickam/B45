let xho=new XMLHttpRequest();
let user=new Array;
xho.open("GET","https://restcountries.com/v3.1/all");
xho.send();

let der=document.createElement("p");
document.body.appendChild(der);
xho.onload=function (){
    user=JSON.parse(xho.response);
    let ans1,ans2,ans3,findusd = new Array;
    ans1=user.filter(({continents})=>continents=="Asia");
    ans1=ans1.map((value)=>value.capital);
    ans2=user.filter(({population})=>population<200000);
    ans3=user.map(({currencies})=>currencies.hasOwnProperty("USD"));
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
