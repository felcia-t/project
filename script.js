const links = document.querySelectorAll(".sidebar nav ul li a");
const sections = document.querySelectorAll(".section");

links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));

    links.forEach(l => l.classList.remove("active"));
    sections.forEach(s => s.classList.remove("active"));

    link.classList.add("active");
    target.classList.add("active");
  });
});