function U(n){
    if(n>=0){
        if(n<=2){
            return n;
        }
        return 2*U(n-1)+3*U(n-3);
    }
}