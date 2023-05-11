const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

function render() {
    let output = '';

    const thisMonth = months[new Date().getMonth()];
    for (let month of months) {
        const active = thisMonth == month ? 'active' : '';
        output += `<div class="mes ${active}">${month}</div>`;
    }

    return output;
}

function getValMonth(val) {
    const mesAtivo = val

    const posicaoMes = months.indexOf(mesAtivo);

    if (posicaoMes !== -1) {
        console.log(`O mês ativo é ${mesAtivo} e está na posição ${posicaoMes} do array.`);
    } else {
        console.log(`O mês ativo (${mesAtivo}) não foi encontrado no array.`);
    }
    return posicaoMes
}

window.addEventListener('load', () => {
    // Seleciona todos os elementos com a classe "mes"
    const mesElements = document.querySelectorAll('.mes');

    // Adiciona o evento de clique a cada elemento
    mesElements.forEach((mesElement) => {
        mesElement.addEventListener('click', () => {
            // Remove a classe "active" do elemento atualmente ativo, se houver algum
            const activeElement = document.querySelector('.mes.active');
            if (activeElement) {
                activeElement.classList.remove('active');
            }

            // Adiciona a classe "active" ao elemento clicado
            mesElement.classList.add('active');
            
            console.log(mesElement.textContent)

            calendarDays.querySelector('span').innerHTML = setDate(calendarMonthsAndYears.querySelector('header span').innerHTML, getValMonth(mesElement.textContent));
            calendarDays.querySelector('days').innerHTML = renderDays(year, getValMonth(mesElement.textContent) + 1)
            months[getValMonth(mesElement.textContent)]
            month = getValMonth(mesElement.textContent)
            console.log('novo ' + months[getValMonth(mesElement.textContent)], month, year,)

        });
    });

    // Chama a função render() depois de selecionar os elementos
    render();
});

var year = new Date().getFullYear()
var month = new Date().getMonth()

calendarMonthsAndYears.querySelector('months').innerHTML = render()
calendarMonthsAndYears.querySelector('header span').innerHTML = new Date().getFullYear();

const daysWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']
function renderDaysWeek() {
    let output = ''

    for (let dayWeek of daysWeek) {
        output = output + '<div class="dayWeek">' + dayWeek + '</div>'
    }

    return output
}
calendarDays.querySelector('daysWeek').innerHTML = renderDaysWeek()

function getDaysOfMonth(year, month) {
    const daysInMonth = new Date(year, month, 0).getDate();
    const firstDayOfMonth = new Date(year, month - 1, 1).getDay();
    const days = [];

    // Preenche os dias do mês anterior
    const daysInPreviousMonth = new Date(year, month - 1, 0).getDate();
    const startDay = daysInPreviousMonth - firstDayOfMonth + 1;
    for (let i = startDay; i <= daysInPreviousMonth; i++) {
        days.push({
            day: i,
            isCurrentMonth: false
        });
    }

    // Preenche os dias do mês atual
    for (let i = 1; i <= daysInMonth; i++) {
        days.push({
            day: i,
            isCurrentMonth: true
        });
    }

    // Preenche os dias do próximo mês
    const lastDayOfMonth = new Date(year, month - 1, daysInMonth).getDay();
    const daysToAdd = 6 - lastDayOfMonth;
    for (let i = 1; i <= daysToAdd; i++) {
        days.push({
            day: i,
            isCurrentMonth: false
        });
    }

    return days;
}

function getCurrentDay() {
    const today = new Date();
    const day = today.getDate();
    return day;
}

function renderDays(year, month) {
    const currentDay = getCurrentDay(year, month);

    const days = getDaysOfMonth(year, month)
    let output = ''

    for (let day of days) {
        if (day.isCurrentMonth == false) {
            output = output + '<div class="day false">' + day.day + '</div>'
        } else if (day.day == currentDay) {
            output = output + '<div class="day active">' + day.day + '</div>'
        } else {
            output = output + '<div class="day">' + day.day + '</div>'
        }

    }

    return output
}
calendarDays.querySelector('days').innerHTML = renderDays(year, month)

function renderDate(mes = 0, ano = 0) {
    month += (mes)
    year += ano

    console.log('antigo ' + months[month], month, year,)

    if (month < 0) {
        month = 11
        year -= 1
    }

    if (month >= 12) {
        month = 0
        year += 1
    }
    console.log('novo ' + months[month], month, year,)

    const date = months[month] + ' ' + (year)
    calendarDays.querySelector('days').innerHTML = renderDays(year, month + 1)
    
    return date
}

function setDate(year, month) {
    const date = months[month] + ' ' + (year)
    return date
}

calendarDays.querySelector('span').innerHTML = renderDate();

// Atualiza Ano

document.querySelector('#btnLeft').addEventListener("click", function () {
    const currentYear = parseInt(calendarMonthsAndYears.querySelector('header span').innerHTML);
    calendarMonthsAndYears.querySelector('header span').innerHTML = currentYear - 1;
    calendarDays.querySelector('span').innerHTML = renderDate(0, -1);
});

document.querySelector('#btnRight').addEventListener("click", function () {
    const currentYear = parseInt(calendarMonthsAndYears.querySelector('header span').innerHTML);
    calendarMonthsAndYears.querySelector('header span').innerHTML = currentYear + 1;
    calendarDays.querySelector('span').innerHTML = renderDate(0, 1);
});

// Atualiza Mes e Ano

document.querySelector('#btnLeftm').addEventListener("click", function () {
    calendarDays.querySelector('span').innerHTML = renderDate(-1, 0);
});

document.querySelector('#btnRightm').addEventListener("click", function () {
    calendarDays.querySelector('span').innerHTML = renderDate(1, 0);
});


//------------------------------------

