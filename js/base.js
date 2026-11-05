const btn = document.getElementById("btnTema");

btn.addEventListener("click", () => {
    document.body.classList.toggle("oscuro");

    if (document.body.classList.contains("oscuro")) {
        btn.textContent = "☀️ Modo claro";
    } else {
        btn.textContent = "🌙 Modo oscuro";
    }
});