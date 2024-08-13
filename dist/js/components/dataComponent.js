import { FormatoData } from "./../types/FormatoData.js";
import Conta from "../types/Conta.js";
import { formatarData } from "../utils/formatadores.js";
const elementoDataAcesso = document.querySelector(".block-saldo time");
function renderizarData() {
    if (elementoDataAcesso != null) {
        elementoDataAcesso.textContent = formatarData(Conta.getDataAcesso(), FormatoData.DS_DIA_MES_ANO);
    }
}
const DataComponent = {
    atualizar: function () {
        renderizarData();
    },
};
export default DataComponent;
