const btnSubmit = document.querySelector("#btnSubmit")
const inputBox = document.querySelectorAll(".inputBox")
const forms = document.querySelector(".forms")
const email = document.querySelector("#email")
let regEx = new RegExp("[a-z0-9]+@[a-z]+\.[a-z]{2,3}")
const EmailGroup = document.querySelector("#EmailGroup")
btnSubmit.onclick = () => {
  inputBox.forEach(input => {
    if(input.value == "" || input.value == null){
      input.focus();
    }
  })
  if(!regEx.test(email.value)){
    document.querySelector("#invalid").style.display = 'block'
    return false
  }
  document.querySelector("invalid").style.display = "none";
  return true
}

email.onkeyup = () => {
  if(!regEx.test(email.value))return
  document.querySelector("#invalid").style.display = "none"
}
