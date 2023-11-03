// Crear una clase Película con propiedades como título, duración y director. Crear clase CatalogoPeliculas para
// almacenar películas en una lista. Agregar búsqueda por título y filtrado por director. Probar con un catálogo de
// películas

class Pelicula{
    titulo:string;
    duracion:number;
    director: string;

    constructor(titulo:string, duracion: number, director:string){
        this.titulo=titulo;
        this.duracion=duracion;
        this.director=director;
    }
}
class CatalogoPeliculas {
    public peliculas: Pelicula[];
  
    constructor() {
      this.peliculas = [];
    }
  
    agregarPelicula(pelicula: Pelicula) {
      this.peliculas.push(pelicula);
    }
  
    buscarPorTitulo(titulo: string) {
      return this.peliculas.filter((pelicula) => pelicula.titulo === titulo);
    }
  
    filtrarPorDirector(director: string) {
      return this.peliculas.filter((pelicula) => pelicula.director === director);
    }
  }
  
  // Prueba con un catálogo de películas
  
  const catalogoPeliculas = new CatalogoPeliculas();
  
  catalogoPeliculas.agregarPelicula(new Pelicula("El padrino", 175, "Francis Ford Coppola"));
  catalogoPeliculas.agregarPelicula(new Pelicula("El señor de los anillos: La comunidad del anillo", 178, "Peter Jackson"));
  catalogoPeliculas.agregarPelicula(new Pelicula("Pulp Fiction", 154, "Quentin Tarantino"));
  
  // Buscar películas por título
  const peliculasEncontradas = catalogoPeliculas.buscarPorTitulo("El padrino");
  console.log(peliculasEncontradas); // [Pelicula { titulo: "El padrino", duracion: 175, director: "Francis Ford Coppola" }]
  
  // Filtrar películas por director
  const peliculasDeTarantino = catalogoPeliculas.filtrarPorDirector("Quentin Tarantino");
  console.log(peliculasDeTarantino); // [Pelicula { titulo: "Pulp Fiction", duracion: 154, director: "Quentin Tarantino" }]