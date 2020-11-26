import { arPrasmingasSarasas, arNormalusSkaicius } from '../validacijos/validacijos.js';

function skaiciuKiekis(skaiciuSarasas) {
    if (!arPrasmingasSarasas(skaiciuSarasas)) {
        return false;
    }

    let kiekis = 0;

    for (let i = 0; i < skaiciuSarasas.length; i++) {
        const skaicius = skaiciuSarasas[i];
        if (typeof skaicius !== 'number') {
            continue;
        }
        kiekis++;
    }

    if (typeof kiekis !== 'number') {             // Ar skaiciai?
        console.error('Error: gautas kiekio rezultatas nera skaiciaus tipo.');
        return false;
    }

    if (!isFinite(kiekis)) {                    //priciumpam belagybes ir NuN
        console.log('Error: gautas kiekio rezultatas nera tikras skaicius.');
        return false;
    }
    if (!arNormalusSkaicius(kiekis, 'kiekio rezultatas')) {
        return false;
    }

    return kiekis;
}

export { skaiciuKiekis }