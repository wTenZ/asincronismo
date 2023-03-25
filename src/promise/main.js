const promise = new Promise(function (resolve, reject){
    resolve ('hey!')
});

const cows = 11;

const countCows = new Promise(function(resolve, reject){
    if(cows>10){
        resolve(`We have ${cows} cows in the farm`)
    }else {
        reject("there is not enought cows in te farm")
    }
});

countCows.then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
}).finally(() => console.log('The program was failed with success'))
