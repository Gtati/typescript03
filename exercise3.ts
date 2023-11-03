// Crear una clase Vehículo con subclases Coche, Barco y Avión. Cada subclase implementa su propio método
// desplazarse (). Crear objetos de las subclases y probar sus métodos.

class Vehiculo{
    marca:string;
    modelo:string;

    constructor(marca:string, modelo:string){
        this.marca=marca;
        this.modelo=modelo
    }
}

class Coche extends Vehiculo{
    NumeroAsientos: number;

    constructor(marca:string, modelo:string, NumeroAsientos:number){
        super(marca,modelo);
        this.NumeroAsientos= NumeroAsientos
    }
    desplazarse(){
        console.log(`El ${this.marca} puede desplazarse`)
    }
}
class Barco extends Vehiculo{
    slora: number;

    constructor(marca:string, modelo:string, slora:number){
        super(marca,modelo);
        this.slora= slora
    }
    desplazarse(){
        console.log(`El barco esta navegando en el mar`)
    }
}
class Avion extends Vehiculo{
    Capacidad: number;

    constructor(marca:string, modelo:string, Capacidad:number){
        super(marca,modelo);
        this.Capacidad=Capacidad
    }
    desplazarse(){
        console.log(`El avion esta desplazandose en el cielo`)
    }

}
const coche = new Coche("Volkswagen", "Golf", 5);
const barco = new Barco("Astilleros Españoles", "Barcos del Norte", 100);
const avion = new Avion("Airbus", "A380", 500);
coche.desplazarse(); 
barco.desplazarse(); 
avion.desplazarse(); 
