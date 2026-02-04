// let a = 2551;
// let x = 3311.256255;
// console.log(x.valueOf(5));


// const str1 = "hello world"
// console.log(str1)

// const str2 = `hello ashish world`
// let uppername = str2.toUpperCase();
// console.log(uppername);

// const str3 = `HELLO ashish shrivastav` 
// let lowername = str3.toLowerCase();
// console.log(lowername);


// const str3 = `HELLO ashish shrivastav shivash`
// console.log(str3.includes("ashish"));


// const str4 = `hello ashish shrivastav delhi `
// console.log(str4.slice(0 , 9));




// const str5 = `hello ashish hey hello`;
// let greeting = str5.replace("hey","heyyyyyyy");
// console.log(greeting);



// ******************Date**********************


// Creates a Date object for right now.
// const now = new Date();
// console.log(now);


// Date.now() is a quick way to get the CURRENT timestamp as a number.
// const currenttimestamp = Date.now();
// console.log(currenttimestamp);



// const da = new Date(1769609739781);
// console.log(da);

// const mydate = new Date(2026 , 1 , 29 , 8 , 25 , 159);
// console.log(mydate.toString());

// ********* change 0 index value ***************
// const cars = ["alto" , "bmw" , "saab"];
// cars[0] = "volve";
// console.log(cars[0]);

// *********Convert array into string**********

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.toString());

// ********Join use for to join all array to string*********
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.join("*"));

// *************The pop() method removes the last element from an array:***********
// const fruits = ["Banana", "Orange", "Apple"];
// console.log(fruits.pop());


// **********AT method**********
// The at() method returns an indexed element from an array.
// The at() method returns the same as [].
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.at(3));


// *************push method************
// The push() method adds a new element to an array (at the end):
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.push("kiwi" , "grapes");
// console.log(fruits)


// ****************SHIFT METHOD******************
// The shift() method removes the first array element and "shifts" all other elements to a lower index.
// The shift() method returns the value that was "shifted out":
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.shift());



// ******************UNSHIFT METHOD***********************
// The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
// The unshift() method returns the new array length:
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.unshift("kiwi")
// console.log(fruits);



// *******************CONCAT METHOD*********************
// In programming languages, concatenation means joining strings end-to-end.

// Concatenation "snow" and "ball" gives "snowball".

// Concatenating arrays means joining arrays end-to-end.
// The concat() method creates a new array by merging (concatenating) existing arrays:

// The concat() method does not change the existing arrays. It always returns a new array.

// The concat() method can take any number of array arguments.
// const girls = ["ash", "nancy", "esha"];
// const boys = ["yash", "akash","harsh"];
// const students = [girls.concat(boys)];
// console.log(students);


const fruits = ["Banana", "Orange", "Apple", "Mango", "kiwi"];
console.log(fruits.copyWithin(4 , 0));

// console.log(fruits);
