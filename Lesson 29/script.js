$('#document').ready(function(){
    $('#btn').click(function(){
        let inpVal = $("#inp").val();
        $('#display').html(`<h4 class='text-danger'>Display</h4>`)
        // $('#display').append(`<h4>${inpVal}</h4>`)
        // $('#display').prepend(`<h4>${inpVal}</h4>`)
        // $("#display").after(`<h4>${inpVal}</h4>`);
        // $("#display").before(`<h4>${inpVal}</h4>`);
        // $("#display").wrap("<div class='border border-danger'></div>");
        // $("#display").unwrap(".card-body");
        // $("#display").empty();
        // $("#display").remove();
        $('#inp').val('')
    })



    $("#show").click(function () {
      $("#card").show(500);
    });
    $("#hide").click(function () {
      $("#card").hide(500);
    });
    $("#toggle").click(function () {
      $("#card").toggle(500);
    });



    $("#fadeOut").click(function () {
      $("#card").fadeOut(500);
    });
    $("#fadeIn").click(function () {
      $("#card").fadeIn(500);
    });
    $("#fadeToggle").click(function () {
      $("#card").fadeToggle(500);
    });



    $("#slideUp").click(function () {
      $("#card").slideUp(500);
    });
    $("#slideDown").click(function () {
      $("#card").slideDown(500);
    });
    $("#slideToggle").click(function () {
      $("#card").slideToggle(500);
    });



    $("#animate").click(function () {
      $("#card").animate({'opacity':'0', 'width':'0', 'height':'0'});
    });

})