let barIcon = document.getElementById("barIcon")
function navToggle() {
    let navContent = document.getElementById("navContent")
    if (navContent.style.display === "none") {
        navContent.style.display = "block";
    } else {
        navContent.style.display = "none";
    }
}