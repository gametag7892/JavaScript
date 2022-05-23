// toLocaleString() = retorna uma string com uma linguagem
//                    representação sensitiva do mesmo

// number.toLocaleString(locale, {options});

// 'locale' = especifica aquela linguagem (undefined = default)
// 'options'= objeto com opção de formatação

let numero = 100;

//numero = numero.toLocaleString("en-us"); // US english
//numero = numero.toLocaleString("hi-IN"); // Hindu
//numero = numero.toLocaleString("de-DE"); // Alemão

//numero = numero.toLocaleString("pt-BR",{style: "currency", currency: "BRL"})
//numero = numero.toLocaleString("hi-IN",{style: "currency", currency: "INR"})
//numero = numero.toLocaleString("de-DE",{style: "currency", currency: "EUR"})

//numero = numero.toLocaleString(undefined, {style: "percent"});
numero = numero.toLocaleString(undefined, {style: "unit", unit: "celsius"});



console.log(numero);