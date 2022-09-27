//FORM SUBMISSION 

const form = document.querySelector("form");
const commenterName = document.querySelector("#name");
const commenterEmail= document.querySelector("#email")
const commenterComment = document.querySelector("textarea");
const commentsPosted = document.querySelector(".commentsPosted")

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if(commenterName && commenterComment) {

    const userName = commenterName.value;
    const userComment = commenterComment.value;

    const dateTime = luxon.DateTime;
    const localTime = dateTime.fromObject();
    const formattedTime = localTime.toLocaleString({year:"numeric", month:"short", weekday: "long", day:"numeric", hour12:true, hour: "numeric", minute:"2-digit"});

    const placeholderComment = document.querySelector(".placeholderComment")
    placeholderComment.style.display = "none";

    const submittedComment = document.createElement("li")
    commentsPosted.prepend(submittedComment);

    const commentBox = document.createElement("div");
    commentBox.className = "commentPost"
    commentBox.innerHTML = 
    `<div class="userComment">
      <p class="commentName">${userName}</p>
      <p class="commentDate">${formattedTime}</p>
      <p class= "userComment">${userComment}</p>
    </div>`
    submittedComment.appendChild(commentBox);

    commenterName.value = "";
    commenterEmail.value = "";
    commenterComment.value = "";
  }
})


// ACCORDION FOR COMMENTS SECTION


const accordionItemHeader = document.querySelector(".accordionItemHeader");
 
  accordionItemHeader.addEventListener("click", () => {
  accordionItemHeader.classList.toggle("active");

  const accordionItemBody = document.querySelector(".accordionItemBody");

    if (accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.setProperty("max-height", "100%");
    } else {
      accordionItemBody.style.setProperty("max-height", "0");
    }
  })
