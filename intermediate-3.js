/**
 * Constrir un array a partir de otro. 
 * 
 * Otra operación típica es ir construyendo un array mientras se recorre otro
 * 
 * Desde el juego lapalabradeldia.com nos han pedido filtrar todas las palabras que existen en el diccionario y quedarnos solo con las que tienen 5 letras.
 * 
 * Dado un array de palabras, consturye un array nuevo solamente con las palabras que contienen exactamente 5 letras.
 * 
 * Donat un array de paraules, necessito que la funció retorni un array només amb les paraules de 5 lletres
 * La variable words5Letters està inicialitzada com a un array buit. 
 * Creem un bucle for que iteri per la llargada de l'array i si troba paraula indexada amb una llargada de 5 lletres, l'afegeixi a l'array buit amb el mètode .push().
 * La funció retorna l'array resultant que està dins de la variable words5Letters
 */

function getWords5Letters(words) {
    let words5Letters = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i].length === 5) {
            words5Letters.push(words[i]);
        }
    }

    return words5Letters;
}


console.log(getWords5Letters(["mesa", "silla", "cuchara", "tenedor", "cama"]));
// ["silla"]

console.log(getWords5Letters(["perro", "gato", "loro", "pez", "ciervo"]));
// ["perro"]

console.log(getWords5Letters(["sol", "luz", "mar", "cielo", "sol"]));
// ["cielo"]

console.log(getWords5Letters(["sol", "luz", "mar", "sol"]));
// []

/**Comprovem si funciona si posem un array amb més strings de 5 paraules.*/

console.log(getWords5Letters(["solar", "lunar", "marca", "sol"]));

