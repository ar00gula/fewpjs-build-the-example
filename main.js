// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const hearts = document.getElementsByClassName("like-glyph")
for (let i = 0; i < hearts.length; i++) {
  let heart = hearts[i]

  heart.addEventListener('click', function() {
    mimicServerCall()
    .then(function(){
      if (heart.innerHTML == EMPTY_HEART) {
        heart.innerHTML = FULL_HEART
        heart.classList.add("activated-heart")
      } else {
        heart.innerHTML = EMPTY_HEART
        heart.classList.remove("activated-heart")
      }
    })
    .catch(function() {
      const modal = document.getElementById("modal")
      modal.classList.remove("hidden")
      modal.innerHTML = "An error message goes here!"
      setTimeout(function() {
        modal.classList.add("hidden")
      }, 5000)
    })
  })
}

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

