// Write a function which takes an array and emits the majority element
function counted(array, val){
    var counter = 0;
    for(var i=0; i<array.length-1;i++){

        if(val == array[i]){
            counter++;
        }
    }
    return counter;
}

function majorityElements(array){
    var n = array.length/2;
    for(i=0;i<array.length-1; i++) {
        var red = counted(array, array[i]);
        if (red >= n) {
            console.log("The majority element is " + red);
            return;

        }
    }
}

var array =[1,3,4,3,3,2];
majorityElements(array);