                                                        
 /***************************************************Atividade do Encontro Remoto 1*************************************************************/

let pecas = ["Freio" ,"Amortecedor","Virabrequim","Vela","Bateria","Radiador","Correia","Carter","Ignição","Embreagem","retrovisor"];
let pesoPeca = 99;


if (pecas.length > 10) {
    console.log('Capacidade maxima atingida. O limite é 10');
}else{
    console.log("Capacidade inferior a 10. Pode cadastrar ");
}

if (pesoPeca > 100) {
    console.log("Infelizmente a peça não pode ser cadastrada. Pois possui o peso inferior a 100 gramas");
} else {
    console.log("A peça pode ser cadastrada. Pois possui o peso superior a 100 gramas");
}

if (pecas[0].length > 3) {
    console.log("Pode ser cadastrada. Pois a peça possui mais de 3 caracteres");
} else {
    console.log(" Não pode ser cadastrada.");
}

