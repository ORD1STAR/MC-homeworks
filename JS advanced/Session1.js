// //spread syntax
// var arr1=[1,2,3], arr2=[4,5,6]
// var arr3 = [arr1, arr2]
// console.log(arr3);
// 
// var arr4 = [...arr1, ...arr2]
// console.log(arr4);

// var array1 = ["a", "b", "c"]
// var array1cop =//[...array1];
// array1cop[0] = "z"
// console.log(array1);
// console.log(array1cop);

// var a = ["sass", "axios", "sofiane"], a2= [...a, "habacha"], a3 = ["karim", "manel"], a4=[...a3,...a2, "SAMY"]
// console.log(a);console.log(a2);console.log(a3);console.log(a4);

// var w = ["welcome", "to", "advanced", "JS"]
// console.log(...w);

// function sum(...e){
// 
//     var s = 0;
//     for(var el of e){
//         s+=el;
//     }
//     return s;
// }
// 
// console.log(sum(2, 5, 9, 2, 5));


////////////////////////////////////////////////////////////////////////////////

// Destructive assignment

var arrr = ["amine", 19, "L2", "GTR"];
var [nom, age, lvl, maj] = arrr;
console.log(nom, lvl);


