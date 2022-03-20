//DOMContentLoaded on page load
window.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed')
});
getWorkouts()
addEventListeners()

//Fetching the API
let exercises

function getWorkouts() {
  const url = "https://exercisedb.p.rapidapi.com/exercises"
	fetch(url, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "exercisedb.p.rapidapi.com",
            "x-rapidapi-key": "3dea8b2111msh4b6e81c8cbe1d41p1b3bffjsn3e1a1aa2c720"
        }
    })
		.then(res => {
			return res.json() 
		})
		.then(data => {
			exercises = data
			console.log(exercises)
		})
}

//Drop down to select body part submit, create array.
function addEventListeners() {
  const bodyDrop = document.getElementById('submit')

  bodyDrop.addEventListener('click', () => {
      const body = document.getElementById('bodyPart-dropdown')
      const selectedPart = [body].map(option => option.value)
      console.log(selectedPart)
      renderParts(selectedPart) 
  })
}
//render the body parts add like functionality
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

function renderParts(selectedPart) {
  console.log("WORKOUT")
    const workoutDiv = document.getElementById('workouts')
    workoutDiv.innerHTML = ' '
    console.log(selectedPart)
    let filteredParks = parks.data.filter(el => {
            return el.states.includes(selectedPart)
        }
    )
    console.log(filteredParks)

    for (let i = 0; i < filteredParks.length; i++) {
            const ul = document.createElement('ul')
            const img = document.createElement('img')
            const descrip = document.createElement('p')
            const directions = document.createElement('a')
            const liker = document.createElement('button')
            liker.textContent = EMPTY_HEART
            directions.innerText = 'Get Directions'
            directions.href = filteredParks[i].directionsUrl
            directions.target = '_blank'
            img.src = filteredParks[i].images[0].url
            ul.innerText = filteredParks[i].fullName
            descrip.innerText = filteredParks[i].description
            workoutDiv.append(img, ul, descrip, directions, liker) 
            liker.addEventListener('click', likePark)
            }
        }  
  

  const likePark = (e) => {
    const liker = e.target
    const like = liker.textContent
    if(like===EMPTY_HEART) {
      liker.textContent = FULL_HEART
    } else {
      liker.textContent = EMPTY_HEART
    }
  }
// mouseOver
// mouseLeave