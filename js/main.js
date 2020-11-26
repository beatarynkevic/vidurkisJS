import { skaiciai } from './data/skaiciai.js';
import { vidurkis } from './components/vidurkis.js';

const ats = vidurkis(skaiciai);

// Is pateiktu
console.log(`Is pateiktu ${skaiciai.length} skaiciu, vidurkis gaunasi: ${ats}.`);

