  //Ficheiro lineMP.js

function lineMP(pontoA, pontoB){
    //Copiar variaveis dos argumentos para variaveis auxiliares
    let x1 = pontoA[0];
    let y1 = pontoA[1];
    let x2 = pontoB[0];
    let y2 = pontoB[1];
    let dx = x2 - x1;                           //Calcular o valor de DeltaX
    let dy = y2 - y1;                           //Calcular o valor de DeltaY
    //Reduzir pontos ao 1º octante 
    //Variavel auxiliar que verifica alteração de valores para o simetrico e declive
    let simetrico = false;                          
    let declive = false;                            
    //Verificar declive da reta negativo
    let m = dx * dy;
    console.log(m);
    if(m < 0){
        simetrico = true;                           //Existiu Simetria de y
        y1 = -y1;                                   //Trocar y1
        y2 = -y2;                                   //Trocar y2
        dy = -dy;
    }
    //Verifica valores absolutos dos delta
    if (Math.abs(dx) < Math.abs(dy)){
        console.log(true);
        declive = true;                             //Existiu Troca de Variaveis 
        let aux = x1;                               //Trocar x1 e x2
        x1 = x2;
        x2 = aux;
        aux = y1;                                   //Trocar y1 e y2
        y1 = y2;
        y2 = aux;
        aux = dx;                                   //Trocar dx e dy
        dx = dy;
        dy = aux;
    }
    //Verificar se ponto A é superior ao ponto B
    if(x1 > x2){
        let aux = x1;                               //Trocar ordem dos pontos de forma a
        x1 = x2;                                    //que o algoritmo possa calcular pontos
        x2 = aux;                                   //independentemente da direção
        aux = y1;
        y1 = y2;
        y2 = aux;
        dx = -dx;
        dy = -dy;
    }
       
    //Verificar declive da reta de forma a verificar se  incrementa ou decrementa a variavel
    /*let movimento = 1;                  //Irá incrementar variável
    if (dy < 0) {
        movimento = -1;                 //Irá decrementar variável
        dy = -dy;
    }*/

    
    //Pré calcular valores de incremento
    
    let incrementoNE = 2 * (dy - dx);   //Incremento para escolha de NE
    let incrementoE = 2 * dy;           //Incremento para escolha de E
    let d = 2 * dy - dx;                //Calcular valor inicial de d
    //Calcular Pontos
    let pontos = [];                    //Declarar Array de retorno dos pontos calculados
    
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
    
    let y = y1;                         //Variavel auxiliar para ponto y
    for(let x = x1; x<= x2; x++){
        let auxX = x;
        let auxY = y;
        if(declive ==1){                    //Verifica Troca de coordenadas
            let aux = auxX;                 //e ajusta caso tenha existido
            auxX = auxY;
            auxY = aux;
        }
        if(simetrico == 1){                 //Verifica simetria de Y
            auxY = -auxY;                   //e troca caso tenha existido
        }
        pontos.push([auxX,auxY]);             //Adicionar o ponto inicial ao array de pontos calculados
        //Calcular proximo valor de d
        if(d <= 0){
            d += incrementoE;
        } else {
            d += incrementoNE;
            y++;
            //y += movimento;
        }
    }
}
    return pontos;
}
