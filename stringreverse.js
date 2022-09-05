function reverseString(str) {

    // empty string
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

// take input from the user


const result = reverseString("hello");
console.log(result);




function reverseString(str) {

    // return a new array of strings
    const arrayStrings = str.split("");
   
    // // reverse the new created array elements
    // const reverseArray = arrayStrings.reverse();
 
    // // join all elements of the array into a string
    // const joinArray = reverseArray.join("");
    
    // // return the reversed string
    return arrayStrings;
}
 
// take input from the user


const result1 = reverseString("SultanZ");
console.log(result1);