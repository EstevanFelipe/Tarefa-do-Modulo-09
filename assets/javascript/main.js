$(document).ready(function(){
    $("#myForm").submit(function(e){
        e.preventDefault();
        var task = $("#task").val();
        $("#myList").append("<li><input type='checkbox' class='checkbox'> " + task + "</li>");
        $("#task").val('');
    });
  
    $("#myList").on("click", ".checkbox", function(){
        $(this).parent().toggleClass('done');
    });
});