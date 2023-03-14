/*()
se tienen 3 notas de un aprendiz para la asigantura programación.
Nota1 = 5, Nota2 = 3 y Nota3 = 4. Se requiere saber cual es el promedio del semestre. */

// parseInt - pasa a enteros --- parseFloat - pasa string a decimales //
var Nota1 = parseFloat(prompt("digita la nota 1"))
var Nota2 = parseFloat(prompt("digita la nota 2"))
var Nota3 = parseFloat(prompt("digita la nota 3"))
var promedio = 0


promedio = (Nota1 + Nota2 + Nota3)/3
console.log("el promedio de nota es: "+ promedio)
