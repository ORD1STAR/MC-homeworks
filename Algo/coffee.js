function coff(pay){
    sarf = {khams: 0, achr:0, achrin:0}
    temp = 0
    for(var p of pay){ 
        if(p == 50){ 
            sarf.khams += 1
        }
        if(p > 50){
            temp = p-50
            if(temp==150){
                if(sarf.khams<1 || sarf.achr<1){
                    if(sarf.khams<3){
                        return false;
                    }else{
                        sarf.khams -= 3
                        sarf.achrin += 1
                    }
                }else{
                    sarf.achr -= 1
                    sarf.khams -= 1
                    sarf.achrin += 1
                }
                
            }
            if(temp==50){
                if(sarf.khams<1){
                    return false;
                }
                sarf.khams -= 1
                sarf.achr += 1
            
            }
        }
    }
    return true
}

console.log(coff([50, 50, 50, 200]));