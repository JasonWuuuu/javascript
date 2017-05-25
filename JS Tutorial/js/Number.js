var a = 0.2 + 0.1;
console.log(a);//x will be 0.30000000000000004
var b = (0.2 * 10 + 0.1 * 10) / 10;//x will be 0.3
console.log(b);
var c = 255;//Hex convert
console.log("255D\n" + c.toString(16) + "H\n" + c.toString(8) + "O\n" + c.toString(2) + "B\n");
//toString()  进制转换
console.log(1 / 0);//Infinity is a number
console.log(100 / "hello");//Not a number is also a number
console.log(isNaN(100 / "hello"))// isNaN is a global function
var d = 4.345;
console.log(d);
console.log(d.toExponential());//scientific notation,pay attention!!!!
console.log(d.toFixed(2));//保留几位小数，位数小于原数字
console.log(d.toPrecision());//精确到多少位小数，位数可多于原数字
console.log( "'1234'convert to number:"+  Number("1234"));
console.log(Number(true)+";"+Number(new Date())+";"+Number("10")+";"+Number("10 20"));//Number() used on Date(),returns the ms since 1970.1.1
console.log(parseInt("hello 1234")+";"+parseInt("10")+";"+parseInt("10 20"));//convert strings into number,parseFloat is similar
console.log(parseInt("ff",16)+";"+parseInt("77",8)+";"+parseInt("1000",2));//第二个参数指明待转换数字的进制
