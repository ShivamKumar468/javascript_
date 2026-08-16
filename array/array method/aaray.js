
// ------------------------------------------------------------
// 1. CREATE ARRAY
// ------------------------------------------------------------
let arr = [10, 20, 30, 40, 50];
console.log(arr.length);


// ------------------------------------------------------------
// 3. push()
// Adds element(s) at the END
// Changes original array
// ------------------------------------------------------------

arr.push(60);
console.log(arr); // [10,20,30,40,50,60]


// ------------------------------------------------------------
// 4. pop()
// Removes the LAST element
// Returns removed element
// ------------------------------------------------------------

let removed = arr.pop();

console.log(removed); // 60
console.log(arr);     // [10,20,30,40,50]


// ------------------------------------------------------------
// 5. unshift()
// Adds element(s) at the BEGINNING
// ------------------------------------------------------------

arr.unshift(5);

console.log(arr); // [5,10,20,30,40,50]


// ------------------------------------------------------------
// 6. shift()
// Removes the FIRST element
// Returns removed element
// ------------------------------------------------------------

let first = arr.shift();

console.log(first); // 5
console.log(arr);   // [10,20,30,40,50]


// ------------------------------------------------------------
// 7. at()
// Access element using index
// Supports negative index
// ------------------------------------------------------------

console.log(arr.at(0));  // 10
console.log(arr.at(2));  // 30
console.log(arr.at(-1)); // 50
console.log(arr.at(-2)); // 40


// ------------------------------------------------------------
// 8. indexOf()
// Returns first index of an element
// Returns -1 if not found
// ------------------------------------------------------------

console.log(arr.indexOf(30)); // 2
console.log(arr.indexOf(100)); // -1


// ------------------------------------------------------------
// 9. lastIndexOf()
// Returns LAST index of an element
// ------------------------------------------------------------

let nums = [10, 20, 30, 20, 40];

console.log(nums.lastIndexOf(20)); // 3


// ------------------------------------------------------------
// 10. includes()
// Checks whether an element exists
// Returns true / false
// ------------------------------------------------------------

console.log(arr.includes(30));  // true
console.log(arr.includes(100)); // false


// ------------------------------------------------------------
// 11. find()
// Returns FIRST element satisfying condition
// ------------------------------------------------------------

let numbers = [5, 12, 8, 20, 25];

let result = numbers.find(x => x > 10);

console.log(result); // 12


// ------------------------------------------------------------
// 12. findIndex()
// Returns INDEX of first element satisfying condition
// ------------------------------------------------------------

let index = numbers.findIndex(x => x > 10);

console.log(index); // 1


// ------------------------------------------------------------
// 13. findLast()
// Returns LAST element satisfying condition
// ------------------------------------------------------------

let last = numbers.findLast(x => x > 10);

console.log(last); // 25


// ------------------------------------------------------------
// 14. findLastIndex()
// Returns INDEX of last matching element
// ------------------------------------------------------------

let lastIndex = numbers.findLastIndex(x => x > 10);

console.log(lastIndex); // 4


// ------------------------------------------------------------
// 15. map()
// Creates a NEW array
// Transforms every element
// ------------------------------------------------------------

let doubled = numbers.map(x => x * 2);

console.log(doubled);
// [10,24,16,40,50]


// ------------------------------------------------------------
// 16. filter()
// Creates NEW array
// Keeps elements satisfying condition
// ------------------------------------------------------------

let greater = numbers.filter(x => x > 10);

console.log(greater);
// [12,20,25]


// ------------------------------------------------------------
// 17. forEach()
// Executes function for every element
// Does NOT create a new array
// ------------------------------------------------------------

numbers.forEach(x => {
    console.log(x);
});


// ------------------------------------------------------------
// 18. reduce()
// Reduces array into ONE value
// Example: calculate sum
// ------------------------------------------------------------

let sum = numbers.reduce((total, x) => total + x, 0);

console.log(sum); // 70


// ------------------------------------------------------------
// 19. reduceRight()
// Same as reduce()
// But works from RIGHT to LEFT
// ------------------------------------------------------------

let values = [1, 2, 3, 4];

let result2 = values.reduceRight((total, x) => total + x, 0);

console.log(result2); // 10


// ------------------------------------------------------------
// 20. some()
// Returns true if AT LEAST ONE element matches
// ------------------------------------------------------------

