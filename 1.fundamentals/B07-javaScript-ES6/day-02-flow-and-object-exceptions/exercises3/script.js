const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};

const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

function adiciona (turno) {
    turno.turno = 'noite';
}

function lista (objeto) {
    console.log(Object.keys(objeto));
}

function tamanho (objeto) {
    let count = 0;
    for (const {} in objeto) {
        count += 1;
    }

    return count;
}

function valores (objeto) {
    console.log(Object.values(objeto));
}

// adiciona(lesson1);
// lista(lesson2);
// console.log(tamanho(lesson3));
// valores(lesson3);
console.log(allLessons);
