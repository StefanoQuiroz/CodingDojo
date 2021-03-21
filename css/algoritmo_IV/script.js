/*
// 1. Dados un array y un valor Y, cuenta e imprime (print) el número de valores del array que sean mayores que Y.
let array =[1,2,3,4,5,6,7,8];
let Y = 4;
let count=0;
for(let i=0; i<array.length;i++){
    if(array[i]>Y){
        count++;
        console.log(array[i]);
    }
}
console.log(`Count: ${count}`);
*/

/*
// 2. Dado un array, imprime los valores máximos (max), mínimos (min) y promedio (average) para el array. 
let array =[1,2,3,4,5,6,7,8];
let min=array[0], max=array[0], average, sum=0, len=array.length;
for(let i=0; i<array.length;i++){
    sum+=array[i];
    if(array[i]>max){
        max=array[i];
    } else{
        min=array[i];
    }
}
average=sum/len;
console.log(`Max: ${max}`);
console.log(`Min: ${min}`);
console.log(`Average: ${average}`);
*/

/*
// 3. Dado un array de números, crea una función que dé como resultado un nuevo array donde los valores negativos se reemplacen por el texto (string) ‘Dojo’. Por ejemplo, reemplazarNegativos([1,2,-3,-5,5]) debiera devolver [1,2, “Dojo”, “Dojo”, 5].

function reemplazarNegativos (arr){
    let newArr=[];
    for(let i=0; i<arr.length; i++){
        if(arr[i]<0){
            arr[i]="Dojo";
        }
        newArr.push(arr[i]);
    }
    return newArr;
}

b=reemplazarNegativos([1,2,-3,-5,5]);
console.log(b);
*/

/*
// 4. Dado un array y su respectivo índice, remueve los valores en el rango del índice dado( acortando el array). Por ejemplo, removerRango([20,30,40,50,60,70],2,4)debiera devolver [20,30,70].

function removerRango(array, start, end){
    let newArr=[];
    for(let i=0; i<array.length; i++){
        if(i<start || i>end){
            newArr.push(array[i])
        }
    }
    return newArr;
}

b=removerRango([20,30,40,50,60,70],2,4);
console.log(b);
*/