let prim = 17;
let div = 0;

for (let i = 1; i <= prim; i++){
    if(prim % i == 0){
       div++; 
    }
}
if(div == 2){
    console.log(prim, "é primo");
} else {
    console.log(prim, "não é primo");
}