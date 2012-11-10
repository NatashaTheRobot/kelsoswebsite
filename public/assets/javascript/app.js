$(function(){
    var $window = $(window)

    function checkWidth() {
        if ($window.width() < 765) {
            $('.columns').css('margin-top', '20px');
            $('.six').css('padding', '0px 15px');
            $('img').css('max-width', '75%');
            $('img').css('margin-left', '30px');
        } else {
            $('.columns').css('margin-top', '130px');
            $('.six').css('padding', '0');
            $('img').css('max-width', '100%');
            $('img').css('margin-left', '0');
        }
    }

    checkWidth();
    $(window).resize(checkWidth);
})
