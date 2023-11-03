// Crear una clase Persona con propiedades como nombre, edad, documento identidad y métodos como caminar(),
// hablar(), comer(). Crear algunos objetos Persona e interactuar con sus propiedades y métodos.

class Persona{
    nombre: string;
    edad: number;
    documentoIdentidad: number;

    constructor(nombre:string, edad:number, documentoIdentidad: number){
        this.nombre= nombre;
        this.edad= edad;
        this.documentoIdentidad= documentoIdentidad
    }


caminar(){
console.log(`Hola, me llamo ${this.nombre}, tengo ${this.edad} de edad y puedo caminar`)
}

hablar(){
    console.log(`Soy ${this.nombre} y puedo hablar`)
}
comer(){
    console.log(`Soy ${this.nombre} y puedo comer`)
}
}

const person1 = new Persona ("Camilo", 25, 1092345432)

person1.caminar();
person1.hablar();
person1.comer();