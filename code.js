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

            app2.querySelector('span').innerHTML = setDate(app.querySelector('header span').innerHTML, );

        });
    });

    // Chama a função render() depois de selecionar os elementos
    render();
});

var year = new Date().getFullYear()
var month = new Date().getMonth()

app.querySelector('months').innerHTML = render()
app.querySelector('header span').innerHTML = new Date().getFullYear();

const daysWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']
function renderDaysWeek() {
    let output = ''

    for (let dayWeek of daysWeek) {
        output = output + '<div class="dayWeek">' + dayWeek + '</div>'
    }

    return output
}
app2.querySelector('daysWeek').innerHTML = renderDaysWeek()

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
app2.querySelector('days').innerHTML = renderDays(year, month)

function renderDate(mes = 0, ano = 0) {
    month += (mes)
    year += ano

    console.log('antigo ' + months[month], month, year,)

    if (month == 0) {
        month += mes
        year += ano
    }

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
    app2.querySelector('days').innerHTML = renderDays(year, month + 1)
    return date
}

function setDate(year, month) {
    const date = months[month] + ' ' + (year)
    return date
}

app2.querySelector('span').innerHTML = renderDate();

// Atualiza Ano

document.querySelector('#btnLeft').addEventListener("click", function () {
    const currentYear = parseInt(app.querySelector('header span').innerHTML);
    app.querySelector('header span').innerHTML = currentYear - 1;
    app2.querySelector('span').innerHTML = renderDate(0, -1);
});

document.querySelector('#btnRight').addEventListener("click", function () {
    const currentYear = parseInt(app.querySelector('header span').innerHTML);
    app.querySelector('header span').innerHTML = currentYear + 1;
    app2.querySelector('span').innerHTML = renderDate(0, 1);
});

// Atualiza Mes e Ano

document.querySelector('#btnLeftm').addEventListener("click", function () {
    app2.querySelector('span').innerHTML = renderDate(-1, 0);
});

document.querySelector('#btnRightm').addEventListener("click", function () {
    app2.querySelector('span').innerHTML = renderDate(1, 0);
});


//------------------------------------

