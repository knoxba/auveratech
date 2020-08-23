var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://community-hacker-news-v1.p.rapidapi.com/item/8863.json?print=pretty",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "community-hacker-news-v1.p.rapidapi.com",
		"x-rapidapi-key": "c872d14db5msh70d63e886515539p11ee0djsn50c7fb212a89"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
	str = JSON.stringify(response, null, 4);
	console.log(str); // Logs output to dev tools console.
	//alert(str); // Displays output using window.alert()
});