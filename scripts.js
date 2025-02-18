function adicionarTarefa(){ //função para adicionar tarefa
    let input = document.querySelector("input").value; //variavel para pegar o valor do input

    let li = document.createElement("li"); //variavel para criar uma nova li
    li.innerHTML = input + '<span onclick="removerTarefa(this)">❌</span>'; //adiciona o valor do input na lista(html) e um span com um "x" para remover a tarefa

    document.querySelector("ul").appendChild(li); //adiciona a li criada na ul

    document.querySelector("input").value = ""; //limpa o input para adicionar uma nova tarefa
}

function removerTarefa(li){ //função para remover tarefa
    li.parentElement.remove(); //remove a tarefa clicada
}

document.addEventListener("keypress", function(e){ //função para adicionar tarefa ao pressionar a tecla "enter"
    if(e.key === "Enter"){ //se a tecla pressionada for "enter" executa a função adicionarTarefa
        const botaoEnter = document.querySelector("button"); //variavel para pegar o botão "adicionar"

        botaoEnter.click();
    }

});

