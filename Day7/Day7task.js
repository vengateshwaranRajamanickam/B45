let xho=new XMLHttpRequest();
let user=new Array;
xho.open("GET","https://restcountries.com/v3.1/all");
xho.send();

let der=document.createElement("p");
document.body.appendChild(der);
xho.onload=function (){
    user=JSON.parse(xho.response);
    console.log(user);
    let ans1,ans2 = new Array;
    ans1=user.filter(({continents})=>continents=="Asia");
    ans2=user.filter(({population})=>population<200000);
    ans1=ans1.map((value)=>{
        let sortregion=[];
        sortregion=value.capital;
        return sortregion;
    });
    console.log(ans1);
    console.log(ans2);
    // ans2=user.filter((value)=>{
    // if((value.population)<200000)
    // return value.countries ;       
    // });
    //ans3=user.filter(({USdollar,countries})=>population<2000000?countries:"");
//console.log(user.grabdetail());
}
    



