function calculadoraDeDoisNumeros(valorA, valorB, operacao){
	if(operacao == '+')
        return valorA + valorB;
    
    if(operacao == '-')
        return valorA-valorB;
    if(operacao == '*')
        return valorA * valorB;
    
    if(operacao =='/')
        return valorA / valorB;
    
    throw 'Error';
	
};

function DeveriaSomarDoisNumerosTest(){
    
    if(calculadoraDeDoisNumeros(1, 2, '+') != 3){
        throw '1 + 2 deveria ser igual a 3';
    }
}

function DeveriaSubtrairDoisNumerosTest(){
    if(calculadoraDeDoisNumeros(2, 2, '-') != 0){
        throw '2 - 2 deveria ser igual a 0';
    }
}

function DeveriaMultiplicarDoisNumerosTest(){
    if(calculadoraDeDoisNumeros(5, 7,'*') != 35){
        throw '5 * 7 deveria ser 35';
    }
}

function DeveriaDividirDoisNumeros(){
    if(calculadoraDeDoisNumeros(10, 2, '/') != 5){
        throw '10 / 2 deveria ser 5';
    }
}


DeveriaSomarDoisNumerosTest();
DeveriaSubtrairDoisNumerosTest();
DeveriaMultiplicarDoisNumerosTest();
DeveriaDividirDoisNumeros();
