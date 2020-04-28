let a = 5;
let b = "Myname";

function addTwoNumbers(x, y) { return x + y };

console.log('lastname');
console.log(addTwoNumbers(2,3));

const add = function(a,b) { return a + b };

//hoisting is when you elevate a variable or function above its scope 
function MyFunc() { 
    anotherFunc()                                       //'anotherFunc' is being hoisted
    function anotherFunc() {                            //unless this func is hoisted it will not be run when my func is run
        return console.log('Hello')
    }
}

//changing the value of an existing index
let arr = [ 1, 2, 3, 4, 5];
console.log(arr);

arr[3] = 'x';                                           //this selecting index 3 and sets its value as 'x'
console.log(arr);

//checking length of variable 
let arr1 = ['Name', 'LastName']
console.log(arr1.length)

//'in' checks if an arr has the input index
console.log(0 in arr1)                                  //arr1 has an index 0
console.log(2 in arr1)                                  //arr1 dosnt have an index 2

//setting a named sub array within an existing array 
let arr2 = []

arr2.test = 111                                         //this selects arr2 and then sets a sub array called 'test' with a number value of '111'
arr2.test2 = 'nark'                                     //this does the same but names the sub array test2 and gives it a string value
console.log(arr2)
console.log(arr2.test)

//'.slice()' returns the index's between the first parameter and the second, if there is no second parameter it will return every index after the first parameter  
console.log(arr.slice(1,4))                             //returns index 1,2,3
console.log(arr.slice(1))                               //returns index 1 and all proceding index's
console.log(arr)                                        //does not alter arr

//'.concat()' clones and adds its parameters to the end of and array
console.log(arr.concat(arr1))                           //added contents of arr1 array to the end of arr array

//'.pop()' removes and outputs the last index of an array, simmilar to cut and paste in a filemanager 
let names = ['Ali', 'Aron', 'Dale', 'Asti']       

console.log(names.pop())                                //removed 'asti' from the names array
console.log(names)

//'.push()' adds a parameter as a index to the end of an array
console.log(names.push('Jordan'))                       //pushed 'Jordan' to the end of the names array
console.log(names)

//'.forEach()' will run a function for each index of an array 
names.forEach(x => {console.log(x)})                    //run es6 function printing index to log for each index

//'.shift()' removes and outputs the first index of an array, simmilar to cut and paste in a filemanager
console.log(names.shift())                              //removed first index of names array
console.log(names)

//'.unshift()' adds a parameter as an index to the front of an array
console.log(names.unshift('Ali'))                       //added 'Ali' to front of names array
console.log(names)

//'.reverse()' flips an array eg 1,2,3 becomes 3,2,1
console.log(names.reverse())                            //flipped names array

//'.indexOf()' finds an index with the same value as the prameter and outputs the index of that element
console.log(names.indexOf('Dale'))                      //'Dale' is the second element in the names array so output index 1 

//'join()' outputs an array as a string, by default it will put a comma between the index's but you can change that by placing a string in the parameter
console.log(names.join())                               //prints names array as string with commas
console.log(names.join('-duuhhh-'))                     //prints names array as string with -duuuuuh- inbetween index's

//'.map()' runs a function for each index of an array and outputs the modified array
arr = [1.5,2.1,3.6,4.8,5.2]
console.log(arr.map(Math.round))                        //rounding each index of the arr array
console.log(arr.map(x => x * 2))                        //multiplying each index of the arr array by 2 with a es6 function 

//'.reduce()' runs each index of an array through 1 continuous function with designated arguments and has 1 output
// Accumulator      (acc)   persistant counter
// Current Value    (cur)   the value of the selected index
// Current Index    (idx)   
// Source Array     (src)   the selected array

console.log(arr)
console.log(arr.reduce((acc, cur) => acc+cur))          //this adds each index of the array to the accumulator and outputs the final value

//'splice()' allows you to insert an element into a array at a specified index with or without deleting any other index's
arr.splice(2,0,42)                                  //this inserts '42' to the arr array at index 1 without deleting other index's
console.log(arr)
arr.splice(2,1,24)                                  //this inserts '24' to the arr arrat at index 1 and removes the prior index 1
console.log(arr)
arr.splice(2,3,42)                                  //this inserts '42' to the arr array at index 1 and removes 3 index's
console.log(arr)