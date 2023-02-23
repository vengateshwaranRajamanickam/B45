let xho=new XMLHttpRequest();
let user=new Array;
xho.open("GET","https://restcountries.com/v3.1/all");
xho.send();

let der=document.createElement("p");
document.body.appendChild(der);
xho.onload=function (){
    user=JSON.parse(xho.response);
    console.log(user);
    let ans1,ans2,ans3,ans4 = new Array;
    ans1=user.filter(({continents})=>continents=="Asia");
    ans2=user.filter(({population})=>population<200000);
    ans1=ans1.map((value)=>{
        let sortregion=[];
        sortregion=value.capital;
        return sortregion;
    });
    // ans3=user.filter(({currencies})=>{
    //     //let currenciesid=new Array();
    //     let {symbol}=currencies;
    //     console.log(symbol);
        //return currenciesid
    });
    // ans4=user.forEach(({name, capital, flag})=>{
    //     console.log(name.common);
    //     console.log(capital);


    console.log(ans1);
    console.log(ans2);
    console.log(ans3);
    // ans2=user.filter((value)=>{
    // if((value.population)<200000)
    // return value.countries ;       
    // });name, capital, flag
    //ans3=user.filter(({USdollar,countries})=>population<2000000?countries:"");
//console.log(user.grabdetail());
}
    



