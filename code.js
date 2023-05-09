const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']

function render() {
    let output = ''

    const thisMonth = months[new Date().getMonth()]
    // const thisMonth = months[11]
    for (let month of months) {
        const active = thisMonth == month ? 'active' : ''
        output += `<div class=${active}>${month}</div>`
    }

    return output;
}

app.querySelector('months').innerHTML = render()
app.querySelector('header span').innerHTML = new Date().getFullYear();

document.querySelector('#btnLeft').addEventListener("click", function () {
    const currentYear = parseInt(app.querySelector('header span').innerHTML);
    app.querySelector('header span').innerHTML = currentYear - 1;
});

document.querySelector('#btnRight').addEventListener("click", function () {
    const currentYear = parseInt(app.querySelector('header span').innerHTML);
    app.querySelector('header span').innerHTML = currentYear + 1;
});



//onselectstart=”return false //Desabilita função de copiar