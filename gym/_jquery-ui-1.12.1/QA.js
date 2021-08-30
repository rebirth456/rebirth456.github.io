
        $(document).ready(function(){
        $('#icon').click(function(){
            $('ul').toggleClass('show')
        });
    });
    jQuery(function($){
        $("p.Question").css({cursor:"pointer"}).click(function(){
        $(this).next().toggle("normal");
        });
        });