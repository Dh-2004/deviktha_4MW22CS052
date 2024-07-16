// Write a JavaScript function named findMax that takes an array of numbers as
// input and returns the maximum number from the array. If the array is empty, the function should return null.
function findMax(arr){
    let maxnum= arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i]>maxnum){
            maxnum=arr[i];
        }
    }
    if(arr.length==0){
        return null;
    }
    return maxnum;

}
let n1arr=[1,2,5,6,9,10];
let n2arr=[];
console.log(findMax(n1arr));
console.log(findMax(n2arr));