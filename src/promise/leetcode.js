function delay(time, message){
    return new Promise((resolve, reject)=>{
        if(time==0){
            reject ("error, el tiempo no puede ser 0 segundos")
        }
        return setTimeout(()=>{
            resolve (message)
        },time);
    });
}

delay(0, "Hello after 0s")
.then((message) => console.log(message)).catch((error) => console.log(error))

delay(3000, "Hello after 3s")
.then((message) => console.log(message))