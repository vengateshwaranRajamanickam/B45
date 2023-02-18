let arr=[324,555,667,882,907];

let dis=document.createElement("p");
document.body.appendChild(dis);

//print out the odd number in an array
let odd=[];
arr.forEach((value)=>{
    if(value%2!==0){
    odd.push(value);
    }
});
console.log(...odd);

//all string to title caps in an array
let fruits=["apple","orange","mango"];
let v;
fruits.forEach((value)=> v=caps(value));
function caps(arr){
    let u;
    [u,...rest]=arr.split("");
    console.log(u.toUpperCase(),...rest);
}
// sum of all numbers in an array
/*n
let sum=0;
arr.forEach((value)=>{
    sum+=parseInt(value);
});
console.log(sum);
//rotate an array by k times

var rotate=["king ",234,"joy","lion"];
var time= 5;
//for (let i=1;i<=time;i++){
change(rotate);
function change(value){
    for (let i=0,j=1;i<3;i++,j++){
       
    let length=(rotate.length-j);
    let swap=value[length];
    value[length]=value[i];
    value[i]=swap;
    //console.log(...value);
        //console.log(...value);
    }
}*/
//find prime number of array
let prime=[332,7,9,17,44];
let primenumber=[];
for(let j=0;j<prime.length;j++){
    let ans=true;
    if(prime[j]>1){
        for(let i=2;i<=prime[j];i++){
            if(prime[j]%i===0)
            ans=false;
            break;
       }
    }   
    if(ans===true)
    primenumber.push(prime[j]);
}
console.log(...primenumber);
//remove duplicate from array
let duplicate=[332,7,7,17,44,7];
let answer=[];
for(let j=0;j<duplicate.length;j++){
    let ans=true;
     for(let i=1;i<=prime[j];i++){
            if(duplicate[j]===duplicate[i])
            ans=false;
            break;
       }
    if(ans===true)
    answer.push(duplicate[j]);
}
console.log(...answer);
//