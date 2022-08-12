// 1.
const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log(maxOfTwoNumbers(3, 9));
  
  //2.

  const maxOfThree = (x, y, z) => {
    if(x > y && x > z) {
        return x
  }
    else if(y > x && y > z) {
        return y
    }
    else {
        return z
}
  }
  console.log(maxOfThree(3, 7, 6))

  //3.

const isCharAVowel = (x) => {
    if (x === "a" || x === "e" || x === "i" ||  x === "o" ||  x === "u"){
        return "true"
}
    else {
        return "false"
    }
}
 console.log(isCharAVowel("o"))

//4.
 
const sumArray = (workArray) => {
    let sum = 0
    for (let i = 0; i < workArray.length; i+=1){
        sum += workArray[i]
}
return sum
}
console.log(sumArray(2,4,5))

//5.Define a function, as a function declaration, multiplyArraythat takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]);would return 40

const multiplyArray = (work1Array) => {
    let multiply = 1
    for (let i = 0; i < work1Array.length; i+=1){
        multiply =multiply*work1Array[i]
}
return multiply
}
console.log(multiplyArray([2,4,5]))

//6. Define a function, as a function expression, numArgsthat returns the number of arguments passed to the function when called.

const numArgs = (x, y) => {
    return numArgs.length
}
console.log(numArgs(""))
7. Define a function, as a function declaration, reverseStringthat takes a string, reverses the characters, and returns it. For example, reverseString('rockstar');would return the string "ratskcor".
const reverseString = (wordString) => {
return wordString.split('').reverse().join('')

}
console.log(reverseString("rockstar"))

//8.Define a function, as a function expression, longestStringInArraythat takes an array of strings as an argument and returns the length of the longest string.
const longestStringInArray = (stringArray) => {
    let longWord = ""
    for (let i = 0; i < stringArray.length; i++){
       let actualWord = stringArray[i] 
        if (actualWord.length > longWord.length){
          longWord = stringArray[i]  
             }
        }
    return longWord.length
    }
    



//9.Define a function, as a function declaration, stringsLongerThanthat takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);would return ["hello", "morning"].
const stringsLongerThan = (stringArray, x) => {
        let longWord = ""
        for (let i = 0; i < stringArray.length; i++){
           let actualWord = stringArray[i] 
            if (actualWord.length > stringArray.length){
             let longWord = stringArray  
                 }
           return actualWord[i]}
         
}
console.log(longestStringInArray(["junior","so long problem", "su", 3]))