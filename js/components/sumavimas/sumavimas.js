import { arPrasmingasSarasas, arNormalusSkaicius } from '../validacijos/validacijos.js';

function sarasoSuma(skaiciuSarasas) {       //kad atliktu funkcija reikalingas yra skaiciuSarasas
    if (!arPrasmingasSarasas(skaiciuSarasas)) {
        return false;
    }

    let suma = 0;

    for (let i = 0; i < skaiciuSarasas.length; i++) {
        const skaicius = skaiciuSarasas[i];

        if (!arNormalusSkaicius(skaicius)) {          //ar tai yra skaicius?
            console.warn('WARNING: skaiciu sarase rasta ne skaiciaus tipo reiksme');
            continue;
        }

        suma += skaicius;
    }
    if (!arNormalusSkaicius(suma, 'sumos rezultatas')) {
        return false;
    }

    return suma;
}

export { sarasoSuma }