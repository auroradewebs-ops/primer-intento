//Funciones
let num = Number(prompt('Escoja un numero del 1 al 3: '));

const semaforo = function opcion (num = "no selecciono") {
    if (num < 1 || num > 3){
        console.log("Numero no valido")
    } else {
        switch (num) {
            case 1: console.log('Rojo, detente'); break;
             case 2: console.log('Amarillo, precaución'); break;
            case 3: console.log('Verde, avanza'); break;
        }

    }
};

semaforo(num);

/*
Metodos de string
los metodos de string son funciones que se pueden aplicar a cadenas de texto
Algunos de ellos son:

- length: devuelve la longitud de la cadena de texto
- toUpperCase(): devuelve la cadena de texto en mayusculas
- toLowerCase(): devuelve la cadena de texto en minusculas
- trim(): devuelve la cadena de texto sin espacios en blanco al inicio y al final
- substring(): devuelve una parte de la cadena de texto
- replace(): reemplaza una parte de la cadena de texto por otra
- split(): divide la cadena de texto en un array
- join(): une un array en una cadena de texto
*/

//Ejercio de strings
/*
1-Crea una funvcion que reciba un string y lo devuelva cuantas palabras tiene
2-Crea una funvcion que reciba un string y lo devuelva cuantas vocales tiene
3-Crea una funvcion que reciba un string y retorne el string invertido
4-Crea una funvcion que reciba un string y lo devuelva si este es un palindromo o no
*/

//1
const contarPalabras = function (cadena) {
    return cadena.trim().split(' ').length;
};

console.log(contarPalabras('hola a todos en la clase de programacion'));

//2
function contar_vocales(texto){
    contador = 0
    for (let letra of texto.toLowerCase()){
        if ("aeiou".includes(letra)){
            contador++
        }
    }
    return contador
}

console.log(contar_vocales('hola a todos en la clase de programacion'));

//3
function invertirtexto(texto){
    let palabra_invertida = '';
    for (let i = texto.length - 1; i >= 0; i--) {
        palabra_invertida += texto[i];
    }
    return palabra_invertida;
}

console.log(invertirtexto('Yo soy tu padre'));

//4
function palindromo(texto){
    let acentos = ['á', 'é', 'í', 'ó', 'ú'];
    let vocales = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < acentos.length; i++){
        texto = texto.toLowerCase().replaceAll(acentos[i], vocales[i]);
    }
    texto = texto.toLowerCase().replaceAll(' ', '').replaceAll(',', '').replaceAll('.', '');
    if (texto === invertirtexto(texto)){
        console.log('Es palindromo');
    } else {
        console.log('No es palindromo');
    }
}

//Metodos de array

/*
- length: devuelve la longitud del array
- join(): une un array en una cadena de texto
- push(): agrega un elemento al final del array
- pop(): elimina el ultimo elemento del array
- shift(): elimina el primer elemento del array
- unshift(): agrega un elemento al inicio del array
- reverse(): invierte el orden de los elementos del array
- sort(): ordena los elementos del array
- splice(): elimina elementos del array
- slice(): devuelve una parte del array
- concat(): une dos arrays
- filter(): filtra los elementos del array
- map(): crea un nuevo array con los elementos modificados
- reduce(): reduce los elementos del array a un solo valor
- every(): devuelve true si todos los elementos del array cumplen la condicion
- some(): devuelve true si alguno de los elementos del array cumplen la condicion
- find(): devuelve el primer elemento que cumple la condicion
- findIndex(): devuelve el indice del primer elemento que cumple la condicion
- includes(): devuelve true si el array contiene el elemento
- indexOf(): devuelve el indice del primer elemento que cumple la condicion
- lastIndexOf(): devuelve el indice del ultimo elemento que cumple la condicion
- forEach(): ejecuta una funcion para cada elemento del array
- reduceRight(): reduce los elementos del array a un solo valor
*/

