function removeElement(array, element){ // remove element from array
    for(var i=0; i<array.length; i++){  //parcourir la liste
        if(array[i]==element){ 
            for(var j=i; j<(array.length-1); j++) array[j] = array[j+1] //decalage
            array.length--; 
        }
    }
}
function removeIndex(array, index){ // remove index from array
    for(var i=0; i<array.length; i++){  //parcourir la liste
        if(i == index){ 
            for(var j=i; j<(array.length-1); j++) array[j] = array[j+1] //decalage
            array.length--; 
        }
    }
}
function sortArray(array){ //sort array
    var x;
    for(var i = 0; i<array.length; i++){
        for(var j = i; j<array.length; j++){ 
            if(array[i]>array[j]){ 
                x=array[i]; 
                array[i]=array[j];
                array[j]=x;
            }
        }
    }
}
function removeDuplicates(array){ // remove duplicates from array
    var ancien = null;
    for(var i=0; i<array.length; i++){
        if(ancien == array[i]) removeIndex(array, i);
        ancien = array[i];
    }
}


console.log("Remove the element 4 from the array");
    //                    |
liste = [1, 2, 3, "test", 4, "element"];
console.log(liste);  // [ 1, 2, 3, 'test', 4, 'element' ]
removeElement(liste, 4);
console.log(liste);  // [ 1, 2, 3, 'test', 'element' ]
console.log("\n");


console.log("Remove the 3rd from the array");
     //  |0| 1| 2 |   3  | 4 |     5   |
liste2 = [1, 2, 3, "test", 4, "element"];
console.log(liste2);  // [ 1, 2, 3, 'test', 4, 'element' ]
removeIndex(liste2, 2);
console.log(liste2);  // [ 1, 2, 'test', 4, 'element' ]
console.log("\n");

console.log("Remove supplicated elements");
liste3 = [-3, 8, 2, 7, 6, -3, 5, -4, 3, 2, 1, 7];
sortArray(liste3);
console.log(liste3);  // [ -4, -3, -3, 1, 2, 2, 3, 5, 6, 7, 7,  8 ]
removeDuplicates(liste3);
console.log(liste3);  // [ -4, -3, 1, 2, 3, 5, 6, 7, 8 ]
