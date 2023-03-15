function sum(num1, num2){
    return num1 + num2;
}

function calc(num1, num2, callback){
    return callback(num1, num2);
};

console.log(calc(110,1928, sum))


setTimeout(function() {
    console.log(`testing s`);
}, 2000);

function resTime(responseTime){
    console.log(`respuesta en ${responseTime} seg`)
}

setTimeout(resTime, 2000, 2)