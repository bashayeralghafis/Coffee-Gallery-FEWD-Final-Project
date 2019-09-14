 $(".type button").click(function() {
     $(".type button").removeClass("selected");

     $(this).addClass("selected");

     var dataFilter = $(this).data('filter');

     if (dataFilter == "all") {
         $(".item").css('display', 'block');
     } else {

         $(".item").css('display', 'none');

         $("." + dataFilter).css('display', 'block');


     }
 });