let frutasArray = ["manzana", "banana", "pera", "kiwi", "mango"];
frutasArray.push('naranja'); //agrega naranja al final del array
frutasArray.pop(); //elimina el ultimo elemento del array y lo devuelve
frutasArray.shift(); //elimina el primer elemento del array y lo devuelve
frutasArray.unshift('fresa'); //agrega fresa al inicio del array
frutasArray.reverse(); //invierte el orden de los elementos del array
frutasArray.sort(); //ordena los elementos del array
frutasArray.splice(1, 2, 'melon'); //elimina el elemento en la posicion 1 (banana) y agrega melon en su lugar
let nuevoArray = frutasArray.slice(2, 4); //crea un nuevo array con los elementos desde la posicion 2 (3) hasta la posicion 4 (5)
frutasArray.forEach((fruta) => {
    console.log("Fruta: " + fruta); //Ejecuta una funcion para cada elemento del array
});
frutasArray.map((fruta) => {
    console.log("Fruta mapeada: " + fruta); 
})
let frutrasFiltradas = frutasArray.filter((fruta) => fruta.includes ('a')); //filtra los elementos del array que contienen la letra a
frutasArray.find((fruta) => fruta === 'banana'); //devuelve el primer elemento que cumple la condicion
console.log(frutasArray.includes('banana')); //devuelve true si el array contiene el elemento


// Arroew functions o funciones anonimas
/*Los arrow functions son una forma concisa de crear funciones anonimas en JavaScript.
se definen con la sintaxis: const nombreFuncion = (parametros) => {codigo};
*/

let suma = (num1, num2) => {
    return num1 + num2;
}

suma(2, 3); //5


//Call backs funciones que se ejecutan dentro de otras funciones

function registro (nombre, callback) {
    if (callback(nombre)){
        console.log("Se ha registrado el usuario: " + nombre);
    }; //llama a la funcion despues de registrar al usuario
}

function validarNombre (nombre) {
    if (typeof nombre !== 'string') {
        console.log("El nombre debe ser una cadena de texto");
        return false;
    } else if (nombre.length < 3) {
        console.log("El nombre debe tener al menos 3 caracteres");
        return false;
    } else if (nombre.length > 20) {
        console.log("El nombre no puede tener mas de 20 caracteres");
    }
        return true;
}

// registro("juan", validarNombre);
//validarNombre("juan"); //Esto valida el nombre y muestra mensajes de error si es necesario
//validarNombre // la funcion simplemente se pasa como argumento sin ejecutarla

/*Ejercicio

1-Crea una funcion que reciba un texto o parrafo y verifique si contiene alguna de estas malas palabras:
-"Tonto"
-"Chispas"
-"Recorcholis"
-"Rayos"
-"caracoles"
-"Cielos"

Si el texto contiene algunas de estas palabras, sustituye por "******" y retorna el texto modificado
si no contiene ninguna de estas palabras, retorna el texto sin modificar

2- Segun el siguiente array de objetos:
let personas = [
    {nombre: "juan", edad: 25, pais: "España", sexo: "masculino"},
    {nombre: "Maria", edad: 30, pais: "Mexico", sexo: "femenino"},
    {nombre: "Pedro", edad: 22, pais: "Argentina",  sexo: "masculino"},
    {nombre: "Ana", edad: 28, pais: "Chile", sexo: "femenino"},
    {nombre: "Luis", edad: 35, pais: "España", sexo: "masculino"},
];

Crea un codigo que me haga un filtro del array que contenga
solo las personas que sean mayores de 25 años.

Luego hazme un codigo que me haga un nuevo array con las personas
que sean de España y que sean de sexo masculino
*/

//Ejercicio 1

function censurarPalabras(texto) {
    let palabrasMalas = ["tonto", "chispas", "recorcholis", "rayos", "caracoles", "cielos"];
    let conteoPalabras = texto.trim().split(/\s+/).length;

    if (!texto || texto.trim().length === 0) {
        console.log("El texto es nulo o vacío");
        return null;
    } else if (conteoPalabras > 200) {
        console.log(`Error: El texto tiene ${conteoPalabras} palabras. El límite es 200.`);
        return "Texto demasiado largo";
    } else if (palabrasMalas.length === 0) {
        console.log("No hay palabras malas");
        return texto;
    } else if (palabrasMalas.length > 0) {
        for (let i = 0; i < palabrasMalas.length; i++) {
            texto = texto.toLowerCase().replaceAll(palabrasMalas[i], "******");
            }
        return texto;
    }
}

