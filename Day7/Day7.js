let userdata=[{"createdAt":"2023-02-20T10:11:04.420Z","name":"Eloise Raynor","mobileNumber":"1-914-349-7458 x805","email":"Norma.Hilpert@example.com","age":45,"id":"8"},{"createdAt":"2023-02-20T17:50:12.535Z","name":"Ruth Barton","mobileNumber":"530-645-5981 x317","email":"Tyrese_Ziemann89@example.net","age":41,"id":"9"},{"createdAt":"2023-02-20T21:59:05.658Z","name":"Elsa Wolff","mobileNumber":"891-863-1890","email":"Darryl_Cassin@example.net","age":55,"id":"10"},{"createdAt":"2023-02-20T14:30:56.246Z","name":"Reginald Gerlach I","mobileNumber":"1-905-928-2957 x5772","email":"Solon_Schaden@example.org","age":17,"id":"11"},{"createdAt":"2023-02-20T13:31:18.833Z","name":"Cynthia Rohan","mobileNumber":"(656) 990-7076 x3797","email":"Eriberto.Johnston@example.net","age":99,"id":"12"},{"createdAt":"2023-02-21T01:01:28.964Z","name":"Annie Koch","mobileNumber":"1-260-877-4215 x779","email":"Easton_Padberg@example.net","age":70,"id":"13"},{"createdAt":"2023-02-20T10:39:02.224Z","name":"Leigh Rosenbaum","mobileNumber":"(653) 674-8099 x04997","email":"Derrick.Von@example.org","age":86,"id":"14"},{"createdAt":"2023-02-20T21:40:15.082Z","name":"Kerry Hintz","mobileNumber":"1-306-513-8806","email":"Dallin.Kemmer@example.org","age":7,"id":"15"},{"createdAt":"2023-02-20T11:58:15.629Z","name":"Joseph Ankunding","mobileNumber":"1-501-718-8515","email":"Moriah95@example.org","age":31,"id":"16"}];
let b=userdata.map((value)=>{
    let arr=new Array();
    if(value.age>18){
    arr.name=value.name;
    arr.eligibility="eligibility";
    }
    else
    {
    arr.name=value.name;
    arr.eligibility="not eligibility";
    }
    return arr;
 });
console.log(b);


let testo = [{ "createdAt": "2023-02-20T10:11:04.420Z", "name": "Eloise Raynor", "mobileNumber": "1-914-349-7458 x805", "email": "Norma.Hilpert@example.com", "age": 45, "id": "8" }, 
{ "createdAt": "2023-02-20T17:50:12.535Z", "name": "Ruth Barton", "mobileNumber": "530-645-5981 x317", "email": "Tyrese_Ziemann89@example.net", "age": 41, "id": "9" },
{ "createdAt": "2023-02-20T21:59:05.658Z", "name": "Elsa Wolff", "mobileNumber": "891-863-1890", "email": "Darryl_Cassin@example.net", "age": 55, "id": "10" }, 
{ "createdAt": "2023-02-20T14:30:56.246Z", "name": "Reginald Gerlach I", "mobileNumber": "1-905-928-2957 x5772", "email": "Solon_Schaden@example.org", "age": 17, "id": "11" }, { "createdAt": "2023-02-20T13:31:18.833Z", "name": "Cynthia Rohan", "mobileNumber": "(656) 990-7076 x3797", "email": "Eriberto.Johnston@example.net", "age": 99, "id": "12" }, { "createdAt": "2023-02-21T01:01:28.964Z", "name": "Annie Koch", "mobileNumber": "1-260-877-4215 x779", "email": "Easton_Padberg@example.net", "age": 70, "id": "13" }, 
{ "createdAt": "2023-02-20T10:39:02.224Z", "name": "Leigh Rosenbaum", "mobileNumber": "(653) 674-8099 x04997", "email": "Derrick.Von@example.org", "age": 86, "id": "14" }, 
{ "createdAt": "2023-02-20T21:40:15.082Z", "name": "Kerry Hintz", "mobileNumber": "1-306-513-8806", "email": "Dallin.Kemmer@example.org", "age": 7, "id": "15" }, { "createdAt": "2023-02-20T11:58:15.629Z", "name": "Joseph Ankunding", "mobileNumber": "1-501-718-8515", "email": "Moriah95@example.org", "age": 31, "id": "16" },
{ "createdAt": "2023-02-20T20:04:32.103Z", "name": "Dominick Turner", "mobileNumber": "454.283.1636 x8366", "email": "Imani.Will10@example.com", "age": 87, "id": "17" }]
//console.log(testo);
const f=testo.map(value=>{
    let ans= new Object();
    if(value.age>18){ 
    ans.valid="eligible";
    ans.name=value.name;
    }
    else {
    ans.valid="not eligible"
    ans.name=value.name;
    }
    return {ans}
})
console.log(f);

const k=testo.forEach(value=>{
    value.mobileNumber;
})
console.log(k);

const g=testo.map(value=>{
    let total=value.age+5;   //.map method and using object shortcuthand
    return {total};
    
})
console.log(...g);

const m=testo.map(value=>{
    let mn=value.age;          //.map method and using object shortcuthand
    return [mn];
})
console.log(m);
//filter 
const senior=testo.filter(({age})=>age>60)   //sorting senior citizen age >60
console.log(senior);
//reduce
let sum=[34,24,24,78,98,564,32];
console.log(sum.reduce((total,currentvalue)=>total+=currentvalue,0));
