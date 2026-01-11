document.querySelectorAll(".social-icons a").forEach(icon => {
    icon.addEventListener("click", () => {
        alert("Social link clicked!");
    });
});