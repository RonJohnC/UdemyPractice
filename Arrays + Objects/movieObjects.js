// alert("Welcome to the movie database!")




var movie = [
	{title: "Casablanca", rating: "5 stars", seen: true},
	{title: "Event Horizon", rating: "1 stars", seen: true},
	{title: "Super Troopers 2", rating: "3 stars", seen: false},
	{title: "Caddy Shack", rating: "5 stars", seen: true}
]

for (i = 0; i<movie.length; i++){
	
	if (movie[i].seen === false) {
		var haveSeen = "You have not seen "
	} else {
		var haveSeen = "You have seen "
	}
	console.log(haveSeen + '"' + movie[i].title + '"' + "." + " It's rating is " + movie[i].rating + ".");

}



