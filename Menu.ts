import {colors} from './src/util/Colors';
import { Conta } from './src/model/Conta';
import { Input } from './src/util/Input';
import { ContaCorrente } from './src/model/ContaCorrente';
import { ContaPoupanca } from './src/model/ContaPoupanca';
import { ContaController } from './src/controller/ContaController';
import { keyInSelect, keyInYNStrict, question } from 'readline-sync';

// criar um objeto Global da classe ContaController
const contas = new ContaController();

// Criar um Array contendo os tipos de Conta
const tipoContas = ['Conta Corrente', 'Conta Poupanca'];




export function main() {

    let opcao: number;

    criarContasTeste(); // Criar algumas contas para teste

    while (true) {

        console.log(colors.bg.green + colors.fg.yellow,
             "************************************************************");
        console.log("                                                     ");
        console.log("                    BANCO CA$HE                      ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Conta                          ");
        console.log("            2 - Listar todas as Contas               ");
        console.log("            3 - Buscar Conta por Numero              ");
        console.log("            4 - Atualizar Dados da Conta             ");
        console.log("            5 - Apagar Conta                         ");
        console.log("            6 - Sacar                                ");
        console.log("            7 - Depositar                            ");
        console.log("            8 - Transferir valores entre Contas      ");
        console.log("            0 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ",
        colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = Input.questionInt("");

        if (opcao == 0) {
            console.log(colors.fg.greenstrong,"\nBanco CA$HE - O seu Futuro começa aqui!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
         }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong, "\n\nCriar Conta\n\n", colors.reset);
                criarConta();
                keyPress() // apenas para dar uma pausa 
                break;
                
            case 2:
                console.log(colors.fg.whitestrong,"\n\nListar todas as Contas\n\n", colors.reset);
                    contas.listarTodas();
                keyPress()
                break;

            case 3:
                console.log(colors.fg.whitestrong,"\n\nConsultar dados da Conta - por número\n\n", colors.reset);
                
                buscarContaPorNumero();

                keyPress()
                break;

            case 4:
                console.log(colors.fg.whitestrong, 
                    "\n\nAtualizar dados da Conta\n\n", colors.reset);

                atualizarConta()

                keyPress()
                break;

            case 5:
                console.log(colors.fg.whitestrong, 
                    "\n\nApagar uma Conta\n\n", colors.reset);
                deletarContaPorNumero();
                
                keyPress()
                break;

            case 6:
                console.log(colors.fg.whitestrong, 
                    "\n\nSaque\n\n", colors.reset);

                keyPress()
                break;

            case 7:
                console.log(colors.fg.whitestrong, 
                    "\n\nDepósito\n\n", colors.reset);

                keyPress()
                break;

            case 8:
                console.log(colors.fg.whitestrong, 
                    "\n\nTransferência entre Contas\n\n", colors.reset);

                keyPress()
                break;

            default:
                console.log(colors.fg.whitestrong, 
                    "\nOpção Inválida!\n", colors.reset);

                keyPress()
                break;
        }
    }

}


/* Opção 1: Criar uma nova Conta */

function criarConta(){

    console.log("Digite o Numero da Agência: ")
    const agencia = Input.questionInt("");

    console.log("Digite o Nome do titular: ")
    const titular = Input.question("");
    
    console.log("Selecione o Tipo da Conta: ")
    const tipo = Input.keyInSelect(tipoContas, "", {cancel: false}) + 1;
    
    console.log("Digite o Saldo da conta: ")
    const saldo = Input.questionFloat("");


    switch(tipo){
        case 1: // conta Corrente
            console.log("Digite o limite da Conta: ")
            const limite = Input.questionFloat("");
            contas.cadastrar(new ContaCorrente(
                contas.gerarNumero(), agencia, titular, tipo, saldo, limite));

        break;


        case 2: // Conta Poupança
             console.log("Digite o Aniversario da conta: ")
            const aniversario = Input.questionInt("");
            contas.cadastrar(new ContaPoupanca(
                contas.gerarNumero(), agencia, titular, tipo, saldo,aniversario));
        break;

    }



}


