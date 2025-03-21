const persona = {
  nombre: "Ana",
  edad: 25,
  profesion: "ingeniera",
  saludar: function () {
    console.log(`Hola, mi nombre es ${this.nombre} y soy ${this.profesion}`);
  },
};

persona.saludar();

const persona2 = {
  nombre: "Carlos",
  edad: 30,
  profesion: "médico",
  saludar: function () {
    console.log(`Hola, mi nombre es ${this.nombre} y soy ${this.profesion}`);
  },
};

persona2.saludar();