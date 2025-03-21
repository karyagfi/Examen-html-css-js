const usuario = { 
  nombre: "Carlos", 
  edad: 30, 
  pais: "México", 
  habilidades: ["JavaScript", "CSS", "HTML"] 
  };

const { nombre, edad, pais } = usuario;
const {nombre: name, edad: age, pais: country} = usuario;
console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("País:", pais);

const {js,  html} = usuario.habilidades;
console.log("JS:", js);
console.log("HTML:", html);
console.log("CSS:", css);