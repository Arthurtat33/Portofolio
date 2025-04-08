document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfolio loaded!");

    //dark mode toggle
    const themeToggle = document.getElementById("theme-toggle");
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        themeToggle.textContent = document.body.classList.contains("dark-mode")? "☀️" : "🌙";
    });

    
    //animate skills progres bars
    const skillBars = document.querySelectorAll(".progress-bar");
    window.addEventListener("scroll", () => {
        skillBars.forEach(bar => bar.style.width = bar.classList.contains("html")? "90%" : bar.classList.contains("js")? "80%" : "85%");
    });


    //contact form validation
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", (e)  => {
        e.preventDefault();
        alert("message sent successfully!");
        form.reset();
    });
});

function openNav()  {
    document.getElementById("menu").style.width = "300px";
}

function closeNav() {
    document.getElementById("menu").style.width = "0";
}