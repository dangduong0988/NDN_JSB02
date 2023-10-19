const x = document.getElementsByClassName('btn-submit')
x[0].addEventListener('click', function(){
    const a = document.getElementById('ten-tai-khoan')
    const b = document.getElementById('mat-khau')
    const y = document.getElementsByTagName('p')
    if( a.value == ""){
        y[0].style.display ='inline'
    }
    else{
        display='none'
    }
    if( b.value == ""){
        y[1].style.display ='inline'
    }
    else{
        display='none'
    }
})

