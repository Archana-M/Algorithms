var array= [2,4,1,3,"string",10];
for(var i=0;i<array.length/2;i++){
	var temp = array[array.length-i-1];
	array[array.length-i-1] = array[i];
	array[i] = temp; 
}
console.log(array);