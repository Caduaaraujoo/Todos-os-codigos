function calculaGostos (notas){
    var filmeRuim =0
    var filmeMediano =0
    var filmeTop =0
    for(var i = 0; i < notas.length; i++){
        if (notas[i] >= 0 && notas[i]<2){
            filmeRuim
        } else if(notas[i]>= 2 && notas[i] <4){
            filmeMediano
    } else if(notas[i] >3){
        filmeTop
    }
    return [filmeRuim, filmeMediano, filmeTop]
    }}

    