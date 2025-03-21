class Coche {
  constructor(marca, modelo, año) {
      this.marca = marca;
      this.modelo = modelo;
      this.año = año;
      this.velocidad = 0; 
  }

  acelerar() {
      this.velocidad += 10;
      console.log(`El coche ha acelerado. Velocidad actual: ${this.velocidad} km/h.`);
  }

  frenar() {
      if (this.velocidad > 0) {
          this.velocidad -= 10;
      }
      console.log(`El coche ha frenado. Velocidad actual: ${this.velocidad} km/h.`);
  }

  mostrarInfo() {
      console.log(`Coche: ${this.marca} ${this.modelo}, Año: ${this.año}, Velocidad: ${this.velocidad} km/h.`);
  }
}

const miCoche = new Coche("Toyota", "Corolla", 2020);

miCoche.mostrarInfo(); 
miCoche.acelerar();    
miCoche.acelerar();   
miCoche.frenar();    
miCoche.mostrarInfo();  