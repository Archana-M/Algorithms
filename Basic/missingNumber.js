// You are given a list of n-1 integers and these integers are in the range of 1 to n. There are no duplicates in list. One of the integers is missing in the list. Write an efficient code to find the missing integer.
// ref:geeksforgeeks
var array = [1,2,4,5,6];
for(var i=0; i<array.length-1;i++){
    if(array[i+1]!=array[i]+1){
        console.log(array[i]+1);
    }
}