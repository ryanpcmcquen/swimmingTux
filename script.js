$(document).ready(function() {
  $(document).keydown(function(key) {
    switch(parseInt(key.which,10)) {
      case 37: //left arrow
        $('img').animate({left: "-=10px"}, 'fast');
        break;
      case 40: //up arrow
        $('img').animate({top: "+=10px"}, 'fast');
        break;
      case 38: //down arrow
        $('img').animate({top: "-=10px"}, 'fast');
        break;
      case 39: //right arrow
        $('img').animate({left: "+=10px"}, 'fast');
        break;
      default:
        break;
    }
  });
});