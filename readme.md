jQuery HTML5 Audio Plugin
=========================

This was my first attempt at writing a jQuery plugin. This plugin creates an audio player on a webpage
using HTML5 audio if it's available to the browser, and using a Flash based player in other cases.
Consideration was taken for mobile platforms as well.  Probably needs updated to account for more
recent changes in compatibility of mobile options.

The audio player used in this example comes from http://flash-mp3-player.net/players/normal/documentation/
Using other Flash based audio players for your backup may require changes to the <object> tag portion of
this plugin.

One of the drawbacks of HTML5 <audio> tags at the time this plugin was generated was the need for multiple
file types to support all browsers.  Most browsers were fine with MP3s, but Firefox required its audio
in .ogg format to play with <audio>.  I haven't gone back to see if this is still relevant.