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