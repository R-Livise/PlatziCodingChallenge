function areaTriangulo(b, h) {
  return (b * h) / 2;
}

function esEquilatero(b, h) {
  //pitagoras
  let h2 = (b / 2) ** 2 + h ** 2;

  return b / 2 ** 2 == h2 * 4;
}

let base = prompt('Ingresa la base.');
let altura = prompt('Ingresa la altura.');

let isoseles = prompt('Tiene 2 lados iguales (SI/NO)');

let message = `El area de tu triangulo es ${areaTriangulo(
  base,
  altura
)} u^2 y es un `;

if (esEquilatero(base, altura)) {
  message += 'triangulo equilatero';
} else if (isoseles == 'SI') {
  message += 'triangulo isoseles';
} else {
  message += 'triangulo escaleno';
}

alert(message + '.');
