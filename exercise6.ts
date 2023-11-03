// Crear una clase Hotel con propiedades como nombre y ubicación. Crear clase Habitación con número de
// habitación, precio y estado. Agregar métodos para reservar y liberar habitación. Probar con algunos hoteles e
// interacciones.

class Hotel {
    public nombre: string;
    public ubicacion: string;
    private habitaciones: Habitacion[];
  
    constructor(nombre: string, ubicacion: string) {
      this.nombre = nombre;
      this.ubicacion = ubicacion;
      this.habitaciones = [];
    }
  
    agregarHabitacion(habitacion: Habitacion) {
      this.habitaciones.push(habitacion);
    }
  
    reservarHabitacion(numero: number) {
      for (const habitacion of this.habitaciones) {
        if (habitacion.numero === numero && habitacion.estado === "disponible") {
          habitacion.reservar();
          return habitacion;
        }
      }
  
      return null;
    }
  
    liberarHabitacion(numero: number) {
      for (const habitacion of this.habitaciones) {
        if (habitacion.numero === numero) {
          habitacion.liberar();
          return habitacion;
        }
      }
  
      return null;
    }
  }
  
  class Habitacion {
    public numero: number;
    public precio: number;
    public estado: string;
  
    constructor(numero: number, precio: number, estado: string) {
      this.numero = numero;
      this.precio = precio;
      this.estado = estado;
    }
  
    reservar() {
      this.estado = "reservada";
    }
  
    liberar() {
      this.estado = "disponible";
    }
  }
  
  
  const hotel1 = new Hotel("Hotel El Bosque", "Bogotá");
  const hotel2 = new Hotel("Hotel Las Vegas", "Medellín");
  
  hotel1.agregarHabitacion(new Habitacion(101, 100000, "disponible"));
  hotel1.agregarHabitacion(new Habitacion(102, 200000, "disponible"));
  hotel1.agregarHabitacion(new Habitacion(103, 300000, "disponible"));
  
  hotel2.agregarHabitacion(new Habitacion(201, 150000, "disponible"));
  hotel2.agregarHabitacion(new Habitacion(202, 250000, "disponible"));
  hotel2.agregarHabitacion(new Habitacion(203, 350000, "disponible"));
  

  const habitacion1 = hotel1.reservarHabitacion(101);
  console.log(habitacion1); 
  

  const habitacion2 = hotel2.liberarHabitacion(202);
  console.log(habitacion2); 
  