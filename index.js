let a = 5;
let b = "Myname";

function addTwoNumbers(x, y) { return x + y };

console.log('lastname');
console.log(addTwoNumbers(2,3));

const add = function(a,b) { return a + b };

//hoisting
function MyFunc() { 
    anotherFunc()                                       //'anotherFunc' is being hoisted
    function anotherFunc() {                            //unless this func is hoisted within Myfunc it will not be run
        return console.log('Hello')
    }
}

//--------
let arr = [ 1, 2, 3, 4, 5];
console.log(arr);

arr[3] = 'x';
console.log(arr);

//--------
console.log(arr.length);

let arr1 = ['Name', 'LastName']
console.log(arr1.length)
//'in' checks if an arr has the input index
console.log(0 in arr1)                                  //arr1 has an index 0
console.log(2 in arr1)                                  //arr1 dosnt have an index 2

let arr2 = []

arr2.test = 111
console.log(arr2)
console.log(arr2.test)

//'.slice' returns the index's between the first parameter and the second, if there is no second parameter it will return every index after the first parameter  
console.log(arr.slice(1,4))                            //returns index 1,2,3
console.log(arr)                                       //does not alter arr

//'.concat' merges two arrays
let mergeArr = arr.concat(arr1)
console.log(mergeArr)

let = names = ['Ali', 'Aron', 'Dale', 'Asti']
console.log(names.pop())

console.log(names.push('jordan'))
console.log(names)

names.forEach(name => console.log(name))

console.log(names.shift())
console.log(names)

console.log(names.unshift('Ali'))
console.log(names)

console.log(names.reverse())

console.log(names.indexOf('Dale'))

console.log(names.join())
console.log(names.join('-duuhhh-'))

//map
arr = [1,2,3,4,5]
console.log(arr.map(Math.round))
console.log(arr.map(x => x * 2))

//reduce
console.log(arr.reduce(x => x + 1))                 //this adds 1 to each element of the array and then adds them all together

//splice                                            //splice allows you to insert an element into a array at a specified index with or without deleting any other index's
arr.splice(2,0,42)                                  //this inserts '42' to the arr array at index 1 without deleting other index's
console.log(arr)
arr.splice(2,1,24)                                  //this inserts '24' to the arr arrat at index 1 and removes the prior index 1
console.log(arr)
arr.splice(2,3,42)                                  //this inserts '42' to the arr array at index 1 and removes 3 index's
console.log(arr)