function pyramidConstructionCalc(base, step){
    let ttlStoneBlcks=0, ttlMarbleBlcks=0, ttlLapisBlcks=0, ttlGoldBlcks=0, pyrmdHeight=1;

    if(base%2===0) ttlGoldBlcks=Math.ceil(4*step);
    else ttlGoldBlcks=Math.ceil(1*step);

    for(let index=base; index>1; index-=2){
        if(index%2===0 && index===2) break;

        if(pyrmdHeight%5===0){
            ttlStoneBlcks += Math.pow((index-2), 2)*step;
            ttlLapisBlcks += (index*4-4)*step; 
        }
        else{
            ttlStoneBlcks += Math.pow((index-2), 2)*step;
            ttlMarbleBlcks += (index*4-4)*step;
        }
        pyrmdHeight++;
    }
    console.log(`Stone required: ${Math.ceil(ttlStoneBlcks)}`);
    console.log(`Marble required: ${Math.ceil(ttlMarbleBlcks)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(ttlLapisBlcks)}`);
    console.log(`Gold required: ${ttlGoldBlcks}`);
    console.log(`Final pyramid height: ${Math.floor(pyrmdHeight*step)}`);
}
pyramidConstructionCalc(11,
0.75);