//DOMContentLoaded on page load
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});

//Fetching the API
fetch("https://exercisedb.p.rapidapi.com/exercises", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "exercisedb.p.rapidapi.com",
		"x-rapidapi-key": "3dea8b2111msh4b6e81c8cbe1d41p1b3bffjsn3e1a1aa2c720"
	}
})
.then(response => response.json())
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});

//variables
const workoutLists= document.querySelector('#workoutLists')
const searchBarSubmit = document.getElementById('searchBar')
let finishedSearch = [];

//search bar make an array then filter through and show results matching on submit
searchBarSubmit.addEventListener('submit', function(e){
    const searchInput = e.target.value.toLowerCase();
    const filterSearch = finishedSearch.filiter((workout)=> {
        return workout.name.toLowerCase().includes(searchInput)
    })
    displaySearch(filterSearch)
})
console.log(searchBarSubmit)
//make object a string 
const displaySearch = (workout) => {
    const htmlString = workout
        .map((workouts) => {
            return `
            <li class="workouts">
                <h2>${workouts.name}</h2>
                <h2>${workouts.bodyPart}</h2>
                <h2>${workouts.equipment}</h2>
                <h2>${workouts.target}</h2>
            </li>
        `;
        })
        .join('');
    workoutLists.innerHTML = htmlString;
};
// mouseOver
// mouseLeave