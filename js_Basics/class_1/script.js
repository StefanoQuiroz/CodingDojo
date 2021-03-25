// function fib(n){
//     if(n==1){
//         return 0;
//     } else if (n==2){
//         return 1;
//     } else {
//         let num1= fib(n-1);
//         let num2= fib(n-2);
//         return num1 + num2;
//     }
// }

// fib(a);
// fib(b);
// fib(c);
// fib(d);

// let res ={a=3, b=4, c=5, d=10};
// console.log(res);


// function algo2 (arr){
//     //    const max = Math.max(1,2,3,4,5,6,7,8,9)
//     // const max = Math.max(...arr);
//     // const min = Math.min(...arr);
//     // return [max, min];
//     let min=arr[0];
//     let max=arr[0];
//     arr.forEach
// }

// console.log(algo2([1,2,3,4,5,6]));

// function algo3(arr){
//     let last =arr[arr.length-2];
//     console.log(last);
//     for (let i of arr){
//         if(arr[i]%2){
//             return arr[i]
//         }
//     }
// }
// console.log(algo3([1,2,3,4,5,6]));

// function algo7(arr){
//     for(i in arr){
//         if(i%2){
//             arr[i]++
//         }
//     }
//     return arr;
// }
// console.log(algo7([1,2,3,4,5,6]));

// function algo6(arr){
//     let sum=0, total=arr.length, avg;
//     for(i in arr){
//         sum+=arr[i]
//     }
//     avg=sum/total;
//     return avg
// }

// console.log(algo6([1,3,5,7,20])); // 7.2


// function recursiveSort(arr){
//     console.log('arr is ', arr);
//     if(arr.length==1){
//         return arr;
//     }
//     var max = arr[0];
//     var maxidx = 0;

//     for(var i=1; i<arr.length; i++){
//         if(arr[i]> max){
//             max=arr[i];
//             maxidx=i;
//         }
//     }
//     arr[maxidx]=arr[arr.length-1];
//     arr.pop();
//     console.log('maximum found', max);
//     x=recursiveSort(arr);
//     console.log('x is', x);
//     x.push(max);
//     return x;

// }

// output= recursiveSort([5,3,7]);
// console.log('final output', output);

function algo7 (){
    let arr=[];
    for (var i=1; i<=50; i++){
        if(i%2){
            arr.push(i)
        }
    }
    return arr;
}

console.log(`Impares ${algo7()}`);
