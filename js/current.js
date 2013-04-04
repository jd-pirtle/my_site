//highlight active page

$(document).ready(function() {
    $('a').each(function() {
        if ($(this).prop('href') == window.location.href) {
            $(this).addClass('selected');
        }
    });
});