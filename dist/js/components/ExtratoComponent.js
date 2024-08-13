import Conta from "../types/Conta.js";
import { FormatoData } from "../types/FormatoData.js";
import { formatarData, formatarMoeda } from "../utils/formatadores.js";
const elementoRegistroTransacoesExtrato = document.querySelector(".extrato .registro-transacoes");
renderizarExtrato();
function renderizarExtrato() {
    const gruposTransacoes = Conta.getGruposTransacoes();
    elementoRegistroTransacoesExtrato.innerHTML = "";
    let htmlRegistroTransacoes = "";
    for (let grupoTransacao of gruposTransacoes) {
        let htmlTransacaoItem = "";
        for (let transacao of grupoTransacao.transacoes) {
            htmlTransacaoItem += `
         <div class="transacao-item">
              <div class="transacao-info">
                <span class="tipo">${transacao.tipoTransacao}</span>
                <b class="valor">${formatarMoeda(transacao.valor)}</b>
              </div>
              <time class="data">${formatarData(transacao.data, FormatoData.DIA_MES)}</time>
            </div>
      `;
        }
        htmlRegistroTransacoes += `
        <div class="transacoes-group">
            <b class="mes-group">${grupoTransacao.label}</b>
            ${htmlTransacaoItem}
        </div>
    `;
    }
    if (htmlRegistroTransacoes === "") {
        htmlRegistroTransacoes = "<div>Não Há Transações Registradas!</div>";
    }
    elementoRegistroTransacoesExtrato.innerHTML = htmlRegistroTransacoes;
}
const ExtratoComponent = {
    atualizar() {
        renderizarExtrato();
    },
};
export default ExtratoComponent;
