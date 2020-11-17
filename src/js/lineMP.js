  //Ficheiro lineMP.js

function lineMP(pontoA, pontoB){
    //Copiar variaveis dos argumentos para variaveis auxiliares
    let x1 = pontoA[0];
    let y1 = pontoA[1];
    let x2 = pontoB[0];
    let y2 = pontoB[1];
    //Verificar se ponto A é superior ao ponto B
    if(x1 > x2){
        let aux = x1;                   //Trocar ordem dos pontos de forma a
        x1 = x2;                        //que o algoritmo possa calcular pontos
        x2 = aux;                       //independentemente da direção
        aux = y1;
        y1 = y2;
        y2 = aux;
    }
    let pontos = [];                    //Declarar Array de retorno dos pontos calculados
    //Correção para poder desenhar linhas Verticais
    let indice=x1;
    if(x1 == x2){
        if(y1 > y2){
            let aux = y1;
            y1 = y2;
            y2 = aux;
        }
        let x = x1;
        for(let y= y1; y <= y2; y++){
            pontos.push([x,y]);
        }
    } else {
        let dx = x2 - x1;                   //Calcular o valor de DeltaX
        let dy = y2 - y1;                   //Calcular o valor de DeltaY
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
        let y = y1;                         //Variavel auxiliar para ponto y
        for(let x = x1; x<= x2; x++){
            pontos.push([x,y]);             //Adicionar o ponto inicial ao array de pontos calculados
            //Calcular proximo valor de d
            if(d <= 0){
                d += incrementoE;
            } else {
                d += incrementoNE;
                y += movimento;
            }
        }
    }
    return pontos;
}
