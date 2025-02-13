function adicionarTarefa(){
    let input = document.querySelector("input").value;

    let li = document.createElement("li");
    li.innerHTML = input + "<span>❌</span>";

    document.querySelector("ul").appendChild(li);
    input = "";

}