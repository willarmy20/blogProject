

const runTimer = function(){
    timeLeft -= 1
    timeLeftDisplay.innerHTML = `You have ${timeLeft} seconds left`
    if (timeLeft <= 1){
        window.alert(`Times Up! You finished with ${score} brownie points`)
    }
};

const runTimer = setInterval(, 1000);

function countDown(){
    
}
// function countDown(){
//     for (i = 0; i <= 90; i++){
//         timeLeftDisplay.innerHTML = `You have ${timeLeft} seconds left`
//         timeLeft -= 1
//         sleep(1)
//     }
//     if (timeLeft = 0){
//         window.alert(`Times Up! You finished with ${score} brownie points`)
//     }
// }
countDown()