// Exercice 1
function compare(a, b){
    var same = true;
    Object.values(a).forEach(function(e){
        if(!Object.values(b).toString().includes(e.toString())){
            same = false;
        }
    });
    return same;
}

var 
a = {
    e11:1,
    e12:2,
    e13:"test"
},
b = {
    e21:2,
    e22:"test",
    e23:1
},
c = {
    e31:"string",
    e32:2,
    e33:1
};
console.log("a = b ? :", compare(a,b)); // true because a and b have the same propery values [1, 2, "test"]
console.log("a = c ? :", compare(a,c)); // false because a and c have not the same property values [1, 2, "test"], [1, 2, "string"]




// Exercice 2:

function difference(a, b){
    var diff = [];

    for(var el of a){
        if(b.includes(el)){
            diff.length++;
            diff[diff.length-1] = el;
        }
    }
    return diff;
}

var l1 = [1, 2, 3],
    l2 = [100, 2, 1, 10];
console.log("same element of the list l1 and l2:", difference(l1, l2)); // [1, 2]
