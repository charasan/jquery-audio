/* jQuery HTML5 Audio Player with Flash backup
 * Created by Eddie Fuller
 * First jQuery plugin - be gentle
 */
(function($) {
  $.fn.htmlAudio = function(options) {
// We're detecting here whether or not the browser supports the HTML5 audio tag
    var elem = document.createElement('audio'),
        div = '',
        htmlaudio = !!elem['canPlayType'],
// There are a few special cases we'll need to address for the best cross-browser support
        opera = navigator.appName.toLowerCase() === "opera",
        firefox = (navigator.userAgent.indexOf("Firefox") !== -1),
        android = (navigator.userAgent.indexOf("Android") !== -1),
        settings = $.extend({
          ogg : '',
          mp3 : '',
          player: 'media/player_mp3.swf',
          id : 'audio',
          autoplay: true,
          controls: true,
          loop: false
        }, options);

     opera = !!opera;
     firefox = !!firefox;
     android = !!android;

     return this.each(function() {
      
      if(!htmlaudio || opera) // Opera's apparently speshul in HTML5 terms.  Quick fix until I can dig deeper
      {
        div = '';
        div  = '<';
        div += 'object type="application/x-shockwave-flash" data="'+ settings.player +'" width="200" height="20">\n';
        div += '  <param name="movie" value="'+ settings.player +'" />\n';
        div += '  <param name="bgcolor" value="#FFFFFF" />\n';
        div += '  <param name="FlashVars" value="mp3='+ settings.mp3 +'&amp;autoplay='+ settings.autoplay +'&amp;showstop=1" />\n';
        div += '</';
        div += 'object>\n';
        $(this).replaceWith(div);
      }
      
      else if(android)
      {
        div = "Android does not fully support HTML5 audio nor Flash at this time.";
        $(this).html(div);    
      }
      else
      {
        div = '';
        div  = '<';
        div += 'audio id="'+ settings.id +'" '+(settings.autoplay ? 'autoplay="autoplay"': '') + ' ' + (settings.controls ? 'controls="controls"' : '') + '>\n';
        div += '  <p>Your browser doesn\'t support HTML5 or Flash.</p>\n';
        div += '</';
        div += 'audio>\n';
        $(this).replaceWith(div);
        
        if(!firefox)
          $('audio#'+settings.id+'')[0].src = settings.mp3;
        else
          $('audio#'+settings.id+'')[0].src = settings.ogg;
      }
      
    });
  }
})(jQuery);
