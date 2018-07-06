$(document).foundation();
$(document).ready(function() {
    $('#hamburger').click(function() {
        if ($('#menu').hasClass('showMenu') == false) {
            $('#menu').addClass('showMenu');
        } else {
            $('#menu').removeClass('showMenu');
        }
    });
});