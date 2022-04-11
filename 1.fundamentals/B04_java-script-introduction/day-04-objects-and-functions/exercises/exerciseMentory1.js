function areaPerimetro (base, altura){
    let quadrilatero = {
        area: base * altura,
        perimetro: (base * 2) + (altura * 2),
    }

    return quadrilatero;
}

console.log(areaPerimetro(2, 8));
