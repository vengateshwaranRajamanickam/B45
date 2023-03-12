/*
let display=function (out){
    console.log(out);
}

let decrease=function(num,callback){
    callback(num);
    setTimeout(()=>{
        num--;
        callback(num);
        setTimeout(()=>{
            num--;
            callback(num);
            setTimeout(()=>{
                num--;
                callback(num);
                setTimeout(()=>{
                    num--;
                    callback(num);
                    setTimeout(()=>{
                        num--;
                        callback(num);
                        setTimeout(()=>{
                            num--;
                            callback(num);
                            setTimeout(()=>{
                                num--;
                                callback(num);
                                setTimeout(()=>{
                                    num--;
                                    callback(num);
                                    setTimeout(()=>{
                                        num--;
                                        callback(num);
                                            setTimeout(()=>{
                                                num--;
                                                if(num<=0)
                                                console.log("Happy Independence Day");
                                            },1000)
                                        },1000)   
                                },1000)
                            },1000)   
                        },1000)   
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
}

decrease(10,display)

fetch("https://jsonplaceholder.typicode.com/users")
.then((data)=>data.json())
.then((res)=>res.forEach(({username}) => {
    if(username.length>5)
    console.log(username);
}))
.catch((err)=>console.log(err));
*/

// let promise=new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve(1); 
//     },3000)
//     })
//  let promise1=new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             reject("2"); 
//         },1000)
//         })

//      Promise.any([promise,promise1])
//     .then((num)=>console.log(num))
//     .catch((res)=>console.log(res))

   //promise
    //.then((num)=>console.log(num))

    // let promise1=new Promise((resolve,reject)=>{
    //             setTimeout(()=>{
    //                 resolve(2); 
    //             },2000)
    //             }).then((res)=>{console.log(res)
    //             promise1=new Promise((resolve,reject)=>{       //it dont return value    //incaseofreturn  //return new promise      //return promise1
    //                 setTimeout(()=>{
    //                     resolve(2); 
    //                 },2000)
    //                 }).then((res)=>console.log(res))
    //             })    

   