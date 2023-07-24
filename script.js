function calculateMinCost() {
  //your code here
 let lengths = document.getElementById('rope-lengths');
 let values = lengths.value.split(',');
	values.sort();
	values.forEach((val)=>{
		console.log(val);
	})
	console.log(values);
 let ans = document.getElementById('result');
	ans.innerText = values;
  
  
}  
