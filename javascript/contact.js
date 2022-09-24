
const formContainer = document.querySelector(".feedbackContainerContact");
const form = document.querySelector(".formContact");
const input = document.querySelectorAll("input");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  if(input) {
    form.style.display = "none";
    
    const submittedMessage = document.createElement("p")
    submittedMessage.innerHTML = 
    `Thank you for your feedback. 
    A member of our staff will be in touch shortly.`

    submittedMessage.className = "submitted"
    formContainer.prepend(submittedMessage);
  }
})


