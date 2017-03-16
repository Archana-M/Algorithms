// Given an array of positive integers. All numbers occur even number of times except one number which occurs odd number of times. Find the number in O(n) time & constant space.
var array = [1,3,2,3,5,2];
function counted(array, val){
    counter = 0;
    for(var i = 0; i<array.length; i++){
        if(val == array[i]){
            counter++;
        }
    }
    return counter;
}

for(var i=0; i<array.length;i++){
    var red = counted(array, array[i]);
    if(red % 2 !== 0){
        console.log("The number occurring odd number of times " + array[i]);
    }
}