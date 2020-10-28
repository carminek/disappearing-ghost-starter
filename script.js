$(".hide-button").click(function(){
  $(".ghost-image").hide();
});

$(".show-button").click(function(){
  $(".ghost-image").show();
});
                        
 $(".update-img-button").click(function(){
  $(".ghost-image").attr("src","https://cdn4.vectorstock.com/i/1000x1000/56/08/halloween-comic-icons-scary-ghost-with-red-eyes-vector-27285608.jpg");
 });       

$(".message-button").click(function(){
  let message = $("input").val();  
    $(".message").append(message);
});

$(".name-button").click(function(){
  let name = $("input").val();
  $("h1").text("My name is "+name);
});