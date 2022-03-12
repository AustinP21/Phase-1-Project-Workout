//Declerations

//Selectors

//Eventlisteners

//Everything else
fetch("https://exercisedb.p.rapidapi.com/exercises/bodyPart/chest", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "exercisedb.p.rapidapi.com",
		"x-rapidapi-key": "3dea8b2111msh4b6e81c8cbe1d41p1b3bffjsn3e1a1aa2c720"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});