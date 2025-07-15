let cars = ["BMW", "Mercedez", "Audi", "Honda"];

// Valida se a variavel existe na lista(array) em questão
console.log(cars.includes("Honda"))
console.log(cars.includes("Hyundai"))

if (cars.includes("Honda")){
    console.log("Temos está marca")
} else{
    console.log("Não trabalhamos com está marca")
}