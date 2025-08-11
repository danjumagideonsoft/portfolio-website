// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href'))
            .scrollIntoView({
                behavior: 'smooth'
            });
    });
});

// Fade-in Animation on Scroll
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => {
    observer.observe(section);
});

// Scroll to Top Button
const scrollBtn = document.createElement("button");
scrollBtn.innerHTML = "↑";
scrollBtn.id = "scrollToTop";
document.body.appendChild(scrollBtn);

scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "20px";
scrollBtn.style.right = "20px";
scrollBtn.style.background = "#ff9800";
scrollBtn.style.color = "#fff";
scrollBtn.style.border = "none";
scrollBtn.style.padding = "10px 15px";
scrollBtn.style.fontSize = "18px";
scrollBtn.style.borderRadius = "5px";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.display = "none";
scrollBtn.style.zIndex = "1000";

scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
});
