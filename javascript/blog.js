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
    const localTime = dateTime.local();
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
      <p>${userComment}</p>
    </div>`
    submittedComment.appendChild(commentBox);

    commenterName.value = "";
    commenterEmail.value = "";
    commenterComment.value = "";
  }
})


//ACCORDION FOR COMMENTS SECTION

const accordionItemHeader = document.querySelector(".accordionItemHeader");
  accordionItemHeader.addEventListener("click", () => {
    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;

    const scrollHeight = accordionItemBody.scrollHeight;
    let updatedScrollHeight; 

    const retrieveScrollHeight = () => { 
      updatedScrollHeight = scrollHeight + "px";
    }

    retrieveScrollHeight();
    accordionItemBody.load();

    if (accordionItemHeader.classList.contains("active")) {

      const updateHeight = () => {
      accordionItemBody.style.maxHeight = updatedScrollHeight;  
      }
      updateHeight();
    } else {
      accordionItemBody.style.maxHeight = 0;
    }
  })


  // const accordionItemBody = accordionItemHeader.nextElementSibling;

  //   const scrollHeight = accordionItemBody.scrollHeight;

  //   if (accordionItemHeader.classList.contains("active")) {
    
  //     accordionItemBody.style.maxHeight = scrollHeight + "px";  
  //   } else {
  //     accordionItemBody.style.maxHeight = 0;
  //   }