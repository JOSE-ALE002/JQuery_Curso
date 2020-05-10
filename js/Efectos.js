$(document).ready(function () {
    var contenido = $('#resultado');

    $('.btn-primary').click(function (e) { 
        e.preventDefault();
        contenido.hide(1000);
    });

    $('.btn-danger').click(function (e) { 
        e.preventDefault();
        contenido.show(1000);
    });

    $('.btn-warning').click(function (e) { 
        e.preventDefault();
        contenido.toggle(1000);        
    });
});
