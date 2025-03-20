/**
 * Buscar algo en un array.
 * 
 * Otro caso típico es buscar un elemento o condición en un array.
 * 
 * El Hospital Clínic quiere elaborar un software que detecta la subcadena de bases nitrogenadas responsables del Alzeihmer. 
 * 
 * Dado un array de secuencias genéticas en formato string del paciente, el algoritmo debe devolver true si algunas de las secuencias geneticas del paciente contiene la subcadena ATCGGCTA , indicando que es propenso a la enfermedad del Alzheimer y tiene que a ser monitorizado  
 * 
 * Pista: La funcion 'includes' de JavaScript te puede ayudar a encontrar una cadena de texto
 */

/** S'ha de buscar si l'array de strings sequences inclou la substring "ATCGGCTA"
 * some() ejecuta la función callback una vez por cada elemento presente en el array hasta que encuentre uno donde callback retorna un valor verdadero (true). Si se encuentra dicho elemento, some() retorna true inmediatamente. Si no, some() retorna false. callback es invocada sólo para los índices del array que tienen valores asignados; no es invocada para índices que han sido borrados o a los que nunca se les han asignado valores.
 * includes() retorna true o false depenent si cada element de l'array inclou el string "ATCGGCTA". 
 * some() recorre l'array i retorna true si includes() ha retornat true com a mínim a un dels elements de l'array
 * 
 */

function checkDNAForAlzheimer(sequences) {
    return sequences.some(function(sequence) {
        return sequence.includes("ATCGGCTA");
    });
}
console.log(checkDNAForAlzheimer([
    "GGTACCATCGGCTACATC",
    "ATCGGCTAGGTACC",
    "TCGAGGCTA",
    "AGCTAGCTAG",
    "GGCTATCG"
]));
// true, se espera true porque la segunda y tercera secuencia contienen "ATCGGCTA"

console.log(checkDNAForAlzheimer([
    "ATCGGCTAAGGTC",
    "GGTAGCTA",
    "CTAGCTAGC",
    "TACGGGCTAT",
    "GCTACTGAC"
]));
// true, se espera true porque la primera secuencia contiene "ATCGGCTA"

console.log(checkDNAForAlzheimer([
    "GCTATCGG",
    "AGCTAGCTA",
    "TACGACTA",
    "AGGTACCATCG",
    "GGCTATACG"
]));
// false, se espera false porque ninguna secuencia contiene "ATCGGCTA"
