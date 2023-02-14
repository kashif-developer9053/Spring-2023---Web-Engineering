    function rationumber(nmb){
    
    let positiveCount= 0;
    let negativeCount= 0;
    let zeroCount=0;

    for ( i=0; i< nmb.length; i ++){
        if (nmb[i]==0)
        zeroCount++;
    
    else if (nmb[i]<0)
    negativeCount++;

else (nmb[i]>0)
    positiveCount++;
    }

return{
    zeroCount: (zeroCount/nmb.length).toFixed(6),
    negativeCount: (negativeCount/nmb.length).toFixed(6),
    positiveCount: (positiveCount/nmb.length).toFixed(6)
};


}
    const nmb=[1,5,-6,0,-1,0,7,8];
    let ratio=rationumber(nmb);
    console.log(ratio);
//output will be  zerocount:'0.250000', negativecount:'0.250000', positivecount:'1.000000'
 



   
   