$(function(){
    var $window = $(window)

    function checkWidth() {
        if ($window.width() < 765) {
           $('.columns').css('margin-top', '20px');
           $('.six').css('padding', '0px 15px')
        } else {
           $('.columns').css('margin-top', '130px');
           $('.six').css('padding', '0')
        }
    }

    checkWidth();
    $(window).resize(checkWidth);
})
