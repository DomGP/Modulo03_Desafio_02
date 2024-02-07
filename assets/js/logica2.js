let span = document.querySelector('span')
let btnVerificar = document.getElementById('btn-verificar');
let btnVolver = document.getElementById('btn-volver')
let btnSiguiente = document.getElementById('btn-siguiente')

btnVerificar.addEventListener('click',function(){
    let a = Number(document.getElementById('input-a').value);
    let b = Number(document.getElementById('input-b').value);
    let c = Number(document.getElementById('input-c').value);

    let suma = a+b+c
    if(suma > 10){
        span.innerHTML= 'Llevas demasiados stickers'
    }else if (suma >=1 && suma <=10){
        span.innerHTML='Llevas ' + suma + ' stickers'
    }else{
        span.innerHTML='No llevas ningun sticker'
    }
})

btnVolver.addEventListener('click',function(){
    window.location.href = 'index1.html'
})

btnSiguiente.addEventListener('click',function(){
    window.location.href = 'index3.html'
})