console.log(censurarPalabras("El marimo es un tonto, rayos no lo soporto, caracoles"));

//Ejercicio 2

let personas = [
    {nombre: "juan", edad: 25, pais: "España", sexo: "masculino"},
    {nombre: "Maria", edad: 30, pais: "Mexico", sexo: "femenino"},
    {nombre: "Pedro", edad: 22, pais: "Argentina",  sexo: "masculino"},
    {nombre: "Ana", edad: 28, pais: "Chile", sexo: "femenino"},
    {nombre: "Luis", edad: 35, pais: "España", sexo: "masculino"},
];

let mayores25 = personas.filter(persona => persona.edad > 25);
console.log(mayores25);

let espanolesMasculinos = personas.filter(persona => persona.pais === "España" && persona.sexo === "masculino");
console.log(espanolesMasculinos);

/*
POO Programacion Orientada a Objetos
La POO es un paradigma de programacion que se basa en la creacion de objetos que tienen propiedades y metodos.
Los objetos pueden tener propiedades (atributos) y metodos (funciones).
-Clases: Son plantillas que se pueden usar para crear objetos.
-Objetos: Son instancias de clases que tienen propiedades y metodos.
-Herencia: Es la capacidad de heredar propiedades y metodos de una clase a otra.
*/

let carro = {
    modelo: 'mustang',
    marca: 'ford',
    anio: '2013',
    kilometraje: 232000,
    encender: () => {
        console.log('Encendido');
    }
}

carro.encender();

//Las clases son moldes de objetos
class Personaje {
//constructor recibe los parametros de la clase
    constructor(nombre, vida, defensa){
    //this es un objeto que funciona en el contexto de la clase
    //al decir this.nombre, le estoy creando una propiedad nombre en el objeto this
    //debido a que this funciona en toda la clase, ahora podemos llamar a this.nombre en otras funciones si eso deseo
        this.nombre = nombre;
        this.vida = vida;
        this.defensa = defensa;
    }
     atacar () {
        console.log(`${this.nombre} ataca con su puño`);
    }
}

let luffy = new Personaje('luffy', 200, 20);
let zoro = new Personaje('zoro', 190, 15);

luffy.atacar();
zoro.atacar();

/*
Herencia
Una clase puede heredar propiedades de otra clase. Piensa en ello como una serie de conjuntos, un ser vivo tiene
ciertas propiedades, pero un gato no tiene las mismas propiedades o metodos que un humano
aunque ambos son seres vivos. Sin embargo, si comparten ciertas cosas al ser seres vivos
*/

class Tirador extends Personaje {
    constructor (nombre, vida, defensa, precision) {
        super (nombre, vida, defensa); //llanma al constructor de la clase personaje
        this.precision = precision; //Agrega una propiedad especifica de arquero
    }
    atacar_con_arco () {
        console.log(`${this.nombre} ataca con su tiradora con precision ${this.precision}`);
    }
}

let ussop = new Tirador('ussop', 200, 20, 98);
ussop.atacar();
ussop.atacar_con_arco();

