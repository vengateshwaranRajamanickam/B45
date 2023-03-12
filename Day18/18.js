document.addEventListener('DOMContentLoaded',()=>{
    var g=document.getElementsById(mySelect);
    fetch("https://restcountries.com/v2/all").then(data=>data.json())
    //.then(res=>console.log(res))
    .then(res=>{
      let out="";
      res.forEach(countries => out+=`<option>${countries.names}</option>`)
      console.log(out);
      g.innerHTML=out;
    })
     });
      
    // fetch("https://openweathermap.org")
    // .then((data)=>data.json())
    // .then((continents)=>console.log(continents))
    //document.body.getElementsByClassName(listregion).value.continents)
    // let g=document.getElementById("mylist");
    // function parameter(e){
    //   let out="";
    //   res.forEach(countries => {
    //     out+=`<option>${countries.name}</option>`
    //   })
    //   g.innerHTML=out;
    //document.querySelector("listregion")=<option value="e.value" ></option>
    //}
    