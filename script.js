function consumoDeAgua(){
    const peso = document.querySelector("#pesoKg").value
    

    if(peso == '' || peso <= 0 ){
        msg = 'Digite um valor válido'
        displayResultado.textContent = msg
    }
    else{
        const resultadoTotal = Math.round((peso * 35)).toString()

        const ml = resultadoTotal.slice(-3)
        const litros = (resultadoTotal - ml)/1000

      
        if(litros > 1){
            msg = `É recomendado para você beber ${litros} Litros `
        }
        else  if(litros == 0){
            msg = `É recomendado para você beber `
        }
        else{
            msg = `É recomendado para você beber ${litros} Litro `
        }
            
        if(ml !== 0){
                msg += `${ml}ml`
            }

        displayResultado.textContent = `${msg} de água por dia.`     
    }
}
    
    


document.getElementById("btnCalcular").addEventListener('click', consumoDeAgua)