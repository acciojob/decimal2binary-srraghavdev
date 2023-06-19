function threeSum(arr, target) {
// write your code here
	let str=""
 while(arr>0){
	 str+=(arr%10)
	 arr=Math.floor(arr/10)
 }
	target= parseInt(str.reverse())
	console.log(target)
	return target
}

module.exports = threeSum;
