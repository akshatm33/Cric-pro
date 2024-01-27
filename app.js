let names = document.querySelectorAll("#name");
names.forEach((item) => {
    let popup = item.nextElementSibling;
    item.addEventListener("click", () => {
        popup.style.display = (popup.style.display === "block") ? "none" : "block";
    });
});
