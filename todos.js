$("ul").on("click","li",function(){
  $(this).toggleClass("completed");
});

$("ul").on("click","span",function(event) {
  $(this).parent().fadeOut(500,function(){
    $(this).remove();
  });
  event.stopPropagation();
});

$("input[type='text']").keypress(function(e){
  if(e.which === 13){
    var text= $(this).val();
    $(this).val("");
    $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> "+text+"</li>" );
  }
});
$(".fa-plus").click(function() {
  $("input[type='text']").fadeToggle();
});
