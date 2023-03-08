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
