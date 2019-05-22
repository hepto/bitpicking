renderRSS = function(rss){
  	var entries = rss.responseData.feed.entries;
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
};