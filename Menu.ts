import {colors} from './src/util/Colors';
import { Conta } from './src/model/Conta';
import { Input } from './src/model/Input';
import { ContaCorrente } from './src/model/ContaCorrente';

export function main() {

    let opcao: number;

    // //instanciar objetos da classe Conta

    // const c1 = new Conta(1, 1234, "Sofia", 1, 100000.00)

    // c1.visualizar();

    // // Testes do metodo Sacar
    // console.log("Sacar 100,00", c1.sacar(100.00));
    // console.log("Sacar 2000000", c1.sacar(200000000));
    // console.log("sacar 0 reais" , c1.sacar(0.00));

    // //Testes do Metodo Depositar
    // console.log("Depositar -10,00");
    //  c1.depositar(-10);
    
    //  console.log("Depositar 500,00");
    // c1.depositar(500);
    // Agora nao pode mais usar a classe CONTA pq ela é abstrata

   
    // Testes da classe conta ContaCorrente

    const cc1 = new ContaCorrente(2, 5678, "bianca", 1, 200000, 2000.00);
    
    cc1.visualizar();
    //teste do Metodo Sacar - conta corrente
    console.log("Sacar 1500,00", cc1.sacar(1000.00));
    console.log("Sacar 20000,00", cc1.sacar(200000.00));

     // teste do metodo depositar - conta corrente
    cc1.depositar(500.00);
    cc1.visualizar();

    while (true) {

        console.log(colors.bg.green + colors.fg.yellow,
             "************************************************************");
        console.log("                                                     ");
        console.log("                    BANCO CACHE                      ");
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
        console.log("            9 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ",
        colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = Input.questionInt("");

        if (opcao == 9) {
            console.log(colors.fg.greenstrong,"\nBanco CACHE - O seu Futuro começa aqui!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
         }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong, 
                    "\n\nCriar Conta\n\n", colors.reset);

                keyPress() // apenas para dar uma pausa 
                break;
            case 2:
                console.log(colors.fg.whitestrong, 
                    "\n\nListar todas as Contas\n\n", colors.reset);

                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong, 
                    "\n\nConsultar dados da Conta - por número\n\n", colors.reset);

                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong, 
                    "\n\nAtualizar dados da Conta\n\n", colors.reset);

                keyPress()
                break;
            case 5:
                console.log(colors.fg.whitestrong, 
                    "\n\nApagar uma Conta\n\n", colors.reset);

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

main();