/*
Crea un videojuego que tenga las siguientes clases:
-Personaje: Clase base para todos los personajes del juego.
-Guerrero: Clase que hereda de Personaje y tiene propiedades y metodos para un guerrero.
-Arquero: Clase que hereda de Personaje y tiene propiedades y metodos para un arquero.
-Mago: Clase que hereda de Personaje y tiene propiedades y metodos para un mago.

Personaje tiene las siguientes propiedades y metodos
-Nombre= Nombre de personaje
-Vida = vida del personaje
- dano = daño del personaje
-Defensa: defensa del personaje
-velocidad: velocidad del personaje
-atacar(): Metodo utilizad para atacar (con los punos)
- saludar (): Metodo utilizado para saludar indicando nombre y clase

guerro tiene las siguientes propiedades y metodos:
- array_de_armas: armas que puede usar el guerrero
- atacar_con_arma: metodo utilizado para atacar con un arma aleatoria del array de armas

mago tiene las siguientes propiedades y metodos
- array_de_hechizos: hechizos que puede usar el mago
- atacar_con_hechizo(): metodo utilizado para atacar con un hechizo aleatorio del array de hechizos

arquero tiene las siguientes propiedades y metodos:
- array_flechas: flechas que puede usar el arquero
- disparar(): metodo utilizado para disparar una flecha aleatoria del array

Debes crear al menos 5 personajes, al menos 2 deben ser guerreros, 2 magos y 1 arquero

Al iniciar el juego cada personaje debe saludar indicando su nombre y clase.

Luego habra una ronda de ataques. En cada ronda, cada personaje atacara a otro personaje de
manera aleatoria.

Cada personaje solo puede atacar un vez por ronda.

Ademas, el orden de las rondas debe ser determinado aleatoriamente pero tomando en cuenta la velocidad de cada personaje.

Para ello debes jugar con las probabilidades de que cada personaje. Por ejemplo:
- Si el personaje tiene una velocidad de 10, debes generar un numero aleatorio entre 1 y 10
-Segun el numero aleatorio generado, sera determinado el orden de ataque de cada personaje en esa ronda

Por ejemplo

Personaje 1: 5
Personaje 2: 8
Personaje 3: 2
Personaje 4: 10
Personaje 5: 6

El personaje 4 ataca primero, el personaje 2 ataca segundo, el personaje 1 ataca tercero,
el personaje 5 ataca cuarto y el personaje 3 ataca ultimo

Cuando un personaje ataque a otro, se utilizara la siguiente logica:

El personaje atacado se intentara defender, este genera un numero aleatorio entre 1 y su defensa.
Si el numero aleatorio es mayor que el dano del atacante, el ataque falla y no se le resta vida al personaje.
Si el numero aleatorio es menor o igual que el dano del atacante, el ataque es exitoso y se le resta vida al personaje.

Al momento de atacar, se debe mostrar un mensaje diciendo quien ataca a quien y si el ataque fue exitoso o fallido
Ademas hay un tercio de posibilidades de que un personaje ataque con sus punos y dos tercios de posibilidades de que
ataque con sus arma, hechizo o flecha (segun su clase)

Cuando la vida de un personaje llegue a 0, este sera eliminado del juego y no podra atacar mas.
El juego termina cuando solo quede un personaje con vida.

Es importante que cuando un personaje muera, se muestre un mensaje indicando que el personaje ha muerto y que
no puede atacar mas.
Ademas al final del juego se debe mostrar un mensaje indicando quien es el ganador.

el ganador es el personaje que queda vivo en el juego.

NOta: Es importante imprimir cada numero de ronda
Ejemplo: "Ronda 1", Ronda 2, etc

Puntos opcionales:

- Implementa un sistema de habilidades especiales para cada clase, estas habilidades solo pueden ser usadas una vez por juego.
- Implementa un inventario y objetos para cada personaje, estos objetos pueden ser usados para mejorar sus habilidades o recuperar vida, sin embargo, solo pueden ser usados una vez por juego.
estos consumiran un tuno de ataque y tienen un numero limitado de usos
- Agrega la clase "Vampiro" cuyos ataques regenera un % aleatorio de vida al personaje
- Agrega la posibilidad de 1 entre 10 de que un personaje se tropiece y no pueda hacer nada en esa ronda
*/

class Personaje {
    constructor (nombre, vida, dano, defensa, velocidad) {
        this.nombre = nombre;
        this.vida = vida;
        this.dano = dano;
        this.defensa = defensa;
        this.velocidad = velocidad;
    }

     atacar () {
        console.log(`${this.nombre} ataca con su puño`);
    }

    saludar () {
        console.log(`¡Hola, soy ${this.nombre} y soy un ${this.clase}!`);
    }
}

class Guerrero extends Personaje {
    constructor (nombre, vida, dano, defensa, velocidad) {
        super (nombre, vida, dano, defensa, velocidad);
        this.clase = 'guerrero';
    }

    atacar_con_arma () {
        let array_de_armas = ['espada', 'machete', 'hacha', 'cuchillo', 'motocierra'];
        let arma_aleatoria = array_de_armas[Math.floor(Math.random() * array_de_armas.length)];
        console.log(`${this.nombre} ataca con su ${arma_aleatoria}`);
    }

}

