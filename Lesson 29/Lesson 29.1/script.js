$(document).ready(function () {
  $("#btn").click(function () {



    let Login = $("#login").val();
    if (Login === "") {
      $("#display").html(
        `<span class='text-danger'>Login qatorni to'ldiring</span>`
      );
    }else{
        $("#display").empty()
    }



    let Parol = $("#parol").val();
    if (Parol === "") {
      $("#display2").html(
        `<span class='text-danger'>Parol qatorni to'ldiring</span>`
      );
    }else{
        $("#display2").empty()
    }



  });
});
