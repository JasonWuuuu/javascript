var str="hello world";
console.log("The string is:"+str)
console.log("The length is:"+str.length);
console.log("The \"hello world\".indexOf(\"world\") is:"+str.indexOf("world"));
console.log("The \"hello world\".lastIndexOf(\"rld\") is:"+str.lastIndexOf("rld"));//search from the end of the string
console.log("The \"hello world\".search(\/world\/) is:"+str.search(/orl/));//These three methods are position
console.log("The \"hello world\".slice(3,9) is:"+str.slice(3,9));//Extracting String Parts
console.log("The \"hello world\".slice(-9,-3) is:"+str.slice(3,9));//paramaters are negative ,count index form the end of the string,do not work in Internet Explorer 8 and earlier.
console.log("The \"hello world\".slice(3) is:"+str.slice(3));//omiting the second parameter, the method will slice out the rest of the string
console.log("The \"hello world\".substring(3,9) is:"+str.slice(3));//similar to slice,but the second paramater cannot be negative
console.log("The \"hello world\".substr(3,5) is:"+str.substr(3,5));// paramaters are index and length,the first paramater can be negative
var anotherStr="Good morning sir,how you doing";
console.log("The string is:"+anotherStr);
console.log("anotherStr.replace(\/\\s\/g,\"\")is:"+anotherStr.replace(/\s/g,""));//delete the blackspace
console.log("anotherStr.toLowerCase() is:"+anotherStr.toLowerCase());
console.log("anotherStr.toUpperCase() is:"+anotherStr.toUpperCase());
console.log("anotherStr.concat(str) is:"+anotherStr.concat(str));// like concat in arrays
console.log("anotherStr.charAt(0) is:"+anotherStr.charAt(0));//return the character at position 0
console.log("anotherStr.charCodeAt(0) is:"+anotherStr.charCodeAt(0));//return the unicode of the character at position 0
console.log("anotherStr.split(\" \") is an array:"+anotherStr.split(" "));//turn string into array