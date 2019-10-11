#Javascript: Fibonacci series
function fib(n){
 let arr = [0,1];
  for(let i=0; i<n-2; i++){
    arr.push(arr[i] + arr[i+1]);
  }
  console.log(arr);
}

fib(10);

#Javascript: Fibonacci series pattern for sum of kth term
function fib(n, k){
  let ksum = k;
  let arr=[];
  while (ksum>=1){
    arr.push(1);
    ksum--;
  }
  for(let i=0;i<n-k;i++){
    let newElem = arr.slice(i, k+i).reduce(function(a,b){return a+b});
    arr.push(newElem);
  }
  console.log(arr);
}

fib(10,4);
