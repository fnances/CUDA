$( document ).ready(function() {

  var loader1 = $('.loader1').ClassyLoader({
    speed: 50,
    fontSize: '30px',
    fontFamily: 'Titillium Web',
    fontColor: '#474d5d',
    lineColor: '#30BAE7',
    percentage: 0,
    lineWidth: 10,
    start: 'top',
    diameter: 90,
    remainingLineColor: 'rgb(223,232,237)',

  });
  var loader2 = $('.loader2').ClassyLoader({
    speed: 45,
    fontSize: '30px',
    fontFamily: 'Titillium Web',
    fontColor: '#474d5d',
    lineColor: '#D74680',
    percentage: 0,
    lineWidth: 10,
    start: 'top',
    diameter: 75,
    remainingLineColor: 'rgb(223,232,237)',
  });
  var loader3 = $('.loader3').ClassyLoader({
    speed:40,
    fontSize: '30px',
    fontFamily: 'Titillium Web',
    fontColor: '#474d5d',
    lineColor: '#15C7A8',
    percentage: 0,
    lineWidth: 10,
    start: 'top',
    diameter: 70,
    remainingLineColor: 'rgb(223,232,237)',
  });
  var loader4 = $('.loader4').ClassyLoader({
    speed: 35,
    fontSize: '30px',
    fontFamily: 'Titillium Web',
    fontColor: '#474d5d',
    lineColor: '#EB7D4B',
    percentage: 0,
    lineWidth: 10,
    start: 'top',
    diameter: 85,
    remainingLineColor: 'rgb(223,232,237)',
  });



  if ( $('.loader1').css('visibility') == 'visible')  {
    setTimeout(function(){
    loader1.draw(90);
    setTimeout(function(){ loader2.draw(75) }, 400)
    setTimeout(function(){ loader3.draw(70) }, 800)
    setTimeout(function(){ loader4.draw(85) }, 1200)
  },13000);
  }


  var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       0,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null // optional scroll container selector, otherwise use window
    }
  );
  wow.init();

});
