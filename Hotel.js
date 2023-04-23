//Início
const nomeHotel = prompt("Insira o nome do Hotel: ");
alert(`O nome do hotel é "${nomeHotel}".`);

const nomeUser=prompt("Qual é o nome do usuário: ");
var senha= Number(prompt("Qual a senha do usuário?"));
while(senha!="2678"){
    senha=prompt("Senha invalida, por favor digite-a novamente: ");
}

alert(`Bem vinda(o) ao Hotel ${nomeHotel}, ${nomeUser}. É um imenso prazer ter você por aqui!`);


var familiaHospedes=['']; //declarando antes pois será um array usado várias vezes durante o código
var diariaHotel=0; //esse valor também se repete em duas funções 

//o menu do início está nessa função
function inicio() {

    var escolha = parseInt(prompt('Selecione uma opção \n1. Reserva de Quartos \n2. Cadastro de Hóspedes \n3. Cadastro de Eventos \n4. Abastecimento de Carros\n5. Sair'));

    switch(escolha){
        case 1:
            reserva_quartos();
            break;
        case 2:
            menu_cadastro_hospedes();
            break;
        case 3:
            menu_cadastro_eventos();
            break
        case 4:
            abastecer_carros();
            break;
        case 5:
            sair();
            break;
        default:
            erro();
            break;      
    }
}		

//função responsável pela reserva de quartos
function reserva_quartos() {
    alert(`HOTEL ${nomeHotel} - RESERVA DE QUARTOS`);

    diariaHotel = parseFloat(prompt("Qual o valor padrão da diária?"));
    if (diariaHotel<=0){
        alert(`Valor inválido, ${nomeUser}`);
    }
    else{
        let quantidadeDias = parseFloat(prompt("Quantas diárias serão necessárias?"));
        
        if (quantidadeDias<=0 || quantidadeDias>30){
            alert(`Valor inválido, ${nomeUser}`);
            inicio();
        }
        else{
            let totalReserva=diariaHotel*quantidadeDias;
            alert(`O valor de ${quantidadeDias} dias de hospedagem é de R$${totalReserva}`);
            let nomeHospede=prompt("Qual o nome do Hospede?");

            let confirmacao= prompt(`${nomeUser}, você confirma a hospedagem para ${nomeHospede} por ${quantidadeDias}dias? S/N`);
            while(confirmacao!="S" && confirmacao!="N"){
                confirmacao=prompt("Por favor, use apenas S ou N");
            }

            if(confirmacao=="S"){
                alert(`${nomeUser}, reserva efetuada para ${nomeHospede}. O valor total da reserva foi R$${totalReserva}`);
            }
            else if (confirmacao=="N"){
                alert(`${nomeUser}, reserva não efetuada`);
            }
        }
    }
    inicio();
}

//função que é um menu com as opções possíveis de cadastramento de hóspedes
function menu_cadastro_hospedes(){
    let cadastroescolha=parseInt(prompt("Opções disponíveis:\n1. Cadastrar\n2. Pesquisar\n3. Listar\n4.  Sair"));
    switch(cadastroescolha){
        case 1:
            cadastro_hospedes();
            break;
        case 2:
            pesquisa_hospedes();
            break;
        case 3:
            listar_hospedes();
            break;
        case 4:
            inicio();
            break;
        default:
            alert("Por favor, insira um valor de 1 a 4.");
            menu_cadastro_hospedes();
            break;
    }
}

//função responsável pelo cadastro dos hóspedes no array
function cadastro_hospedes() {
    alert(`HOTEL ${nomeHotel.toUpperCase()} - CADASTRO DE HÓSPEDES`);   

    var idadeHospede=[''];
    var parar=0;
    var i=0;
    var totalReserva=0;
    var gratuidade =0 ;
    var meia =0;
    diariaHotel = parseFloat(prompt("Qual o valor padrão da diária?")); 

    if (diariaHotel<=0){
        alert(`Valor inválido, ${nomeUser}`);
    }else{
        do{
            let j=i+1;
            familiaHospedes[i]=prompt(`Qual o nome do ${j}º Hóspede?`);
            idadeHospede[i]=prompt(`Qual a idade do ${j}º Hóspede?`);
            while(idadeHospede<=0){
                idadeHospede[i]=prompt("Insira uma idade válida");
            }
            if(idadeHospede[i]<=6){
                alert(`${familiaHospedes[i]} cadastrada(o) com sucesso. ${familiaHospedes[i]} possui gratuidade.`);
                gratuidade+=1;
            }
            else if(idadeHospede[i]>=60){
                alert(`${familiaHospedes[i]} cadastrada(o) com sucesso. ${familiaHospedes[i]} paga meia.`);
                totalReserva+=(diariaHotel/2);
                meia+=1;
            }
            else{
                alert(`${familiaHospedes[i]} cadastrada(o) com sucesso.`);
                totalReserva+=diariaHotel;
            }
            i+=1;
            if (i>=14){
                alert("Máximo de cadastros atingido.");
                parar="PARE";
            }else{
                parar=prompt('Para parar digite "PARE" (qualquer outra inserção acrescenterá mais hóspedes.');
            }
        }while(parar!="PARE");
    }
    alert(`${nomeUser}, o valor total das hospedagens é de R$${totalReserva}; ${gratuidade} gratuidade(s); ${meia} meia(s).`);
    menu_cadastro_hospedes();
}

