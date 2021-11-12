
function solucao(presenca, entregouTodosOsTrabalhos, notaSoftSkills, notaProgramacao){
if (presenca <75 && entregouTodosOsTrabalhos === false){
    console.log("REPROVADA")
} else if (presenca >= 75 && entregouTodosOsTrabalhos === true){
    console.log("APROVADA")
} else if (notaSoftSkills >= 90 && notaProgramacao <=89){
    console.log("APROVADA - MERITO EM SOFT SKILLS")
} else if (notaSoftSkills <= 89 && notaProgramacao >= 90){
    console.log("APROVADA - MERITO EM PROGRAMACAO")
} else if (notaSoftSkills >=90 && notaProgramacao >= 90){
    console.log("APROVADA - NOTA 1000")
}

}


function solucao(presenca, entregouTodosOsTrabalhos, notaSoftSkills, notaProgramacao){
    if (presenca <75 && entregouTodosOsTrabalhos === false){
        console.log("REPROVADA")
    } else if (presenca >= 75 && entregouTodosOsTrabalhos === true){
        console.log("APROVADA")
    } else if (presenca >=75 && entregouTodosOsTrabalhos === true){
        if (notaSoftSkills >=90){
            console.log("APROVADA - MERITO EM SOFT SKILLS")
        } else {
            console.log ("APROVADA")
        }
    } else if (presenca >= 75 && entregouTodosOsTrabalhos === true){
        if (notaProgramacao >=90){
            console.log("APROVADA - MERITO EM PROGRAMACAO")
        } else {
            console.log("APROVADA")
        }
    } else if (presenca >= 75 && entregouTodosOsTrabalhos === true){
        if (notaSoftSkills >=90 && notaProgramacao >=90){
            console.log("APROVADA - NOTA 1000")
        } else {
            console.log("APROVADA")
        }
    }
    
    }
    
    


    if (presenca >= 75 && entregouTodosOsTrabalhos ===true && notaSoftSkills >= 90 &&notaProgramacao >= 90){
        console.log("APROVADA - NOTA 1000")}
        else if (presenca >= 75 && entregouTodosOsTrabalhos === true && notaSoftSkills >= 90) {
            console.log("APROVADA - MERITO EM SOFT SKILLS")
        } else if (presenca >=75 && entregouTodosOsTrabalhos === true && notaProgramacao >=90){
            console.log("APROVADA - MERITO EM PROGRAMACAO")
        }    else if (presenca >= 75 && entregouTodosOsTrabalhos === true ){
            console.log("APROVADA")
        }    else {
            console.log("REPROVADA")
        }
        
        
