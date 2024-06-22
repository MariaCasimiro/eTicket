function comprar(){
    let tipo = document.getElementById("tipo-ingresso").value;
    let qtd = parseInt(document.getElementById("qtd").value);
    
    if(qtd <= 0 || isNaN(qtd) ){
        alert("Porfavor, digite uma quantidade valida!");
    }else if(tipo == "pista"){
        let escolhida = parseInt(document.getElementById("qtd-pista").textContent);
        let tipo = "Pista";
        let novaQtdPara = "qtd-pista";
        comprando(escolhida, qtd, tipo, novaQtdPara);
    }
    else if(tipo == "superior"){
        let escolhida = parseInt(document.getElementById("qtd-superior").textContent);
        let tipo = "Cadeira Superior";
        let novaQtdPara = "qtd-superior";
        comprando(escolhida, qtd, tipo, novaQtdPara);
    }
    else if(tipo == "inferior"){
        let escolhida = parseInt(document.getElementById("qtd-inferior").textContent);
        let tipo = "Cadeira Inferior";
        let novaQtdPara = "qtd-inferior";
        comprando(escolhida, qtd, tipo, novaQtdPara);
    }
}

function comprando(escolhida, qtd, tipo, novaQtdPara){
    if(qtd > parseInt(escolhida)){
        alert(`Quantidade indisponivel para compra de ${tipo}!`);
    } else {
        escolhida = escolhida - qtd;
        document.getElementById(`${novaQtdPara}`).textContent = escolhida;
        alert(`Compra realizada com sucesso!\n\nQuantidade Comprada: ${qtd} ingressos de ${tipo}.`);
    }
}