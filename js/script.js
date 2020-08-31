$(document).ready(function(){
    $(".design").click(function(){
      $("#design-image").toggle();
      $("#descDesign").toggle();
    });
    $(".development").click(function(){
      $("#development-image").toggle();
      $("#development").toggle();
    });
    $(".product").click(function(){
      $("#product-image").toggle();
      $("#product").toggle();
    });


$("#work1").mouseover(function(){
  $("#overlay").show();
}).mouseout(function(){
  $("#overlay").hide();
});
$("#work2").mouseover(function(){
  $("#overlay2").show();
}).mouseout(function(){
  $("#overlay2").hide();
});
$("#work3").mouseover(function(){
  $("#overlay3").show();
}).mouseout(function(){
  $("#overlay3").hide();
});
$("#work4").mouseover(function(){
  $("#overlay4").show();
}).mouseout(function(){
  $("#overlay4").hide();
});
$("#work5").mouseover(function(){
  $("#overlay5").show();
}).mouseout(function(){
  $("#overlay5").hide();
});
$("#work6").mouseover(function(){
  $("#overlay6").show();
}).mouseout(function(){
  $("#overlay6").hide();
});
$("#work7").mouseover(function(){
  $("#overlay7").show();
}).mouseout(function(){
  $("#overlay7").hide();
});
$("#work8").mouseover(function(){
  $("#overlay8").show();
}).mouseout(function(){
  $("#overlay8").hide();
});
  });
 

  $(document).ready(function(){
    $("form#message-form").submit(function(){
      var name = $("input#input1").val();
      if ($("input#input1").val() && $("input#input2").val()){
        alert(name + ",thank you for reaching out to us. We will get back to you soon.");
      }
      else {
        alert("Please enter your name and email address!");
      }
      
    });
  
  });
  