//função responsável pela listagem e exibição dos hóspedes no array
function listar_hospedes(){
    var tamanho= familiaHospedes.length -1;
    var j=0;
    while(j<=tamanho){
        let u=j+1;
        alert(`Hóspede: ${familiaHospedes[j]} cadastrado. Na ${u}º posição.`);
        j+=1;
    }
    menu_cadastro_hospedes();
}

//função responsável pelo pesquisa de um dos hóspedes no array
function pesquisa_hospedes() {
    alert(`HOTEL ${nomeHotel.toUpperCase()} - PESQUISA DE HÓSPEDES`); 
    var encontro = prompt("Qual o nome do Hospede?");
    encontro= familiaHospedes.indexOf(encontro);
    if(encontro>=0){
        alert(`Hóspede ${familiaHospedes[encontro]} foi encontrada(o)!`);
        menu_cadastro_hospedes();
    }else{
        alert(`Hóspede ${encontro} não foi encontrada(0).`);
        menu_cadastro_hospedes();
    }  
}

//função que é um menu com as opções possíveis de cadastramento de eventos
function menu_cadastro_eventos(){
    let cadastroescolha=parseInt(prompt("Opções disponíveis:\n1. Cadastrar Evento\n2. Cadastrar Buffet\n3. Verificar Auditórios\n4. Disponibilidade Restaurante\n5. Sair"));
    switch(cadastroescolha){
        case 1:
            cadastro_eventos();
            break;
        case 2:
            cadastro_buffet();
            break;
        case 3:
            disbonibilidade_salao();
            break;
        case 4:
            disponibilidade_restaurante();
            break;
        case 5:
            inicio();
            break;
        default:
            alert("Por favor, insira um valor de 1 a 5.");
            menu_cadastro_eventos();
            break;
    }
}

//função responsável pelo cadastro de eventos
function cadastro_eventos(){
    let quantidadeHoras=parseInt(prompt("Qual a duração do evento em horas?"));
    let quantidadeGarcons= parseInt(prompt("Quantos garçons serão necessários?"));
    let totalEvento=(quantidadeHoras*10.50)*quantidadeGarcons;
    alert(`Custo total: R$${totalEvento}.`);
    let confirmacao_evento=prompt("Gostaria de efutuar a reserva? (S/N)");
    while(confirmacao_evento!="S" && confirmacao_evento!="N"){
        confirmacao_evento=prompt("Por favor, insira um valor válido.");
    }
    if(confirmacao_evento=="S"){
        alert(`${nomeUser} reserva efetuada com sucesso.`);
    }
    else if (confirmacao_evento=="N"){
        alert(`${nomeUser}, reserva não efetuada`);
    }
    menu_cadastro_eventos();
}

//função responsável pelo cadastro de buffet
function cadastro_buffet(){
    let quantidadeConvidados=parseInt(prompt("Qual o número de convidados para o evento?"));
    if(quantidadeConvidados>350|| quantidadeConvidados<=0){
        alert("Quantidade de convidados inválida superior à capacidade máxima.");
        cadastro_buffet();
    }
    let totalCafe=quantidadeConvidados*0.2;
    let totalAgua=quantidadeConvidados*0.5;
    let totalSalgado=quantidadeConvidados*7;
    let totalComida=(totalCafe*0.80)+(totalAgua*0.40)+((totalSalgado/100)*34);
    alert(`O evento precisará de ${totalCafe} litros de café, ${totalAgua} litros de água e ${totalSalgado} salgados. O custo total do evento será de R$${totalComida}.`);

    let confirmacao_buffet=prompt("Gostaria de efutuar a reserva? (S/N)");
    while(confirmacao_buffet!="S" && confirmacao_buffet!="N"){
        confirmacao_buffet=prompt("Por favor, insira um valor válido.");
    }
    if(confirmacao_buffet=="S"){
        alert(`${nomeUser} reserva efetuada com sucesso.`);
    }
    else if (confirmacao_buffet=="N"){
        alert(`${nomeUser}, reserva não efetuada`);
    }
    menu_cadastro_eventos();
}