console.log(numbers.some(x => x > 20));
// true


// ------------------------------------------------------------
// 21. every()
// Returns true if ALL elements match
// ------------------------------------------------------------

console.log(numbers.every(x => x > 0));
// true


// ------------------------------------------------------------
// 22. sort()
// Sorts array
// Changes original array
// IMPORTANT: For numbers use (a,b) => a-b
// ------------------------------------------------------------

let arr2 = [50, 10, 30, 20, 40];

arr2.sort((a, b) => a - b);

console.log(arr2);
// [10,20,30,40,50]


// Descending order

arr2.sort((a, b) => b - a);

console.log(arr2);
// [50,40,30,20,10]


// ------------------------------------------------------------
// 23. reverse()
// Reverses array
// Changes original array
// ------------------------------------------------------------

let reverseArr = [1, 2, 3, 4, 5];

reverseArr.reverse();

console.log(reverseArr);
// [5,4,3,2,1]


// ------------------------------------------------------------
// 24. slice()
// Extracts part of array
// Does NOT change original array
//
// slice(start, end)
// end is NOT included
// ------------------------------------------------------------

let a = [10, 20, 30, 40, 50];

let part = a.slice(1, 4);

console.log(part);
// [20,30,40]

console.log(a);
// [10,20,30,40,50]


// Copy complete array

let copy = a.slice();

console.log(copy);


// ------------------------------------------------------------
// 25. splice()
// Adds / removes / replaces elements
// CHANGES original array
//
// splice(start, deleteCount, items...)
// ------------------------------------------------------------

let b = [10, 20, 30, 40];

// Remove 2 elements from index 1

b.splice(1, 2);

console.log(b);
// [10,40]


// Add element

let c = [10, 20, 40];

c.splice(2, 0, 30);

console.log(c);
// [10,20,30,40]


// Replace element

let d = [10, 20, 30];

d.splice(1, 1, 50);

console.log(d);
// [10,50,30]


// ------------------------------------------------------------
// 26. concat()
// Combines arrays
// Does NOT change original array
// ------------------------------------------------------------

let x = [1, 2];
let y = [3, 4];

let combined = x.concat(y);

console.log(combined);
// [1,2,3,4]


// ------------------------------------------------------------
// 27. join()
// Converts array into STRING
// ------------------------------------------------------------

let words = ["JavaScript", "is", "easy"];

console.log(words.join(" "));
// "JavaScript is easy"

console.log(words.join("-"));
// "JavaScript-is-easy"


// ------------------------------------------------------------
// 28. toString()
// Converts array into string
// ------------------------------------------------------------

let stringArr = [10, 20, 30];

console.log(stringArr.toString());
// "10,20,30"


// ------------------------------------------------------------
// 29. flat()
// Removes nested array levels
// ------------------------------------------------------------

let nested = [1, [2, 3], [4, 5]];

console.log(nested.flat());
// [1,2,3,4,5]


// Multiple levels

let nested2 = [1, [2, [3, [4]]]];

console.log(nested2.flat(Infinity));
// [1,2,3,4]


// ------------------------------------------------------------
// 30. flatMap()
// Performs map() + flat()
// ------------------------------------------------------------

let flatResult = [1, 2, 3].flatMap(x => [x, x * 2]);

console.log(flatResult);
// [1,2,2,4,3,6]


// ------------------------------------------------------------
// 31. fill()
// Fills array elements with given value
// Changes original array
// ------------------------------------------------------------

let fillArr = [1, 2, 3, 4, 5];

fillArr.fill(0);

console.log(fillArr);
// [0,0,0,0,0]


// Fill specific range

let fillArr2 = [1, 2, 3, 4, 5];

fillArr2.fill(0, 1, 4);

console.log(fillArr2);
// [1,0,0,0,5]


// ------------------------------------------------------------
// 32. Array.isArray()
// Checks whether value is an array
// ------------------------------------------------------------

console.log(Array.isArray([1, 2, 3]));
// true

console.log(Array.isArray("hello"));
// false


// ------------------------------------------------------------
// 33. Array.from()
// Creates array from iterable / array-like object
// ------------------------------------------------------------

let str = "hello";

let chars = Array.from(str);

console.log(chars);
// ["h","e","l","l","o"]


// Create numbers 1 to 5

