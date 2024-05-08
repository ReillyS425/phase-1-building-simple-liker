const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

const heartElem = document.querySelectorAll(".like-glyph");

function toggleHeartCallBack(like) {
  const heartClicked = like.target;

  if (heartClicked.classList.contains("liked")) {
    mimicServerCall()
      .then(function(unlikeMsg) {
        alert("You have unliked the post!");
        alert(unlikeMsg);
        heartClicked.innerText = EMPTY_HEART;
        heartClicked.classList.remove("liked");
        heartClicked.classList.remove("activated-heart");
      });
  } else {
    mimicServerCall()
      .then(function(serverMsg) {
        if (heartClicked.classList.contains("liked")) {
          alert("You have unliked the post!");
          heartClicked.innerText = EMPTY_HEART;
        } else {
          alert("You have liked the post!");
          heartClicked.innerText = FULL_HEART;
        }
        alert(serverMsg);
        heartClicked.classList.toggle("liked");
        heartClicked.classList.toggle("activated-heart");
      })
      .catch(function (error) {
        
        setTimeout(function(){document.getElementById("modal").classList.remove("hidden")}, 3000)
      })
  }
}

for (likeSymbol of heartElem) {
  likeSymbol.addEventListener("click", toggleHeartCallBack);
}
  
  
 






//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
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
