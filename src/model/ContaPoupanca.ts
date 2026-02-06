import { Conta } from "./Conta";

export class ContaPoupanca extends Conta {

  // Atributo específico da Conta Poupança
  private _aniversario: number;

  // Construtor com a chamada para a Super Classe
  constructor(
    numero: number,
    agencia: number,
    titular: string,
    tipo: number,
    saldo: number,
    aniversario: number,
  ) {
    super(numero, agencia, titular, tipo, saldo);
    this._aniversario = aniversario;
  }

    // Metodos Get e Set Especificos da Classe ContaPoupanca
 public get aniversario(): number {
    return this._aniversario;
  }

    public set aniversario(aniversario: number) {
      this._aniversario = aniversario;
    }

// sobrescrever o metodo Visualizar (POLIMORFISMO)
    public visualizar(): void {
      super.visualizar();
      console.log(`Aniversário da conta: ${this.aniversario}`);

    }

}
