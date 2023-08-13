let aboutOffset = $('#about').offset().top
console.log(aboutOffset);
$(window).scroll(() => {
    let wScroll = $(window).scrollTop();
    if (wScroll > aboutOffset) {
        $('nav').addClass('bg-opacity-75')
        $('nav .container').removeClass('py-2')
        $('#btnUp').removeClass('d-none')
    } else {
        $('nav').removeClass('bg-opacity-75')
       $('nav .container').addClass('py-2')
        
        $('#btnUp').addClass('d-none')
        
    }
})
$('#btnUp').click(() => {
    $('html,body').animate({ scrollTop:"0px"},50)
})