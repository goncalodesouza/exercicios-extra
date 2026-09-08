const profile = document.querySelector("#profile");
const summary = profile.querySelector("summary");

summary.addEventListener("click", () => {
    summary.style.display = "none";
});