# DatePicker
Desafio #boracodar rocketseat

No código da função render(), podemos remover a variável thisMonth e usar diretamente o resultado da chamada new Date().getMonth() dentro do loop for. Também podemos usar o operador ternário em uma única linha para definir a variável active.
Podemos remover a função getValMonth() e mover seu conteúdo diretamente para dentro da função renderDays(), onde já temos as informações year e month. Também podemos usar a função indexOf() diretamente em vez de usar a variável posicaoMes.
Podemos remover a variável month e usar diretamente a função getValMonth() sempre que precisarmos do índice do mês ativo.
Podemos usar a função querySelectorAll() para selecionar os elementos com a classe "mes" e adicionar o evento de clique diretamente, em vez de usar a função forEach().
Podemos mover a chamada da função render() para o final do script, depois de definir todas as variáveis e funções necessárias.
Podemos remover a função renderDaysWeek() e mover seu conteúdo diretamente para o HTML, usando uma lista <ul> e <li> para os dias da semana.
Podemos renomear a variável app2 para calendar para tornar o código mais legível.