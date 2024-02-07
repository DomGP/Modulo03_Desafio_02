let img = document.getElementById('img')
let button = document.getElementById('btn-1')

img.addEventListener('click', function(){
    let border = img.style.border
    if(border === '0px'){
        img.style.borderRadius='50px'
        img.style.border='6px solid lightblue'
    }else{
        img.style.border='0px'
    }
})

button.addEventListener('click',function(){
    window.location.href = 'index2.html'
})