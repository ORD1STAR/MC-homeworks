var list = [-3, 8, 7, 6, 5, -4, 3, 2, 1 ], 
    x;

for(var i = 0; i<list.length; i++)
{
    for(var j = i; j<list.length; j++)
    { 
        if(list[i]>list[j])
        { 
            x=list[i]; 
            list[i]=list[j];
            list[j]=x;
        }
    }
}

console.log(list);