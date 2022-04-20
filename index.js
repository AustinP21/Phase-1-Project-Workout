//DOMContentLoaded on page load
//import {API_KEY} from "./config.js"
//console.log(API_KEY)
const image1 = document.getElementById('img1')
const image2 = document.getElementById('img2')
const image3 = document.getElementById('img3')
const image4 = document.getElementById('img4')

window.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed')
    getWorkouts()
    addEventListeners()
});

//Fetching the API
let exercises = []

function getWorkouts() {
  const url = "https://exercisedb.p.rapidapi.com/exercises"
	fetch(url, {
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

//Drop down to select body part, submit, array
function addEventListeners() {
  const bodyDrop = document.getElementById('submit')
  bodyDrop.addEventListener('click', () => {
      const body = document.getElementById('bodyPart-dropdown')
      const selectedPart = [body].map(option => option.value)
      console.log(selectedPart)
      renderParts(selectedPart)
  })
  //foreach mouseover mouseleave for imgs
  document.querySelectorAll('#imgBox img').forEach(el => {
      el.addEventListener('mouseover', (e) => {
        e.target.classList.add('resize')
      })
      el.addEventListener('mouseleave', (e) => {
        e.target.classList.remove('resize')
      })
  });
} 
//render the body parts add like functionality
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

function renderParts(selectedPart) {
    console.log("WORKOUT")
      const workoutDiv = document.getElementById('workouts')    
      workoutDiv.innerHTML = ' '
      console.log(selectedPart)
      let fullExercises = exercises.filter(el => {
              return el.bodyPart.includes(selectedPart)
          }
      )
      console.log(fullExercises)
  
      for (let i = 0; i < fullExercises.length; i++) {
              const ul = document.createElement('ul')
              const equip = document.createElement('p')
              const identify = document.createElement('p')
              const description = document.createElement('p')
              const gifs = document.createElement('img')
              const liker = document.createElement('button')
              liker.textContent = EMPTY_HEART
              ul.innerText = fullExercises[i].bodyPart
              equip.innerText = fullExercises[i].equipment
              identify.innerText = fullExercises[i].id
              gifs.src = fullExercises[i].gifUrl 
              description.innerText = fullExercises[i].name
              workoutDiv.append(ul, description, liker, identify, equip, gifs) 
              liker.addEventListener('click', likeWorkout)
              }
          }  
    
  
    const likeWorkout = (e) => {
      const liker = e.target
      const like = liker.textContent
      if(like===EMPTY_HEART) {
        liker.textContent = FULL_HEART
      } else {
        liker.textContent = EMPTY_HEART
      }
    }


    //ul.innerText = fullExercises[i].fullBody
    //description.innerText = fullExercises[i].description