import { skaiciuKiekis } from '../skaiciuKiekis/skaiciuKiekis.js';

function atsPrint(skaiciuSarasas, vidurkis) {
    let kiekis = skaiciuKiekis(skaiciuSarasas);

    return `Is pateiktu ${kiekis} skaiciu, vidurkis gaunasi: ${vidurkis}.`;
}

export { atsPrint }