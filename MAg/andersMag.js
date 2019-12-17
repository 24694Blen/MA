// gsap.to(".st4", {duration: 2, y: "random(-100, -200)"});
gsap.set("#hart", {transformOrigin: '50% 50%'})
// gsap.to("#hart", {scale:1.2, ease: 'bounce', duration:"2"});

$(".cls-6").mouseenter(function(){
    TweenLite.to(this, 1, {scale:1.2, ease: "bounce"})
  })

  $(".cls-6").mouseleave(function(){
    TweenLite.to(this, 1, {scale:1, ease: "bounce.out"})
  })

  $("#a_Anders").mouseover(function(){
      TweenLite.to(".st4", 1, {duration: 2, y: "random(-100, -200)"})
  })

  $("#s").mouseover(function(){
    TweenLite.to(".st4", 1, {duration: 2, y: "0"})
})


$("#a_Ma").click(function(){
    TweenLite.to(".st2, .st3", {duration:1.5, rotation:-360})
  })

  $("#m").mouseover(function(){
    TweenLite.to(".st2, .st3", {duration:1.5, rotation:360})
  })
  
  


