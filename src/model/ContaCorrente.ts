import { colors } from "../util/Colors";
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
    limite: number,
  ) {
    super(numero, agencia, titular, tipo, saldo);
    this._limite = limite;
  }

  // Metodos Get e Set Especificos da Classe ContaCorrente

  public get limite(): number {
    return this._limite;
  }

  public set limite(value: number) {
    this._limite = value;
  }


  // Sobrescrita do metodo Sacar para considerar o limite da Conta Corrente
  public sacar(valor: number): boolean {
  
          if(valor <= 0){
              console.log("o Valor deve ser positivo!");
          return false;
          }
  
          if (valor > this.saldo + this._limite) {
              console.log(colors.fg.red, "Saldo Insuficiente!", colors.reset); //o colors reset é so para voltar para a cor original
              return false;
          }
           
          else{
          this.saldo -= valor;
          return true;
          }
      }





  // Metodo Visualizar sobrescrito (POLIMORFISMO)
  public visualizar(): void {
    super.visualizar();
    console.log(`Limite da conta: R$ ${this.limite.toFixed(2)}`);
  }


}
