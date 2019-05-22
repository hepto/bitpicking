$(document).ready(function() {
	
	var url = 'https://anchor.fm/s/69da638/podcast/rss';
	
	feednami.load(url,function(result){
		if(result.error) {
			console.log(result.error);
		} else {
			var entries = result.feed.entries;
			var episodes = $('#episodes');
			for(var i = 0; i < entries.length; i++){
				var entry = entries[i];
				var li = $('<li/>')
					.addClass('episode')
			        .appendTo(episodes);
			    var link = $('<a/>')
			        .text(entry.title)
			        .attr('href', entry.link)
			        .appendTo(li);
			}
		}
	});
	
});