class Mago extends Personaje {
    constructor (nombre, vida, dano, defensa, velocidad) {
        super (nombre, vida, dano, defensa, velocidad);
        this.clase = 'mago';
    }

    atacar_con_hechizo () {
        let array_de_hechizos = ['Congelar', 'Envenenar', 'Inmovilizar', 'Paralizar', 'Ralentizar'];
        let hechizo_aleatorio = array_de_hechizos[Math.floor(Math.random() * array_de_hechizos.length)];
        console.log(`${this.nombre} ataca con su ${hechizo_aleatorio}`);
    }
}

class Arquero extends Personaje {
    constructor (nombre, vida, dano, defensa, velocidad) {
        super (nombre, vida, dano, defensa, velocidad);
        this.clase = 'arquero';
    }

    atacar_con_flecha () {
        let array_de_flechas = ['flecha1', 'flecha2', 'flecha3', 'flecha4', 'flecha5'];
        let flecha_aleatoria = array_de_flechas[Math.floor(Math.random() * array_de_flechas.length)];
        console.log(`${this.nombre} ataca con su ${flecha_aleatoria}`);
    }

}

let personajes = [
    new Guerrero('Goku', 1000, 90, 50, 99),
    new Guerrero('Gohan', 1000, 80, 50, 87),
    new Mago('Babidi', 1000, 50, 80, 60),
    new Mago('Piccolo', 1000, 50, 60, 89),
    new Arquero('Krilin', 1000, 70, 50, 78)
]

function peleas(personajes) {
    personajes.forEach(p => p.saludar());
    let numeroRonda = 1;

    while (personajes.length > 1) {
        console.log(`\n=== RONDA ${numeroRonda} ===`);

        let ordenTurnos = personajes.map(p => ({
            personaje: p,
            prioridad: Math.floor(Math.random() * p.velocidad) + 1
        }));

        ordenTurnos.sort((primero, segundo) => segundo.prioridad - primero.prioridad);

        for (let i = 0; i < ordenTurnos.length; i++) {
            let atacante = ordenTurnos[i].personaje;
            if (atacante.vida <= 0) continue;

            let posiblesObjetivos = personajes.filter(p => p !== atacante && p.vida > 0);
            if (posiblesObjetivos.length === 0) break;

            let objetivo = posiblesObjetivos[Math.floor(Math.random() * posiblesObjetivos.length)];

            // --- LÓGICA DE PROBABILIDAD DE ATAQUE ---
            let probabilidadAtaque = Math.random();
            console.log(`\n[TURNO] ${atacante.nombre} ataca a ${objetivo.nombre}`);

            if (probabilidadAtaque < 1/3) {
                // 1/3 de posibilidades: Ataque con puños (Clase base)
                atacante.atacar();
            } else {
                // 2/3 de posibilidades: Ataque especial según clase
                if (atacante instanceof Guerrero) atacante.atacar_con_arma();
                else if (atacante instanceof Mago) atacante.atacar_con_hechizo();
                else if (atacante instanceof Arquero) atacante.atacar_con_flecha();
            }

            // --- CÁLCULO DE ÉXITO O FALLO ---
            let defensa_random = Math.floor(Math.random() * objetivo.defensa);
            let danoFinal = atacante.dano - defensa_random;

            if (danoFinal > 0) {
                // ATAQUE EXITOSO
                objetivo.vida -= danoFinal;
                console.log(`¡ATAQUE EXITOSO! ${objetivo.nombre} recibió ${danoFinal} de daño. (Vida: ${Math.max(0, objetivo.vida)})`);
            } else {
                // ATAQUE FALLIDO
                console.log(`¡ATAQUE FALLIDO! La defensa de ${objetivo.nombre} fue impenetrable.`);
            }

            if (objetivo.vida <= 0) {
                console.log(`¡ ${objetivo.nombre.toUpperCase()} HA MUERTO!`);
                personajes = personajes.filter(p => p.vida > 0);
                if (personajes.length <= 1) break;
            }
        }
        numeroRonda++;
    }

    console.log("\n***********************************");
    console.log(`¡EL GANADOR DEFINITIVO ES: ${personajes[0].nombre.toUpperCase()}!`);
    console.log("***********************************");
}

peleas(personajes);