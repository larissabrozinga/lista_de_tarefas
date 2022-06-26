let botao = document.getElementById('confirme');
let tarefasVetor = [];
let input = document.getElementById("dados");
let tarefas = document.getElementById("tarefas");

function PegaDados() {
    let txt = input.value;

    tarefasVetor.push(txt);

    tarefas.innerHTML = ""; 

    for (let indice = 0; indice < tarefasVetor.length; indice++) {
        tarefas.innerHTML += `<p>${indice} - ${tarefasVetor[indice]} <button onclick="RemoverTarefa('${tarefasVetor[indice]}') " id='rmv'>remover</button> </p>`; 
    }
}
    function RemoverTarefa(texto) {
    let Remo = tarefasVetor.indexOf(texto)
        if(Remo > -1){
        tarefasVetor.splice(Remo, 1)    
        }
        tarefas.innerHTML="";

        for (let indice = 0; indice < tarefasVetor.length; indice++) {
            tarefas.innerHTML += `<p>${indice} - ${tarefasVetor[indice]} <button onclick="RemoverTarefa('${tarefasVetor[indice]}') " id='rmv'>remover</button> </p>`; 
        }


    }
