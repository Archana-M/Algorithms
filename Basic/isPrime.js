function isPrime(val) {
    for(var i = 2; i < val; i++) {
        if(val % i === 0) {
            return false;
        }
    }
    return true;
}
var array=[24,13];
for(var i=0;i<array.length; i++){
  var iP = isPrime(array[i]);
  console.log(iP);
}