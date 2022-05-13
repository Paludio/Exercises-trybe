const createId = (nome) => {
    const newString = nome.replace(/ /g, '_');
    const email = `${newString}@trybe.com`;
    const object = {
        name: nome,
        email: email.toLocaleLowerCase(),
    };
    return object;
};

const newEmployees = (callback) => {
    const employees = {
      id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

const object = newEmployees(createId);
console.log(object);