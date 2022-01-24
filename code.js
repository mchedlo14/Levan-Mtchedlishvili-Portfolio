AOS.init({
    duration :1000
});

function effects(){
    $('#li-contact').click(function(){
        $('.slidedown-div').slideDown('slow')
        $('.slidedown-div').css('display','flex')
    })

    $('.close-icon').click(function(){
        $('.slidedown-div').slideUp('slow')
    })
}

effects()

function burgerbar(){
    let nav = document.getElementById('nav');
    let bar = document.getElementById('bar');
    let header = document.querySelector('.header-parent')

    bar.addEventListener('click',function(){
        nav.classList.toggle('active')
        header.classList.toggle('newheader')
    })
}

burgerbar()