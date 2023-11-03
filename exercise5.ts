// Crear una clase Electrodoméstico con subclases Televisor, Nevera y Lavadora. Cada electrodoméstico tiene
// propiedades como precio y color. Crear algunos objetos y probar.
class Electrodomestico {
    public precio: number;
    public color: string;
  
    constructor(precio: number, color: string) {
      this.precio = precio;
      this.color = color;
    }
  }
  
  class Televisor extends Electrodomestico {
    public pulgadas: number;
  
    constructor(precio: number, color: string, pulgadas: number) {
      super(precio, color);
      this.pulgadas = pulgadas;
    }
  }
  
  class Nevera extends Electrodomestico {
    public capacidad: number;
  
    constructor(precio: number, color: string, capacidad: number) {
      super(precio, color);
      this.capacidad = capacidad;
    }
  }
  
  class Lavadora extends Electrodomestico {
    public carga: number;
  
    constructor(precio: number, color: string, carga: number) {
      super(precio, color);
      this.carga = carga;
    }
  }
  const televisor = new Televisor(1000, "blanco", 50);
  const nevera = new Nevera(2000, "negro", 300);
  const lavadora = new Lavadora(3000, "gris", 8);
  console.log(televisor.precio); // 1000
  console.log(televisor.color); // blanco
  console.log(televisor.pulgadas); // 50
  
  console.log(nevera.precio); // 2000
  console.log(nevera.color); // negro
  console.log(nevera.capacidad); // 300
  
  console.log(lavadora.precio); // 3000
  console.log(lavadora.color); // gris
  console.log(lavadora.carga); // 8
      