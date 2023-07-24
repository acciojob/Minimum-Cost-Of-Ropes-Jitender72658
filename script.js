function calculateMinCost() {
  //your code here
 let lengths = document.getElementById('rope-lengths');
 let values = lengths.value.split(', ').map(Number);
	let ans = 0;
	while(values.length>1){
		values.sort((a, b) => a - b);
		let val1 = values[0];
		let sum = values[0]+values[1];
		values[1] = sum;
		values.splice(0,1);
		ans+=sum;	
	}
 let result = document.getElementById('result');
	result.textContent = ans;
}  
