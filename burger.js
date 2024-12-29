document.addEventListener("wheel", function(event) {
    if (event.deltaY > 0) {
        nextSection();
    } else {
        previousSection();
    }
});

let currentSection = 0;

function nextSection() {
    const sections = document.querySelectorAll('.section');
    if (currentSection < sections.length - 1) {
        currentSection++;
        scrollToSection(currentSection);
    }
}

function previousSection() {
    if (currentSection > 0) {
        currentSection--;
        scrollToSection(currentSection);
    }
}

function scrollToSection(sectionIndex) {
    const sections = document.querySelectorAll('.section');
    sections[sectionIndex].scrollIntoView({
        behavior: 'smooth'
    });
}
