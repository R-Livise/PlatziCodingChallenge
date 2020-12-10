function repeatWork(work, rep) {
  if (rep === 1) return work;

  work += work;
  return repe(work, rep - 1);
}

const work = prompt('palabra');
const nrepe = prompt('veces');

alert(repe(work, nrepe));
