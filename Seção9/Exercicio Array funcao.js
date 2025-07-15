let num = [1,2,3];
let num2 = [1,2,3,4,5,6,7,8,9];

    function validaArray(arr){
        if(arr.length >= 5) {
            console.log("Muitos Itens");            
        }else {
            console.log("Poucos Itens");            
        }
    }

validaArray(num);
validaArray(num2);