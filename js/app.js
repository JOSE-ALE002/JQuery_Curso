$(document).ready(function () {

// ===========================================================================

   /*  SELECTORES EN JQUERY
   
   // Seleccion por etiquera
   $('h1').html('Etiqueta h1'); 

    // Seleccion por clases
    $('.display-6').html('Hola Mundo');

    //Seleccion por id
    $('#h1').html('Hello World');

    // Seleccion de todos los parrafos que estan en contenedor
    $('.contenedor p').html('Hola Mundo')    

    // Seleccion del primer hijo 'p' de contenedor
    $('.contenedor p:first').html('Hola Mundo maravilloso')

    // Seleccion del ultimo hijo 'p' de contenedor
    $('.contenedor p:last').html('Hola Mundo maravilloso y hermoso')*/
// ===========================================================================

    /*AGREGAR Y REMOVER CLASES CON JQUERY*/

    $('#titulo').addClass('text-danger');
    $('#titulo').removeClass('display-2');

// ===========================================================================
    /*CREAR ELEMENTOS DINAMICOS CON JQUERY*/

    //creamos un elemento al final del padre
    $('.contenedor2').append('<h1>Este es un elemento al final</h1>');

    //creamos un elemento al principio del padre
    $('.contenedor2').prepend('<p>Lorem ipsum combre</p>');

// ===========================================================================
    /*EDICION DE ESTILOS CON JQUERY*/

    //edicion de una propiedad
    $('#azul').css('color', 'orange');

    //edicion de varias propiedades
    $('#azul').css({textAlign: 'center', background: 'red', padding: `20px`});

// ===========================================================================

    // ELIMINAR ELEMENTOS DEL DOM
    
    //Quitamos el elemento de la vista o del Dom
    //$('#azul').remove();

    //El elemento permanece en el Dom pero con display: none
    // $(`#azul`).hide();

// ===========================================================================

    // MANIPULACION DE ATRIBUTOS CON JQUERY

    $('a').attr('href', 'http://www.google.com');

    $('.contenedor2 a:last').attr('href', 'http://www.wikipedia.com');

// ===========================================================================    

    //EVENTOS CON JQUERY

    var parrafo = $('#resultado p');
    $('.btn-primary').click(function (e) { 
        parrafo.addClass('display-4');        
        e.preventDefault();
    });

    $('.btn-danger').click(function (e) { 
        parrafo.removeClass('display-4')        
    });

    //Evento toggleClass
    $('.btn-warning').click(function (e) { 
        parrafo.toggleClass('display-4')
        e.preventDefault();        
    });

    //Evento KeyUp
    $('#formulario').submit(function (e) { 
        e.preventDefault();

        //Esta funcion retorna lo que el usuario digito en la caja de texto
        var nombre = $('#nombre').val();
        console.log(nombre);        
    });

    // ===========================================================================    

    //EFECTOS CON JQUERY
    
});
