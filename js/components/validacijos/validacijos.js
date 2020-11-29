function arPrasmingasSarasas(sarasas) {
    if (!Array.isArray(sarasas)) {
        console.error('ERROR: duotas ne array.');
        return false;
    }
    if (sarasas.length === 0) {
        console.error('ERROR: duotas array yra tuscias.');
        return false;
    }
    return true;
}

function arNormalusSkaicius(skaicius, tikrinamoObjektoPavadinimas) {
    if (typeof tikrinamoObjektoPavadinimas !== 'string') {
        console.warn('WARNING: skaiciaus tipo tikrinimui nera duotas tikrinamo objekto pavadinimas.');
        tikrinamoObjektoPavadinimas = 'reikme/objektas';
    }
    if (typeof skaicius !== 'number') {             // Ar skaiciai?
        console.error(`Error: gautas ${tikrinamoObjektoPavadinimas} nera skaiciuaus tipo.`);
        return false;
    }

    if (!isFinite(skaicius)) {                    //priciumpam belagybes ir NuN
        console.log(`Error: gautas ${tikrinamoObjektoPavadinimas} nera tikras skaicius.`);
        return false;
    }
    return true;
}


export { arPrasmingasSarasas, arNormalusSkaicius }