//função responsável por verificar a disponibilidade do salão de festas
function disbonibilidade_salao(){
    let quantidadeConvidados=parseInt(prompt("Qual o número de convidados para o evento?"));
    let cadeiras_adicionais =0;
    let confirmacao_salao = '';
    if(quantidadeConvidados>350 || quantidadeConvidados<=0){
        alert("Quantidade de convidados inválida ou superior à capacidade máxima.");
        disbonibilidade_salao();
    }
    else if(quantidadeConvidados<=220){
        cadeiras_adicionais = quantidadeConvidados-150;
        alert(`Use o auditório Laranja (inclua mais ${cadeiras_adicionais} cadeiras).`);
        confirmacao_salao=prompt("Gostaria de efutuar a reserva? (S/N)");
        while(confirmacao_salao!="S" &&        confirmacao_salao!="N"){
            confirmacao_salao=prompt("Por favor, insira um valor válido.");
        }
        if(confirmacao_salao=="S"){
            alert(`${nomeUser} reserva efetuada com sucesso.`);
        }
        else if (confirmacao_salao=="N"){
            alert(`${nomeUser}, reserva não efetuada`);
        }
    }
    else if(quantidadeConvidados>220 && quantidadeConvidados<=350){
        alert(`Use o auditório Colorado.`);
        confirmacao_salao=prompt("Gostaria de efutuar a reserva? (S/N)");
        while(confirmacao_salao!="S" && confirmacao_salao!="N"){
            confirmacao_salao=prompt("Por favor, insira um valor válido.");
        }
        if(confirmacao_salao=="S"){
            alert(`${nomeUser} reserva efetuada com sucesso.`);
        }
        else if (confirmacao_salao=="N"){
            alert(`${nomeUser}, reserva não efetuada`);
        }
    }

    menu_cadastro_eventos();
}

//função responsável por verificar a disponibilidade do restaurante
function disponibilidade_restaurante(){
    let dia_semana=prompt("Qual o dia do evento?");
    let hora_evento=parseInt(prompt("Qual o horário do Evento?"));
    let nome_empresa='';
    if(dia_semana=="sabado" || dia_semana=="domingo"){
        if(hora_evento<7 || hora_evento>15){
            alert("Restaurante indisponível");
        }
        else{
            nome_empresa=prompt("Qual o nome da empresa?");
            alert(`Restaurante reservado para ${nome_empresa}. \nNa ${dia_semana} às ${hora_evento}hrs.`);
        }
    }
    else{
        if(hora_evento<7 || hora_evento>23){
            alert("Restaurante indisponível");
        }
        else{
            nome_empresa=prompt("Qual o nome da empresa?");
            alert(`Restaurante reservado para ${nome_empresa}. \nNa ${dia_semana} às ${hora_evento}hrs.`);
        }
    }
    
    menu_cadastro_eventos();
}

//Função para  o abastecimento dos carros, pega qual a gasolina e o álcool mais baratos, por fim confere se o álcool está 30% mais barato que a gasolina
function abastecer_carros() {
    alert(`HOTEL ${nomeHotel} - ABASTECER`);
    let preco_al_WO=prompt("PREÇOS WAYNE OIL\nQual o valor do álcool no posto Wayne Oil?");
    let preco_gas_WO=prompt("Qual o valor da gasolina no posto Wayne Oil?");
    let preco_al_SP=prompt("PREÇOS STARK PETROL\nQual o valor do álcool no posto Stark Petrol??");
    let preco_gas_SP=prompt("Qual o valor da gasolina no posto Stark Petrol??");
    let gas_barata=0;
    let al_barato=0;
    let posto=0;
    if (preco_gas_SP>preco_gas_WO){
        gas_barata=preco_gas_WO;
        posto= "Wayne Oil";
    }
    else if (preco_gas_SP<preco_gas_WO){
        gas_barata=preco_gas_SP;
        posto= "Stark Petrol";
    }
    if(preco_al_SP>preco_al_WO){
        al_barato=preco_al_WO;
        posto= "Wayne Oil";
    }
    else if(preco_al_SP<preco_al_WO){
        al_barato=preco_al_SP;
        posto= "Stark Petrol";
    }
    if((gas_barata*0.7)>(al_barato*100)){
        alert(`${nomeUser}, é mais barato abastecer com álcool no posto ${posto}`)
    }
    else if((gas_barata*0.7)<(al_barato*100)){
        alert(`${nomeUser}, é mais barato abastecer com gasolina no posto ${posto}`)
    }
    inicio();
}

function erro() {
    alert('Por favor, informe um número entre 1 e 4');
    inicio();
}

function sair() {
    var confirma = confirm('Você deseja sair?');
    if (confirma) {
        alert(`Muito obrigado e até logo, ${nomeUser}.`)
        window.close();
    } else {
        inicio();
    }
}

inicio();