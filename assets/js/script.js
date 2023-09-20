let seeIcons = document.getElementsByClassName("see");
let caps = document.getElementsByClassName("capability");

for (let i = 0; i < seeIcons.length; i++) {
    seeIcons[i].addEventListener("click", () => {
        if (caps[i].classList.contains("open")) {
            caps[i].classList.remove("open");
            seeIcons[i].classList.remove("click");
        } else {
            caps[i].classList.add("open");
            seeIcons[i].classList.add("click");
        }
    })
}