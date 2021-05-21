const inputEl = document.querySelectorAll(".input");
let btnEl = document.querySelector("#btn");
let pEl = document.querySelector(".validity");


inputEl.forEach((elem) => {
    btnEl.addEventListener("click", function() {
        if (elem.value == "") {
            elem.classList.add("input-active")
            elem.nextElementSibling.style.display = "block";
        }
    })
})