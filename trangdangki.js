const x = document.getElementsByClassName('btn-submit')
x[0].addEventListener('click', function(){
    const a = document.getElementById('email')
    const b = document.getElementById('ten-hien-thi')
    const c = document.getElementById('ten-dang-nhap')
    const d = document.getElementById('mat-khau')
    const y = document.getElementsByTagName('p')
    if( a.value == ""){
        y[3].style.display ='block'
    }
    else{
        display='none'
    }
    if( b.value == ""){
        y[4].style.display ='block'
    }
    else{
        display='none'
    }
    if( c.value == ""){
        y[5].style.display ='block'
    }
    else{
        display='none'
    }
    if( d.value == ""){
        y[6].style.display ='block'
    }
    else{
        display='none'
    }
})