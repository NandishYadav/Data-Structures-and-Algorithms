const x =121;
const y =10;
const arr = [111,121,10]
const n = 3;
 
function PalinArray(arr,n){
    //code here
    let output;
    for(let i=0;i<(n);i++){
        console.log(arr[i]!==parseInt(arr[i].toString().split("").reverse().join("")))
        if(arr[i]!==parseInt(arr[i].toString().split("").reverse().join(""))){
            output = 0;
            break;
        }else{
            output = 1
        }
    }
    return output
}

console.log(PalinArray(arr,n));