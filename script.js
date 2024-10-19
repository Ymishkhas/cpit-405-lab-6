// Counts
const initialLikes = 100;
const initialDislikes = 20;

let likeCount = initialLikes;
let dislikeCount = initialDislikes;

// get all UI elements
const likesBtn = document.getElementById("likeBtn");
const dislikesBtn = document.getElementById("dislikeBtn");
const commentsBox = document.getElementById("commentBox");
const submitBtn = document.getElementById("submit");
const clearBtn = document.getElementById("clear");
const commentsList = document.getElementById("commentsList");

// Set initial values for the buttons
likesBtn.innerText = "👍 " +  likeCount;
dislikesBtn.innerText = "👎 " +  dislikeCount;

// Handle like btn
likesBtn.addEventListener("click", () => {
    likeCount++;
    likesBtn.innerText = "👍 " +  likeCount;
})

// Handle dislike btn
dislikesBtn.addEventListener("click", () => {
    dislikeCount++;
    dislikesBtn.innerText = "👎 " +  dislikeCount;
})

// Handle submit a comment
submitBtn.addEventListener("click", () => {
    // set the commet value in the cookie
    // document.cookie += `comment=${commentsBox.value.trim()}`;
    // create a <p>
    const pElem = document.createElement("p");
    pElem.innerText = commentsBox.value.trim();
    commentsList.appendChild(pElem)
    commentsBox.value = "";
    setCookie();
})

// Hanlde clear
clearBtn.addEventListener("click", () => {
    commentsBox.value = "";
    document.cookie = "voted=true; path=/; expires=" + new Date().toUTCString();
    console.log("cookie cleared")
    window.location.reload();
})


function setCookie() {
    // Set a cookie that expires in a minute from now
    const expireOn = new Date(Date.now + 1 * 60 * 1000);
    const cookieString = `voted=true; comment=${commentsBox.value.trim()}; path=/; expires=${expireOn.toUTCString()}`;
    document.cookie = cookieString;
    
    // disable all buttons
    likesBtn.disabled = true;
    dislikesBtn.disabled = true;
    submitBtn.disabled = true;
}

// Check for cookies when the page load
window.onload = () => {
    if (document.cookie && document.cookie.indexOf("voted") > -1) {
        // disable all buttons
        likesBtn.disabled = true;
        dislikesBtn.disabled = true;
        submitBtn.disabled = true;
    }
}