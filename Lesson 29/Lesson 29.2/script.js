$(document).ready(function(){
    $('.div').click(function(){
        $("#display").val(
            $("#display").val() + $(this).val()
        );
    });
    $("#clear").click(function(){
        $("#display").val("");
    });
    $(".one").click(function(){
        $("#display").val(
            eval($("#display").val())
        );
    });
});