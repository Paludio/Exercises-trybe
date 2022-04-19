function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  
  
  // Escreva seu código abaixo.

function criarDiasDoMês() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    let diasDaSemana = document.getElementById('days');

    for (let index = 0; index< dezDaysList.length; index += 1) {
        let dias = dezDaysList[index];
        let listaDias = document.createElement('li');

        if (dias === 24 || dias === 31) {
            listaDias.className = 'day holiday';
            listaDias.innerText = dias;
        } else if (dias === 4 || dias === 11 || dias === 18) {
            listaDias.className = 'day friday';
            listaDias.innerText = dias;
        } else if (dias === 25) {
            listaDias.className = 'day holiday friday'
        } else {
            listaDias.className = 'day';
            listaDias.innerText = dias;
        }

        diasDaSemana.appendChild(listaDias);
    }
  }

function criaBotao (feriados) {
    const pai = document.querySelector('.buttons-container');

    let filhoBotao = document.createElement('button');
    filhoBotao.setAttribute('id', 'btn-holiday');
    filhoBotao.innerText = feriados;

    pai.appendChild(filhoBotao)
}



  createDaysOfTheWeek();
  criarDiasDoMês();
  criaBotao('feriados');