let nums2 = Array.from({ length: 5 }, (_, i) => i + 1);

console.log(nums2);
// [1,2,3,4,5]


// ------------------------------------------------------------
// 34. Array.of()
// Creates array from arguments
// ------------------------------------------------------------

let newArr = Array.of(10, 20, 30);

console.log(newArr);
// [10,20,30]


// ------------------------------------------------------------
// 35. keys()
// Returns iterator containing indexes
// ------------------------------------------------------------

let keyArr = ["A", "B", "C"];

for (let key of keyArr.keys()) {
    console.log(key);
}

// 0
// 1
// 2


// ------------------------------------------------------------
// 36. values()
// Returns iterator containing values
// ------------------------------------------------------------

for (let value of keyArr.values()) {
    console.log(value);
}

// A
// B
// C


// ------------------------------------------------------------
// 37. entries()
// Returns [index, value]
// ------------------------------------------------------------

for (let [index, value] of keyArr.entries()) {
    console.log(index, value);
}

// 0 A
// 1 B
// 2 C


// ------------------------------------------------------------
// 38. copyWithin()
// Copies elements inside same array
// Changes original array
// ------------------------------------------------------------

let copyArr = [1, 2, 3, 4, 5];

copyArr.copyWithin(0, 3);

console.log(copyArr);
// [4,5,3,4,5]


// ------------------------------------------------------------
// 39. toReversed()
// Modern version of reverse()
// DOES NOT change original array
// ------------------------------------------------------------

let original = [1, 2, 3, 4];

let reversed = original.toReversed();

console.log(reversed);
// [4,3,2,1]

console.log(original);
// [1,2,3,4]


// ------------------------------------------------------------
// 40. toSorted()
// Modern version of sort()
// DOES NOT change original array
// ------------------------------------------------------------

let original2 = [30, 10, 20];

let sorted = original2.toSorted((a, b) => a - b);

console.log(sorted);
// [10,20,30]

console.log(original2);
// [30,10,20]


// ------------------------------------------------------------
// 41. toSpliced()
// Modern non-mutating version of splice()
// ------------------------------------------------------------

let original3 = [10, 20, 30];

let spliced = original3.toSpliced(1, 1, 50);

console.log(spliced);
// [10,50,30]

console.log(original3);
// [10,20,30]


// ============================================================
// SPREAD OPERATOR (...)
// ============================================================

// Copy array

let arr3 = [1, 2, 3];

let copyArr3 = [...arr3];


// Combine arrays

let p = [1, 2];
let q = [3, 4];

let merged = [...p, ...q];

console.log(merged);
// [1,2,3,4]


// ============================================================
// DESTRUCTURING
// ============================================================

let numbers3 = [10, 20, 30];

let [firstValue, secondValue, thirdValue] = numbers3;

console.log(firstValue);  // 10
console.log(secondValue); // 20
console.log(thirdValue);  // 30


// ============================================================
// QUICK DSA CHEAT SHEET
// ============================================================

/*

ADD / REMOVE

push()       -> Add at END
pop()        -> Remove from END
unshift()    -> Add at BEGINNING
shift()      -> Remove from BEGINNING


SEARCH

indexOf()       -> Find index
lastIndexOf()   -> Find last index
includes()      -> Check existence
find()          -> Find first element
findIndex()     -> Find first index
findLast()      -> Find last element
findLastIndex() -> Find last index


PROCESS

forEach() -> Loop through array
map()     -> Transform every element
filter()  -> Select elements
reduce()  -> Convert to one value
some()    -> At least one?
every()   -> All?


MODIFY

sort()       -> Sort array
reverse()    -> Reverse array
splice()     -> Add/remove/replace
fill()       -> Fill elements
copyWithin() -> Copy inside array


NON-MUTATING MODERN METHODS

toSorted()   -> Sort without changing original
toReversed() -> Reverse without changing original
toSpliced()  -> Splice without changing original


COPY / COMBINE

slice()    -> Copy/extract part
concat()   -> Combine arrays
...spread  -> Copy/combine


CONVERSION

join()     -> Array to String
toString() -> Array to String
flat()     -> Flatten nested arrays
flatMap()  -> map + flat


STATIC METHODS

Array.isArray()
Array.from()
Array.of()


ACCESS

at()
length


ITERATORS

keys()
values()
entries()

*/