
document.getElementById("btn").addEventListener("click",function(){
    const colors = 'rgb(' +random(255) + ',' +random(255) +','+random(255)+')'
    document.body.style.backgroundColor = colors;
    document.getElementById("colorcode").innerText = colors
})


function random(number){
    return Math.floor(Math.random()*(number+1))
}






