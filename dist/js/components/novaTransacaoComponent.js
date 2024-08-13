import SaldoComponent from "./saldoComponent.js";
import Conta from "../types/Conta.js";
import ExtratoComponent from "./extratoComponent.js";
import DataComponent from "./dataComponent.js";
document.addEventListener("DOMContentLoaded", function () {
    DataComponent.atualizar();
});
const elementoFormulario = document.querySelector(".block-nova-transacao form");
elementoFormulario.addEventListener("submit", function (event) {
    try {
        event.preventDefault();
        if (!elementoFormulario.checkValidity()) {
            alert("Por Favor, Preencha Todos os Campos da Transação!");
            return;
        }
        const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao");
        const inputValor = elementoFormulario.querySelector("#valor");
        const inputData = elementoFormulario.querySelector("#data");
        let tipoTransacao = inputTipoTransacao.value;
        let valor = inputValor.valueAsNumber;
        let data = new Date(inputData.value + "T00:00:00");
        const novaTrasacao = {
            tipoTransacao: tipoTransacao,
            valor: valor,
            data: data,
        };
        Conta.registrarTransacao(novaTrasacao);
        SaldoComponent.atualizar();
        ExtratoComponent.atualizar();
        DataComponent.atualizar();
        elementoFormulario.reset();
    }
    catch (erro) {
        alert(erro.message);
    }
});
