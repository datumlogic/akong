// Can also be used with $(document).ready()
$(window).load(function() {
 
  console.log('loading vimeo fix');
  // Vimeo API nonsense
  var vimeoPlayer = document.querySelector('iframe');

  $f(vimeoPlayer).addEvent('ready', ready);

  function ready(player_id) {

      froogaloop = $f(player_id);

      function setupEventListeners() {
	      
          function onPlay() {
              froogaloop.addEvent('play',
              function(data) {
                  $('.flexslider').flexslider("pause");
              });
          }
          
          function onPause() {

              froogaloop.addEvent('pause',
              function(data) {
	              $('.flexslider').flexslider("next");
                  $('.flexslider').flexslider("play");
              });
          }
          
          function onFinish() {
              froogaloop.addEvent('finish',
              function(data) {
	              $('.flexslider').flexslider("next");
              });
          }
          
          onPlay();
          onPause();
          onFinish();
      }
      setupEventListeners();
  }

});