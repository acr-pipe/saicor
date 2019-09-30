//jQuery is required to run this code
$(document).ready(function(){

  var features = $("#features"),
  listItems = features.find(".features, .wheel").find("li"),
  hoveredClass = "hovered";

    listItems.hover(
      function () {
        var elClass = $(this).attr("class");
        features.find("." + elClass).addClass(hoveredClass);
        features.find("ul").addClass(hoveredClass);
      },
      function () {
        features.find("." + hoveredClass).removeClass(hoveredClass);
      }
    )

  $(window).load(function () {
    $("#features").addClass("activate-circles");
  })

window.addEventListener("DOMContentLoaded",scrollLoop,false);

var requestAnimationFrame = window.requestAnimationFrame ||
                            window.mozRequestAnimationFrame ||
                            window.webkitRequestAnimationFrame ||
                            window.msRequestAnimationFrame;

  // var stars = document.querySelector("#stars");
  // var rocket = document.querySelector("#rocket");
  // var imgworld = document.querySelector("#imgworld");

  // var xScrollPosition;
  // var yScrollPosition;
  // var currPos = 0;

$(document).on("click","#pint",function(){
  $(".pint").css('color','#ECB83A');
  $(".pese").css('color','#222');
  $(".pest").css('color','#222');
});

$(document).on("click","#pese",function(){
  $(".pint").css('color','#222');
  $(".pese").css('color','#ECB83A');
  $(".pest").css('color','#222');
});

$(document).on("click","#pest",function(){
  $(".pint").css('color','#222');
  $(".pese").css('color','#222');
  $(".pest").css('color','#ECB83A');
});

$(".btnregister").mouseover(function() {
    $(this).addClass('animated flipInX');
  });
  // .mouseout(function() {
  //   $(this).removeClass('animated flipInX');
  // });

});

$("#vertiposellos").click(function(){
        $.ajax({
            async: false,
            url: '../dashboard/login',
            type: 'POST'
            })
            .done(function(data) {
                $("#login-content").html(data);
            });
    });




function scrollLoop(){
  xScrollPosition = window.scrollX;
  yScrollPosition = window.scrollY;
  currPos = window.scrollY - 150;

  setTranslate(0, yScrollPosition * 0.5, stars);
  // setTranslate(xScrollPosition, yScrollPosition * -0.5, rocket);
  // moverocket(currPos * 0.35, rocket);

  requestAnimationFrame(scrollLoop);
};

function setTranslate(xPos, yPos, el){
  el.style.transform = "translate3d(" + xPos + "," + yPos + "px, 0";
}

function moverocket(xPos, el){
  el.style.left = xPos + "px";
}

// ******************************************
// ASTRONATE
$(document).ready(function(){
    animateDiv();
});

function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 100;
    var w = $(window).width() - 100
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv(){
    var newq = makeNewPosition();
    var oldq = $('#astronaut').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    
    $('#astronaut').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDiv();
    });
    
};

function calcSpeed(prev, next) {
    
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    
    var greatest = x > y ? x : y;
    
    var speedModifier = 0.03;

    var speed = Math.ceil(greatest/speedModifier);

    return speed;

}

// var $mouseX = 0, $mouseY = 0;
// var $xp = -10, $yp = -10;

// $(document).mousemove(function(e){
//     $mouseX = e.pageX;
//     $mouseY = e.pageY;    
// });

// var $loop = setInterval(function(){
// // change 12 to alter damping higher is slower
// $xp += (($mouseX - $xp)/100);
// $yp += (($mouseY - $yp)/100);
// $("#astronaut").css({left:$xp +'px', top:$yp +'px'});  
// }, 30);