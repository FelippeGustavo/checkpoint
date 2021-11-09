function mic(prato,temp){
  
    if(prato==1 && temp >= 20 && temp< 30){
        console.log(`Opção escolhida :Pipoca \n Comida Queimou!!! \n Prato pronto, bom apetite!!!`)
    }else if (prato==1 && temp ==10) {
        console.log(`Opção escolhida:Pipoca |\nPrato pronto, bom apetite!!!`)
    }
    else if (prato==1 && temp <10) {
        console.log(`Opção escolhida :Pipoca \n Tempo insuficiênte!!! \n Prato pronto, bom apetite!!!`)
    }else if(prato==1 && temp >=30){
        console.log(`Opção escolhida :Pipoca \n Kabuumm`)}
        if(prato==2 && temp >= 16 && temp< 24){
            console.log(`Opção escolhida :Macarrão \n Comida Queimou!!! \n Prato pronto, bom apetite!!!`)
        }else if (prato==2 && temp ==8) {
            console.log(`Opção escolhida :Macarrão\nPrato pronto, bom apetite!!!`)
        }
        else if (prato==2 && temp <8) {
            console.log(`Opção escolhida :Macarrão \n Tempo insuficiênte!!! \n Prato pronto, bom apetite!!!`)
        }else if(prato==2 && temp >=24){
            console.log(`Opção escolhida :Macarrão \n Kabuumm`)}
        if(prato==3 && temp >=30 && temp< 45){
            console.log(`Opção escolhida :Carne \n Comida Queimou!!! \n Prato pronto, bom apetite!!!`)
        }else if (prato==3 && temp ==15) {
            console.log(`Opção escolhida :Carne\nPrato pronto, bom apetite!!!`)
        }
        else if (prato==3 && temp <15) {
            console.log(`Opção escolhida :Carne \n Tempo insuficiênte!!! \n Prato pronto, bom apetite!!!`)
        }else if(prato==3 && temp >=45){
            console.log(`Opção escolhida :Carne \n Kabuumm`)}
            if(prato==4 && temp >=24 && temp< 36){
                console.log(`Opção escolhida :Feijão \n Comida Queimou!!! \n Prato pronto, bom apetite!!!`)
            }else if (prato==4 && temp ==12) {
                console.log(`Opção escolhida :Feijão\nPrato pronto, bom apetite!!!`)
            }
            else if (prato==4 && temp <12) {
                console.log(`Opção escolhida :Feijão \n Tempo insuficiênte!!! \n Prato pronto, bom apetite!!!`)
            }else if(prato==4 && temp >=36){
                console.log(`Opção escolhida :Feijão \n Kabuumm`)}
                if(prato==5 && temp >=16 && temp< 24){
                    console.log(`Opção escolhida :Brigadeiro \n Comida Queimou!!! \n Prato pronto, bom apetite!!!`)
                }else if (prato==5 && temp ==8) {
                    console.log(`Opção escolhida :Brigadeiro\nPrato pronto, bom apetite!!!`)
                }
                else if (prato==5 && temp <8) {
                    console.log(`Opção escolhida :Brigadeiro \n Tempo insuficiênte!!! \n Prato pronto, bom apetite!!!`)
                }else if(prato==5 && temp >=24){
                    console.log(`Opção escolhida :Brigadeiro \n Kabuumm`)}
                    else if (prato >5 ){
                        console.log("Prato escolhido não existe!!!")
                    }
       } mic(5,36)
/*
_____________________________________________________________________________________
                                                                                    |
/*PRATO NÚMERO 1 - Pipoca | 2 - Macarrão | 3 - Carne | 4 - Feijão | 5 - Brigadeiro  |
 ___________________________________________________________________________________|
 */