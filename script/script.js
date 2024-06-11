let generarOracion = function(){
    let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
    let action = ['ate', 'peed', 'crushed', 'broke'];
    let what = ['my homework', 'my phone', 'the car'];
    let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
    let espacio = " ";
    let oracion = '';

    for (let i = 1 ; i <= 4; i++){
        if(i == 1){
            let randomNumberWho = Math.floor(Math.random()*who.length);
            oracion += who[randomNumberWho] + espacio;
        }
        else if(i == 2){
            let randomNumberAction = Math.floor(Math.random()*action.length);
            oracion += action[randomNumberAction] + espacio;
        }
        else if(i == 3){
            let randomNumberWhat = Math.floor(Math.random()*what.length);
            oracion += what[randomNumberWhat] + espacio;
        }
        else{
            let randonNumberWhen = Math.floor(Math.random()*when.length);
            oracion += when[randonNumberWhen]+".";
        }
    }

    document.getElementById("excuse").innerHTML = oracion
}
generarOracion()