function matrix(matrice){
    lignes = matrice.length;         //nombre de lignes
    colonnes = matrice[0].length;    //nombre de colonnes
    max = -Infinity;                 //nombre max (initialiser a -inf pour les tests)
    min =  Infinity;                 //nombre min (initialiser a +inf pour les tests)
    indiceMax = 0;                   //indice de la colonne max
    indiceMin = 0;                   //indice de la colonne min
    for(i=0;i<colonnes;i++){         //parcourir les colonnes
        temp = 0                     //variable temporaire
        for(j=0; j<lignes;j++){      //parcourir les lignes
            temp+= matrice[j][i];    //somme des colonnes
        }
        if(temp>max){                //si la somme est plus grande que max
            max = temp;
            indiceMax = i;
        }                           //on met a jour max et indiceMax
        else if(temp<min){               //si la somme est plus petite que min
            min = temp;             
            indiceMin = i
        }                           //on met a jour min et indiceMin
    }
    for(l=0;l<lignes;l++){          //parcourir les lignes
        x = matrice[l][indiceMax];      
        matrice[l][indiceMax] = matrice[l][indiceMin];  //permutation entre les colonnes
        matrice[l][indiceMin] = x;
    }
    return matrice;
}