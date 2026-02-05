import { Conta } from "./Conta";

export class ContaCorrente extends Conta {

    // Atributo específico da Conta Corrente
    private _limite: number;



    // Construtor com a chamada para a Super Classe
	constructor(
    numero: number,
    agencia: number,
    titular: string,
    tipo: number,
    saldo: number,
    limite: number) {
    super(numero, agencia, titular, tipo, saldo);
    this._limite = limite;
	}
}
