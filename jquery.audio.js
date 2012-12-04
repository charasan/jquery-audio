/* jQuery HTML5 Audio Player with Flash backup
 * Created by Eddie Fuller @ Anedix Technologies
 * First jQuery plugin - be gentle
 */
(function($) {
  $.fn.htmlAudio = function(options) {
// We're detecting here whether or not the browser supports the HTML5 audio tag
    var elem = document.createElement('audio');
    var opera = navigator.appName.toLowerCase() == "opera";
    opera = !!opera;
    var firefox = (navigator.userAgent.indexOf("Firefox") != -1)
    firefox = !!firefox;
    var android = ((navigator.userAgent.indexOf("Android") != -1) && navigator.mimeTypes["application/x-shockwave-flash"] != undefined)
    android = !!android;
    
    var htmlaudio = !!elem['canPlayType'];

    settings = $.extend({
      ogg : '',
      mp3 : '',
      player: 'media/player_mp3.swf',
      id : 'audio',
      autoplay: true,
      controls: true,
      loop: false
    }, options);
    
    return this.each(function() {
      // Opera's apparently speshul in HTML5 terms.  Quick fix until I can dig deeper
      // Android is another problem.  It identifies itself as being able to support HTML5 audio, then fails to do so.
      //  With recent updates, we can use the Flash player in Android browsers now, if they have it.  The android variable
      //  has been altered to check both for the Android OS and if Flash installed in order to be true
      //  Android still wonky with HTML5 audio as of 3/2012
      if(!htmlaudio || opera || android )
      { 
        var div = '';
        div  = '<';
        div += 'object type="application/x-shockwave-flash" data="'+ settings.player +'" width="200" height="20">\n';
        div += '  <param name="movie" value="'+ settings.player +'" />\n';
        div += '  <param name="bgcolor" value="#FFFFFF" />\n';
//        div += '  <param name="FlashVars" value="mp3='+ settings.mp3 +'&amp;autoplay='+ settings.autoplay +'&amp;showstop=1" />\n';
        div += '  <param name="FlashVars" value="mp3=media/flash.mp3&amp;autoplay='+ settings.autoplay +'&amp;showstop=1" />\n';
        div += '</';
        div += 'object>\n';
        $(this).replaceWith(div);
      }
/*      
      else if(android)
      {
        var div = "Android does not fully support HTML5 audio nor Flash at this time.";
        $(this).html(div);    
      }
*/    else
      {
        var div = '';
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