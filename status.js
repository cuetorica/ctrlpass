const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");

one.onclick = function() {
    one.classList.add("active");
    two.classList.remove("active");
    three.classList.remove("active");
    four.classList.remove("active");
    five.classList.remove("active");
}

two.onclick = function() {
    one.classList.add("active");
    two.classList.add("active");
    three.classList.remove("active");
    four.classList.remove("active");
    five.classList.remove("active");
}
three.onclick = function() {
    one.classList.add("active");
    two.classList.add("active");
    three.classList.add("active");
    four.classList.remove("active");
    five.classList.remove("active");
}
four.onclick = function() {
    one.classList.add("active");
    two.classList.add("active");
    three.classList.add("active");
    four.classList.add("active");
    five.classList.remove("active");
}
five.onclick = function() {
    one.classList.add("active");
    two.classList.add("active");
    three.classList.add("active");
    four.classList.add("active");
    five.classList.add("active");
}

const checkIcons = document.querySelectorAll('.uil-check');
const sections = document.querySelectorAll('.content section');

// Add event listeners to check icons
checkIcons.forEach((checkIcon, index) => {
    checkIcon.addEventListener('click', () => {
        // Remove 'active' class from all sections
        sections.forEach(section => {
            section.classList.remove('active');
        });

        // Add 'active' class to the corresponding section
        sections[index].classList.add('active');
    });
});

document.querySelector('.hamburger-menu').addEventListener('click', function() {
    this.classList.toggle('active');
});