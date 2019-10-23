$(document).ready(function(){
  $("#formOne").submit(function(){
    var nameInput = $("input#name").val();
    var infoInput = $("input#info").val();
    var dateInput = $("input#date").val();
    var timeInput = $("input#time").val();

    $("#name").val("");
    $("#info").val("");
    $("#date").val("");
    $("#time").val("");


  });
});
