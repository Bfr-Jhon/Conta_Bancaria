import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";

export class ContaController implements ContaRepository{

    private listaContas = new Array<Conta>();

    public  numero: number = 0;


            //Metodos do CRUD
    procurarPorNumero(numero: number): void {
        const buscaConta = this.buscarNoArray(numero);
        if(buscaConta !== null)
            buscaConta.visualizar();
        
            else
            console.log("\nConta Não Encontrada!! ");


    }


    listarTodas(): void {
        for (let conta of this.listaContas){
            conta.visualizar();
        }

    }


    cadastrar(conta: Conta): void {
        this.listaContas.push(conta);
        console.log(`\nA Conta numero ${conta.numero} foi cadastrada com sucesso!`);



    }


    atualizar(conta: Conta): void {
       const buscaConta = this.buscarNoArray(conta.numero);
       
        if(buscaConta !== null){
           this.listaContas[this.listaContas.indexOf(buscaConta)] = conta;
           console.log(`A Conta numero ${conta.numero} foi atualizada com Sucesso!`)
        }
        else
            console.log("\nConta Não Encontrada!! ");


    }


    deletar(numero: number): void {
        const buscaConta = this.buscarNoArray(numero);
        if(buscaConta !== null){
            this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1);
            console.log(`\nA Conta numero ${numero} foi deletada com sucesso!`);
        }
        else
            console.log("\nConta Não Encontrada!! ");


    }


        // Metodos Bancarios
    sacar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");


    }


    depositar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");


    }


    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        throw new Error("Method not implemented.");


    }
    
        // Metodos Auxiliar

        public gerarNumero(): number{
            return ++ this.numero;
        }


        public buscarNoArray(numero: number): Conta | null{
            for (let  conta of this.listaContas){
                if (conta.numero === numero)
                    return conta
            }

            return null;

        }


}