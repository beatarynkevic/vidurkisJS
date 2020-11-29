import { skaiciai } from './data/skaiciai.js';
import { vidurkis } from './components/vidurkis/vidurkis.js';
import { skaiciai2 } from './data/skaiciai2.js';
// import { atsPrint } from './components/atsPrint.js';

const ats = vidurkis(skaiciai);
const ats2 = vidurkis(skaiciai2);


// Is pateiktu
const atsString = `Is pateiktu ${skaiciai.length} skaiciu, vidurkis gaunasi: ${ats}.`;
const ats2String = `is pateiktu ${skaiciai2.length} skaiciu, vidurkis gaunasi ${ats2}`;

console.log(ats2String);


const rez1DOM = document.querySelector('#rez1');
console.log(rez1DOM);

rez1DOM.innerText = atsString;