(function($) {

	// on document ready
	$(document).ready(function()
	{
		var stream = {
			title: "Sender der Künste",
			mp3: "http://s13.pop-stream.de:13600/;stream/1"
		},
		ready = false;

		$( '#radio-player' ).jPlayer({
			ready: function (event) {
				ready = true;
				$(this).jPlayer("setMedia", stream);
			},
			pause: function() {
				$(this).jPlayer("clearMedia");
			},
			error: function(event) {
				if(ready && event.jPlayer.error.type === $.jPlayer.error.URL_NOT_SET) {
					// Setup the media stream again and play it.
					$(this).jPlayer("setMedia", stream).jPlayer("play");
				}
			},
			swfPath: './../vendor/jplayer',
			supplied: "mp3",
			preload: "none",
			wmode: "window",
			useStateClassSkin: true,
			autoBlur: false,
			keyEnabled: true
		});

		$('.jp-play').click(function(e)
		{
			var icon = $(this).find('i');

			icon.toggleClass('glyphicon-play-circle');
			icon.toggleClass('glyphicon-pause');
		});
	});

})(jQuery);