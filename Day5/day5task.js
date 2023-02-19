
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
let sum=0;
arr.forEach((value)=>{
    sum+=parseInt(value);
});
console.log(sum);
//find prime number of array
const prime= function numberprime(...primenumber){
    let prime,answer=[];
    prime=primenumber;
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
    answer.push(prime[j]);
}
return answer;
}
console.log(prime(332,7,9,17,44));
//return all palindromes in array
let palindromes=["motor","apple","mango","radar"];
let ans=[];
palindromes.forEach((value)=>{
    let  arrValue = value.split ('');  
    const reveArrVal = arrValue.reverse();     
    const revString = reveArrVal.join('');  
    if (value == revString)  
    ans.push(value);
    else  
    ans.push(value);
});
console.log(palindromes);

//return median of two sorted array of same size
const median=(...arr)=>{
    mid = Math.floor(arr.length/2);
    num=[...arr].sort((a,b)=>a-b);
    return (num.length% 2!==0) ? num[mid]: (num[mid]+num[mid-1])/2;
}
console.log(median(90,89,79,877,55));
console.log(median(80,90,120,110,269,786));

//rotate an array by k times
    const kt = function ktimes(k,...value){
    const temp=value;
    value=[];
    for (let i=0;i<temp.length;i++){
    let p = (i+k) % temp.length ;
    value[p]=temp[i]; 
    }
    return value;
}
console.log(kt(5,89,234,80,33));

//remove duplicate from array
let duplicate=[332,78,7,7,44,7];
const tofindduplicate= (value)=>value.filter((item,index)=>value.indexOf(item)===index)
console.log(tofindduplicate(duplicate));


















