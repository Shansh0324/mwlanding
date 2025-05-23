
Shery.imageEffect("#back", {
    style: 5,
    // debug: true,
    config : {"a":{"value":2,"range":[0,30]},"b":{"value":-0.95,"range":[-1,1]},"zindex":{"value":"-99969991","range":[-9999999,9999999]},"aspect":{"value":2.082236837977518},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.17,"range":[0,2],"_gsap":{"id":3}},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    gooey : true
  });


  var elems = document.querySelectorAll(".elem");

  elems.forEach((e)=>{
    var animate = false;
    var h1s = e.querySelectorAll("h1");
    var index = 0;
    document.querySelector("#main").addEventListener("click",function(){
      if(!animate){
        animate = true;
        gsap.to(h1s[index],{
          top :"-=100%",
          ease : Expo.easeInOut,
          duration : 0.8,
          onComplete : function(){
            gsap.set(this._targets[0],{top : "100%"});
            animate = false;
          }
        });
      
        index === h1s.length-1 ? (index = 0) :index++;
      
        gsap.to(h1s[index],{
          top :"-=100%",
          ease : Expo.easeInOut,
          duration : 0.8,
        });
      }
    });
  });
  

document.addEventListener("contextmenu", (event) => event.preventDefault());
document.addEventListener("keydown", (event) => {
  if (event.key === "F12" || 
      (event.ctrlKey && event.shiftKey && (event.key === "I" || event.key === "J")) || 
      (event.ctrlKey && event.key === "U")) {
      event.preventDefault();
  }
});


function navigateTo(page) {
  window.location.href = page;
}

document.addEventListener("keydown", function(event) {
    if (event.ctrlKey && event.key === "s") {
        event.preventDefault();
        return false;
    }
});

// window.addEventListener('load', function() {
//     const loader = document.getElementById('loader');
//     loader.style.opacity = '1';
    
//     setTimeout(function() {
//         loader.style.transition = 'opacity 0.5s ease';
//         loader.style.opacity = '0';
        
//         setTimeout(function() {
//             loader.style.display = 'none';
//         }, 500);
//     }, 2000);
// });

window.addEventListener('load', function() {
  const loader = document.getElementById('loader');
  loader.style.opacity = '1';
  
  setTimeout(function() {
      loader.style.transition = 'opacity 0.5s ease';
      loader.style.opacity = '0';
      
      setTimeout(function() {
          loader.style.display = 'none';
      }, 500);
  }, 2000);
});