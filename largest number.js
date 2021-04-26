/* write a small web app that does the following:
    - defines an array of 20 number (positive, negative and zeros) and displayes the largest number.
    - you can define the array directly in the code and fill it with 20 numbers. (i.e. no need for user input)
    - the result should look like this: "The largest number is (the number)".*/
   const numbers = [1, 80, -8, 4,90,20,7,-7,9,100,11,12,13,-30,15,16,-88,18,19,9];
const largestNumber = (values)=>{
    let highest = 0;
    for (
     let i=0; i<values.length; i+=1) {
     if (values [i] > highest){
         highest = values[i];
     }
}
  return highest;
} 
alert(largestNumber(numbers));
