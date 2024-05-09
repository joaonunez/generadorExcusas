let generarOracion = function(){
    let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
    let action = ['ate', 'peed', 'crushed', 'broke'];
    let what = ['my homework', 'my phone', 'the car'];
    let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
    let oracion = '';
    for (let i = 1 ; i <= 4; i++){
        if(i == 1){
            let randomNumberwho = Math.floor(Math.random()*who.length);
            oracion += who[randomNumberwho] + ' ';
        }
        else if(i == 2){
            let randomNumberaction = Math.floor(Math.random()*action.length);
            oracion += action[randomNumberaction] + ' ';
        }
        else if(i == 3){
            let randomNumberwhat = Math.floor(Math.random()*what.length);
            oracion += what[randomNumberwhat] + ' ';
        }
        else{
            let randonNumberwhen = Math.floor(Math.random()*when.length);
            oracion += when[randonNumberwhen]+ '.';
        }
    }
    document.getElementById("excuse").innerHTML = oracion
}
generarOracion()
