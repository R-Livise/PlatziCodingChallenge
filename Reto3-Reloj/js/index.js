const HORA_SEG = 3600;
const MINUTO_SEG = 60;

function equivaleSegundo(horas, minutos) {
  return horas * HORA_SEG + minutos * MINUTO_SEG;
}

const cantHoras = prompt('Agrega la cantidad de horas') || 0;
const cantMinutos = prompt('Agrega la cantidad de horas') || 0;

alert(
  `${cantHoras} hrs y ${cantMinutos} min
equivale a ${equivaleSegundo(cantHoras, cantMinutos)} seg.`
);
