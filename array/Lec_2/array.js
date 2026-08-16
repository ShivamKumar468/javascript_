let arr=[2,20,30,2,3,3,6,9,0,5,4]
arr[0]=10;
arr[6]=100;
// console.log(arr);
// console.log(arr.length);

// let val = arr[4];// accessing an element of the array
// console.log(val);

// arr.push(9); // adds an element at the end of the array
// console.log(arr);
// console.log(arr.length);

// arr.pop();  // removes the last element
// console.log(arr);

// console.log(arr.length);

// arr.shift(); // removes the first element
// console.log(arr);
// console.log(arr.length);

// arr.unshift(1); // adds an element at the beginning of the array
// console.log(arr);
// console.log(arr.length);

// let len =arr.length;  
// console.log(arr[len-1]); // accessing the last element of the array
// console.log(arr);

// arr[4]=50;// changing the value of an element of the array
// console.log(arr);

// arr.splice(2,3); // removes 3 elements starting from index 2
// console.log(arr);

// arr.splice(3)// removes 1 element starting from index 3
// console.log(arr);

// arr.splice(2,0,100,200,300); // adds 3 elements starting from index 2
// console.log(arr);

// arr.splice(2,2,1000,2000); // removes 2 elements starting from index 2 and adds 2 elements
// console.log(arr);   

// sliceArr = arr.slice(2,5); // creates a new array from index 2 to 4 (5 is not included)
// console.log(sliceArr);
// console.log(arr);

// let arr2 = [1,2,3,4,5];
// let arr3 = [6,7,8,9,10];
// let newArr = arr2.concat(arr3); // concatenates two arrays
// console.log(newArr);


// arr.unshift(1); // adds an element at the beginning of the array
// console.log(arr);
// console.log(arr.length);

//how to remove a element at any index
//splice (index,length)

arr.splice(3,1);
console.log(arr)

arr.splice(3);
console.log(arr);