import { sarasoSuma } from '../sumavimas/sumavimas.js';
import { skaiciuKiekis } from '../skaiciuKiekis/skaiciuKiekis.js';
import { arPrasmingasSarasas, arNormalusSkaicius } from '../validacijos/validacijos.js';

function vidurkis(skaiciuSarasas) {
    if (!arPrasmingasSarasas(skaiciuSarasas)) {  //input validation - patikrinimas
        return false;
    }

    const suma = sarasoSuma(skaiciuSarasas);
    const kiekis = skaiciuKiekis(skaiciuSarasas);

    const vid = suma / kiekis;

    if (typeof vid !== 'number') {             // Ar skaiciai?
        console.error('Error: gautas vidurkio rezultatas nera skaiciaus tipo.');
        return false;
    }

    if (!isFinite(vid)) {                    //priciumpam belagybes ir NuN
        console.log('Error: gautas vidurkio rezultatas nera tikras skaicius.');
        return false;
    }
    if (!arNormalusSkaicius(vid, 'vidurkio rezultatas')) {
        return false;
    }

    return vid;
}

export { vidurkis }