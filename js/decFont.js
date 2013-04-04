var size;
var pars;
pars = $("#rightCol p");
for (var i = 0; i < pars.length - 1; i++) {
    size = parseInt($(pars[i]).css('font-size'));
    $(pars[i+1]).css('font-size', (size * 0.9 + "px"));
}
