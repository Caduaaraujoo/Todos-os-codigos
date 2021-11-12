
function solucao(presenca, entregouTodosOsTrabalhos, notaSoftSkills, notaProgramacao)
{
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
    }
        
