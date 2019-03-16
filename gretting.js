const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");
// These are making const to change html


const USER_LS = "currentUser",
  SHOWING_CN = "showing";

//   These guys are changing CSS

function saveName(text){
    localStorage.setItem(USER_LS,text);
}


function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",handleSubmit)
}


function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}
// Showing Hello blahblah

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}
// If currentUser is null show nothing and if there is currentUser
// is not null. show Hello thing.
function init() {
  loadName();
}

init();

// Callling function