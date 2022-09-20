let answers = document.querySelectorAll(".faq-container");
let submit = document.querySelectorAll('#submit')
let email = document.querySelectorAll('#email')
answers.forEach((event) => {
    event.addEventListener('click', () => {
        if (event.classList.contains("active")) {
            event.classList.remove("active");
        }

        else {
            event.classList.add("active");
        }
    })
})

