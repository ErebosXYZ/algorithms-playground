/**
 * Implementa una función parecida al ejercicio basic-2.
 * 
 * MAyoria de edad en España: 18 o más
 * MAyoria de edad en EEUU: 21 o más
 * 
 * Ahora todos los datos están en el objeto person
 * Además, usa el valor que retorna la función para escribir un mensaje diciendo si dicha persona es mayor de edad en el su pais o no
 */

function isAdultInCountryWithObject(person) {
    if (person.age >= 18 && person.country === "España") {
        let adultSpain = `${person.name} is an adult in Spain`
        return adultSpain;
    } if (person.age >= 21 && person.country === "EEUU") {
        let adultEeuu = `${person.name} is an adult in USA`
        return adultEeuu;
    }
    let notAdult = `${person.name} is not an adult in their country`;
    return notAdult;
}

let isCarlosAdult = isAdultInCountryWithObject({ name: "Carlos", age: 17, country: "España" });

/**
 * Usa un if...else para evaluar la variable isCarlosAdult, y mostrar un mensaje por consola, de este estilo:
 * "Carlos es(o no) adulto en España"
 */
console.log(isCarlosAdult);


let isJohnAdult = isAdultInCountryWithObject({ name: "John", age: 21, country: "EEUU" });

console.log(isJohnAdult);

/**
 * Usa un if...else para evaluar la variable isJohnAdult, un mensaje por consola, de este estilo:
 * "John es(o no) adulto en EEUU"
 */