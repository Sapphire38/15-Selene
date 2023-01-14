    // This is an example with default parameters

    simplyCountdown('.timer', {
        year: 2023, // required
        month: 3, // required
        day: 25, // required
        hours: 22, // Default is 0 [0-23] integer
        minutes: 0, // Default is 0 [0-59] integer
        seconds: 0, // Default is 0 [0-59] integer
        words: { //words displayed into the countdown
            days: { singular: '', plural: '' },
            hours: { singular: '', plural: '' },
            minutes: { singular: '', plural: '' },
            seconds: { singular: '', plural: '' }
        },
        plural: true, //use plurals
        inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
        inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
        // in case of inline set to false
        enableUtc: false, //Use UTC or not - default : false
        onEnd: function() { return; }, //Callback on countdown end, put your own function here
        refresh: 1000, // default refresh every 1s
        sectionClass: 'simply-section', //section css class
        amountClass: 'simply-amount', // amount css class
        wordClass: 'simply-word', // word css class
        zeroPad: true,
        countUp: false
});





var mensajes
let nombre =  document.getElementById("nombre")
let option = document.getElementById("option")
function  enviar(){
     
    if(option.value == "voy"){
        mensajes = ` <a id="envio" href="https://api.whatsapp.com/send?phone=5493512375533&text=Hola, soy/somos ${nombre.value} y voy/vamos a los 15 de Sele.">enviar</a>`
    }else{
        mensajes = ` <a id="envio" href="https://api.whatsapp.com/send?phone=5493512375533&text=Hola, soy/somos ${nombre.value} y no puedo/podemos ir a los 15 de Sele.">enviar</a>`
    }

   
 
    document.getElementById("link").innerHTML = mensajes

    document.getElementById("envio").click()


  

}


let date = new Date();
let dia = date.getDate();
let mes = date.getMonth();


if(dia >= 6 && mes >= 2){
    document.getElementById("form").style.display = "none"
}


