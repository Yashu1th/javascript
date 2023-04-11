function mathSeq(arr) {
  let arthe=new Set();
  let geo=new Set();
  for (let i = 1; i < arr.length; i++) {
    let num1=arr[i]-arr[i-1];
    arthe.add(num1);
    let num2=arr[i]/arr[i-1];
    geo.add(num2);
  }
	if(arthe.size===1){
    return "arthematic";
  }
  else if(geo.size===1){
    return "geomentric";
  }
  else{
    return "-1";
  }
}

console.log(mathSeq([2, 4, 6, 8, 10]));
console.log(mathSeq([3,9,27]));
console.log(mathSeq([1,2,3,4,5,8]));
