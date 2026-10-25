let texto = "Maracumango";
let contador = 0;

for (let i=0; i < texto.length; i++) {
    if (texto[i] === "a") {
        contador = contador + 1;
    } 
}
console.log(contador);