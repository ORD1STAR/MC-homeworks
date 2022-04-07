function crescent(list){
    list.push(-Infinity) //adds a -inf value to the end of the array
    var minIndex = 0,    //index of the first element of the longest crescent sequence
        max = 0,         //the length of the longest crescent sequence
        temp =1;         //temporary variable to store the length of the current crescent sequence
    for(var i=0; i<list.length-1; i++){
        if(list[i] < list[i+1]){ //if the element < li morah
            temp++;              //current sequence length ++
        }else{
            max = max>temp?max:temp     // replace max to the longest sequence
            minIndex = max>temp? minIndex: i-temp+1 // replace minIndex of the longest sequence
            temp = 1;   //reset the temporary variable
        }
    }
    list.pop();  //remove the -inf
    var result = [ ...list ].slice(minIndex, minIndex+max); //result = the longest crescent sequence
    result.reverse();   //reverse the longest sequence (yeah madertch ga3 l'algo mais dernah deja sahl)

    return [...list.slice(0, minIndex), ...result, ...list.slice(minIndex+max)];    // return the new array 
}
