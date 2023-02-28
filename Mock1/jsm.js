// let inp=[2,2];
// let pro=inp[0]*inp[1];
// let ans=Math.sqrt(pro);
// if(inp[0]==ans)
// console.log("yes");
//   else
// console.log("no");

// let n=41;

// function isComposite(n) 
// { 
//     if (n <= 3) 
//     return false; 
//     if (n%2 == 0 || n%3 == 0) 
//     return true; 
  
//     return false; 
// } 
//     isComposite(n)?console.log("yes"):console.log("no"); 

// let userInput="mom"
// let k=userInput.split("");
// if(k.length%2===0)
// console.log(0);
// else{
// let mid=k.length/2;
// mid=mid.toFixed();
// console.log(mid)
// let j=k.length-1;
// console.log(j);
// let anv;
// for(let i=0;i<mid;i++,j--){
//    if(k[i]==k[j])
//    anv=true;
//    else
//    anv=false;
//    break;
// }
// if(anv===true)
// console.log(1);
// else
// console.log(0);
// }


// let sort=userInput[1];
// let n=userInput[0];
// let alpa;
// for (let i=0;i<n;i++){
//     let temp=sort.split("");
//     alpa=temp.slice(0,1);
// }


// let z="jack and jill went up and down to get water";
// z=z.replace("up and down","down and up")
// console.log(z);


let arr = [1, 2, 333, 786, 11, 23]
let ans=arr.sort((a,b)=>b-a);

console.log(ans);
