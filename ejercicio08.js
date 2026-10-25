let contador = 0;

for (let i=1; i<=50; i++) {
    let par = i % 2;
    if (par === 0) {
        contador = contador + 1;
    }
}
console.log(contador);