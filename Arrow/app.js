// Función

let aprendiendo;

aprendiendo = function(){
    console.log('Aprendiendo JavaScript');
}

aprendiendo = () => {
    console.log('Aprendiendo JavaScript');
}

// Una linea no requiere llave
aprendiendo = () => console.log('Aprendiendo JavaScript');
// Retorna valor
aprendiendo = () => 'Aprendiendo JavaScript';
// Retorna objeto
aprendiendo = () => ({aprendiendo: 'Aprendiendo JavaScript'});
// Pasar parametros
aprendiendo = (tecnología) => console.log(`Aprendiendo ${tecnología}`);
// Pasando  parametro
aprendiendo = tecnología => console.log(`Aprendiendo ${tecnología}`);
// Pasando 1 parametro
aprendiendo = (tecn1, tecn2) => console.log(`Aprendiendo ${tecn1} y ${tecn2}`);

const productos = ['consolas', 'videojuegos', 'PCs'];
/*
const letrasProducto = productos.map(function(producto){
    return producto.length;
});
const letrasProducto = productos.map((producto) => {
    return producto.length;
});
console.log(letrasProducto);
*/

productos.forEach(producto => console.log(producto));

console.log