/* Opção 3: Procurar Uma Conta pelo Numero*/

function buscarContaPorNumero(): void{

    console.log("Digite o Numero da Conta: ")
    const numero = Input.questionInt("");

    contas.procurarPorNumero(numero);
}

/* Opção 4: Atualizar Dados da Conta */
function atualizarConta(): void{
     console.log("Digite o Numero da Conta: ")
    const numero = Input.questionInt("");

    const conta = contas.buscarNoArray(numero);
    if(conta !== null){
        // Guarda os Valores atuais da CONTA

        let agencia: number = conta.agencia;
        let titular: string = conta.titular;
        const tipo: number = conta.tipo;
        let saldo: number = conta.saldo;
        

        // atualizacao da AGENCIA
        console.log(`\n Agencia atual: ${agencia} `);
        console.log("Digite o numero da nova Agencia \n (Pressione Enter para manter o valor Atual")
        let entrada = Input.question("");

        agencia = entrada.trim() === "" ? agencia : parseInt(entrada);


          // atualizacao do nome Titular
        console.log(`\n Nome atual do titular: ${titular} `);
        console.log("Digite o novo nome do  titular \n (Pressione Enter para manter o valor Atual")
        entrada = Input.question("");

        titular = entrada.trim() === "" ? titular : entrada;


          // atualizacao da Saldo
        console.log(`\n SAldo atual: ${saldo} `);
        console.log("Digite o valor do novo saldo \n (Pressione Enter para manter o valor Atual")
        entrada = Input.question("");

        saldo = entrada.trim() === "" ? saldo : parseFloat(entrada.replace(",","."));




        // Atualização do TIPO 
         switch(tipo){
         case 1:{ // conta Corrente
            let limite : number = (conta as ContaCorrente).limite;

            // atualizacao limite
            console.log(`\n Limite atual: ${limite} `);
            console.log("Digite o valor do novo Limite \n (Pressione Enter para manter o valor Atual")
            let entrada = Input.question("");

            limite = entrada.trim() === "" ? limite : parseFloat(entrada.replace(",","."));

                contas.atualizar(new ContaCorrente (numero, agencia, titular, tipo, saldo, limite));

            break;
                    }
                case 2:{ // Conta Poupança
                    let aniversario: number = (conta as ContaPoupanca).aniversario;

                    // atualizacao do aniversario
            console.log(`\n Aniversario atual: ${aniversario} `);
            console.log("Digite o do novo dia do Aniversario \n (Pressione Enter para manter o valor Atual")
            let entrada = Input.question("");

            aniversario = entrada.trim() === "" ? aniversario : parseInt(entrada);


                contas.atualizar(new ContaPoupanca (numero, agencia, titular, tipo, saldo,aniversario));

            break;
                }
        }




    }
        else{

            console.log(`A conta ${numero} não existe! `);
        }

    }




/* Opção 5: Deletar Uma Conta pelo Numero*/

function deletarContaPorNumero(): void{

    console.log("Digite o Numero da Conta: ")
    const numero = Input.questionInt("");
    const confirmar = keyInYNStrict(`Tem certeza que deseja deletar a conta ${numero}?`);
     
    if(confirmar === true){
        contas.deletar(numero);
    }
    else{
        console.log("\nOperação Cancelada!");
    }
}




/* Função com os dados da pessoa desenvolvedora */
function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Jhonatha Vinicius");
    console.log("Generation Brasil - jhonathavinicius21@gmail.com");
    console.log("github.com/bfr-jhon");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
   Input.prompt();
}

/* contas para teste */

function criarContasTeste(): void{
   
    // Instâncias da Classe ContaCorrente
    contas.cadastrar(new ContaCorrente(contas.gerarNumero(), 1234, 'Amanda Magro', 1, 1000000.00, 100000.00));
    contas.cadastrar(new ContaCorrente(contas.gerarNumero(), 4578, 'João da Silva', 1,  1000.00, 100.00));
 
    // Instâncias da Classe ContaPoupança
    contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), 5789, "Geana Almeida", 2, 10000, 10));
    contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), 5698, "Jean Lima", 2, 15000, 15));
 
}


main();