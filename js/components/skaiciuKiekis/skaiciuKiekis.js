import { arPrasmingasSarasas, arNormalusSkaicius } from '../validacijos/validacijos.js';

function skaiciuKiekis(skaiciuSarasas) {
    if (!arPrasmingasSarasas(skaiciuSarasas)) {
        return false;
    }

    let kiekis = 0;

    for (let i = 0; i < skaiciuSarasas.length; i++) {
        const skaicius = skaiciuSarasas[i];
        if (arNormalusSkaicius(skaicius, 'skaicius')) {
            kiekis++;
        }
    }

    if (!arNormalusSkaicius(kiekis, 'kiekio rezultatas')) {
        return false;
    }

    return kiekis;
}

export { skaiciuKiekis }