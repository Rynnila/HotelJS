
const nomeHotel = prompt("Insira o nome do Hotel: ");
alert(`O nome do hotel é "${nomeHotel}".`);

const nomeUser=prompt("Qual é o nome do usuário: ");
var senha= Number(prompt("Qual a senha do usuário?"));
while(senha!="2678"){
    senha=prompt("Senha invalida, por favor digite-a novamente: ");
}

alert(`Bem vind@ ao Hotel ${nomeHotel}, ${nomeUser}. É um imenso prazer ter você por aqui!`);

function inicio() {

    var escolha = parseInt(prompt('Selecione uma opção \n1. Reserva de Quartos \n2. Cadastro de Hóspedes \n3. Abastecimento de Carros \n4. Sair'));

    switch(escolha){
        case 1:
            reserva_quartos();
            break;
        case 2:
            cadastro_hospedes();
            break;
        case 3:
            abastecer_carros();
            break;
        case 4:
            sair();
            break;
        default:
            erro();
            break;      
    }
}		

function reserva_quartos() {
    alert(`HOTEL ${nomeHotel} - RESERVA DE QUARTOS`);

    let diariaHotel = parseFloat(prompt("Qual o valor padrão da diária?"));
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

function cadastro_hospedes() {
    alert(`HOTEL ${nomeHotel} - CADASTRO DE HÓSPEDES`);
    let diariaHotel = parseFloat(prompt("Qual o valor padrão da diária?"));
    if (diariaHotel<=0){
        alert(`Valor inválido, ${nomeUser}`);
    }else{
        let familiaHospedes=[''];
        let idadeHospede=[''];
        let parar=0;
        let i=0;
        let totalReserva=0;
        while(parar!="PARE"){
            
            let gratuidade =0 ;
            let meia =0;
            familiaHospedes[i]=prompt(`Qual o nome do ${i}º Hóspede?`);
            idadeHospede[i]=prompt(`Qual a idade do ${i}º Hóspede?`);
            while(idadeHospede<=0){
                idadeHospede[i]=prompt("Insira uma idade válida");
            }
            if(idadeHospede[i]<=6){
                alert(`${familiaHospedes[i]} cadastrada(o) com sucesso. ${familiaHospedes[i]} possui gratuidade.`);
                gratuidade+=1;
            }else if(idadeHospede[i]>=60){
                alert(`${familiaHospedes[i]} cadastrada(o) com sucesso. ${familiaHospedes[i]} paga meia.`);
                totalReserva+=diariaHotel/2;
                meia+=1;
            }else{
                alert(`${familiaHospedes[i]} cadastrada(o) com sucess0.`);
                totalReserva+=diariaHotel;
            }
            i+=1;
            parar=prompt('Para parar digite "PARE" (qualquer outra inserção acrescenterá mais hopedes.');
        }

        alert(`${nomeUser}, o valor total das hospedagens é de R$${totalReserva}; ${gratuidade} gratuidade(s); ${meia} meia(s).`);
    }
    
    inicio();
}

function abastecer_carros() {
    alert(`HOTEL ${nomeHotel} - ABASTECER`);
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