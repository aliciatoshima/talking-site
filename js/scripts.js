$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#user").append("<li>Click ME !!!!!</li>");
    //.css('background-color', 'green');
    $("ul#webpage").append("<li>OR CLICK ME!!</li>");
    //$('ul#user').children("li").css('background-color', 'green');

     $("ul#user").children("li").last().click(function() {
       console.log("it clicked");
       $(this).after('<img src="https://i.redd.it/zihve8s72yd11.jpg" alt="hippo">');
     });
    // $("ul#webpage").children("li").last().click(function() {
    //   $(this).remove();
    // });
  });


  $("button#goodbye").click(function() {
    $("ul#user").append("<li>Goodbye!</li>").children("li").last().css('background-color', 'purple');
    $("ul#webpage").append("<li>Goodbye, dear user!</li>");
  });

  $("button#stop").click(function() {
    $("ul#user").append("<li>Stop copying me!</li>");
    $("ul#webpage").append("<li>Pardon me. I meant no offense.</li>");
  });


});


//<img src="https://i.redd.it/zihve8s72yd11.jpg" alt="hippo"
