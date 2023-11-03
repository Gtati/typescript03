// Crear una clase FiguraGeometrica y subclases Triángulo, Círculo y Cuadrado. Implementar el método area() en
// cada subclase. Crear objetos y calcular sus áreas.

class FiguraGeometrica{
    base: number; 
    altura: number;
    radio:number;
    lado: number;

    constructor(base:number, altura:number){
        this.base= base;
        this.altura
    }
}

class Triangulo extends FiguraGeometrica {
  constructor(base: number, altura: number) {
    super(base, altura);
  }

  area() {
    console.log( (this.base * this.altura) / 2);
  }
}

class Circulo extends FiguraGeometrica {

    constructor(radio: number) {
    super(0, 0);
    this.radio = radio;
  }

  area() {
    console.log(Math.PI * this.radio * this.radio);
  }
}

class Cuadrado extends FiguraGeometrica {
  constructor(lado: number) {
    super(lado, lado);
  }

  area() {
    console.log(this.lado * this.lado);
  }
}

const triangulo = new Triangulo(10, 5);
const circulo = new Circulo(5);
const cuadrado = new Cuadrado(10);

