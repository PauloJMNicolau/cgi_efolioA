function lineMP([x1,y1], [x2,y2]){
    //Verificar se ponto A é superior ao ponto B
    if(pontoA[0] > pontoB[0]){
        let aux = pontoA;               //Trocar ordem dos pontos de forma a
        pontoA = pontoB;                //que o algoritmo possa calcular pontos
        pontoB = aux;                   //independentemente da direção
    }
    let pontos = [];                    //Declarar Array de retorno dos pontos calculados
    let dx = pontoB[0] - pontoA[0];     //Calcular o valor de DeltaX
    let dy = pontoB[1] - pontoA[1];     //Calcular o valor de DeltaY
    //Verificar declive da reta de forma a verificar se  incrementa ou decrementa a variavel
    let movimento = 1;                  //Irá incrementar variável
    if (dy < 0) {
        movimento = -1;                 //Irá decrementar variável
        dy = -dy;
    }
    //Pré calcular valores de incremento
    let incrementoNE = 2 * (dy - dx);   //Incremento para escolha de NE
    let incrementoE = 2 * dy;           //Incremento para escolha de E
    let d = 2 * dy - dx;                //Calcular valor inicial de d
    //Calcular Pontos
    let y = pontoA[1];                  //Variavel auxiliar para ponto y
    for(let x = pontoA[0]; x<= pontoB[0]; x++){
        pontos.push([x,y]);             //Adicionar o ponto inicial ao array de pontos calculados
        //Calcular proximo valor de d
        if(d <= 0){
            d += incrementE;
        } else {
            d += incrementoNE;
            y += movimento;
        }
    }
    return pontos;
}