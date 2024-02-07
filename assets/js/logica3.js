let span = document.querySelector('span')

let btnIngresar = document.getElementById('btn-ingresar')
let btnVolver = document.getElementById('btn-volver')

btnIngresar.addEventListener('click',function(){
    let select1 = document.getElementById('number1').value
    let select2 = document.getElementById('number2').value
    let select3 = document.getElementById('number3').value

    let clave = select1+select2+select3

    if(clave === '911'){
        span.innerHTML='Password 1 correcto'
    }else if (clave === '714'){
        span.innerHTML='Password 2 correcto'
    }else{
        span.innerHTML='Passwrod incorrecto'
    }

})

btnVolver.addEventListener('click',function(){
    window.location.href='index2.html'
})