
function pascal(x){
    tab = []
    tab.length = x
    for(var l = 0; l<x; l++){
        tab[l] = []
        tab[l].length = x
    }
    for(var i = 0; i<x; i++){
        for(var j = 0; j<x; j++){
            if(j==0){           //first column always = 1
                tab[i][0] = 1
            }
            else if(i==j){      //diagonal always = 1
                tab[i][j] = 1
            }
            else if(j>i){       //right of the diagonal = 0
                tab[i][j] = 0
            }
            else{               //left of the diagonal = calculated
                tab[i][j] = tab[i-1][j-1] + tab[i-1][j]
            }
        }
    }
    return tab
}

console.log(pascal(5));