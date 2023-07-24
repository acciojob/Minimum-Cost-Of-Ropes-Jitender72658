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

// function calculateMinCost() {
//   const roper= document.getElementById("rope-lengths")
// 	let lenarr= (roper.value).split(',')
// 	let sum=0;
// 	let fs= lenarr.map(x => Number(x))
// 	let gh=0
// 	while(fs.length!=1){
// 		fs.sort(function(a,b){return a-b})
// 		sum=fs[0]+fs[1]
// 		fs[1]=sum
// 		fs.shift()
// 		gh=gh+sum
// 	}
// 	const reser= document.getElementById("result")
// 	reser.innerText= gh
// }  
