import { Transacao } from "../types/Transacao.js";
import { TipoTransacao } from "../types/TipoTransacao.js";
import SaldoComponent from "./saldoComponent.js";
import Conta from "../types/Conta.js";
import ExtratoComponent from "./extratoComponent.js";
import DataComponent from "./dataComponent.js";

document.addEventListener("DOMContentLoaded", function () {
  DataComponent.atualizar();
});

const elementoFormulario = document.querySelector(
  ".block-nova-transacao form"
) as HTMLFormElement;
elementoFormulario.addEventListener("submit", function (event) {
  try {
    event.preventDefault();
    if (!elementoFormulario.checkValidity()) {
      alert("Por Favor, Preencha Todos os Campos da Transação!");
      return;
    }
    const inputTipoTransacao = elementoFormulario.querySelector(
      "#tipoTransacao"
    ) as HTMLSelectElement;
    const inputValor = elementoFormulario.querySelector(
      "#valor"
    ) as HTMLInputElement;
    const inputData = elementoFormulario.querySelector(
      "#data"
    ) as HTMLInputElement;

    let tipoTransacao: TipoTransacao =
      inputTipoTransacao.value as TipoTransacao;
    let valor: number = inputValor.valueAsNumber;
    let data: Date = new Date(inputData.value + "T00:00:00");

    const novaTrasacao: Transacao = {
      tipoTransacao: tipoTransacao,
      valor: valor,
      data: data,
    };

    Conta.registrarTransacao(novaTrasacao);
    SaldoComponent.atualizar();
    ExtratoComponent.atualizar();
    DataComponent.atualizar();

    elementoFormulario.reset();
  } catch (erro) {
    alert(erro.message);
  }
});
