// Break & Continue

for(let i=1;i<=10;i++){
    if(i==5){
        // This will break the loop if the condition is true
        break;
    }
    console.log(i);
}

for(let i=1;i<=10;i++){
    if(i==5){
        // This will skip the loop if the condition is true
        continue;
    }
    console.log(i);
}