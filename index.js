console.log("...page loaded");
//Clicking the edit profile button will change user's name from Jane Doe to any other name

function editUserName() {
  let name = (document.getElementById("user-name").innerHTML = "John Doe");
}

//Clicking either button will remove the user from the requests list

function removeFromList(e) {
  console.log(e);
  const element = document.querySelector(e);

  element.remove();
  //BONUS: either button decreases the "Connection Requests" number

  document.getElementById("request-badge").innerText--;
}

function accept(e) {
  const element = document.querySelector(e);
  element.remove();

  document.getElementById("connection-badge").innerText++;
  document.getElementById("request-badge").innerText--;
  // let element = document.querySelector(e);
  // console.log(element);
  // element.remove();
}

//Bonus: the accept button also increases the "your connection" number
