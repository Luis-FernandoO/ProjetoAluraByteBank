import { formatarMoeda } from "../utils/formatadores.js";
import Conta from "../types/Conta.js";
const elementoSaldo = document.querySelector(".saldo-valor .valor");
renderizarSaldo();
function renderizarSaldo() {
    if (elementoSaldo != null) {
        elementoSaldo.textContent = formatarMoeda(Conta.getSaldo());
    }
}
const SaldoComponent = {
    atualizar() {
        renderizarSaldo();
    },
};
export default SaldoComponent;
