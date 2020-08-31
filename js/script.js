$(document).ready(function(){
    $(".design").click(function(){
      $("#design-image").toggle();
      $("#descDesign").toggle();
    });
  });
  $(document).ready(function(){
    $(".development").click(function(){
      $("#development-image").toggle();
      $("#development").toggle();
    });
  });
  $(document).ready(function(){
    $(".product").click(function(){
      $("#product-image").toggle();
      $("#product").toggle();
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