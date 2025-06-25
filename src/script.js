document.addEventListener("DOMContentLoaded", function () {
    // Untuk halaman index.html
    const searchInput = document.getElementById("searchInput");
    const registerButton = document.getElementById("registerButton");
    const registerModal = document.getElementById("registerModal");
    const startRegister = document.getElementById("startRegister");
    const loginInstead = document.getElementById("loginInstead");
    const closeModal = document.getElementById("closeModal");

    // Fungsi pencarian
    if (searchInput) {
        const cards = document.querySelectorAll(".game-card, .voucher-card");

        function performSearch(query) {
            cards.forEach(card => {
                const text = card.querySelector("span").textContent.toLowerCase();
                card.style.display = text.includes(query) ? "block" : "none";
            });
        }

        searchInput.addEventListener("input", function () {
            const query = searchInput.value.trim().toLowerCase();
            performSearch(query);
        });
    }

    // Tampilkan modal saat tombol daftar ditekan
    if (registerButton && registerModal) {
        registerButton.addEventListener("click", function () {
            registerModal.classList.remove("hidden");
        });
    }

    // Aksi tombol dalam modal
    if (startRegister) {
        startRegister.addEventListener("click", function () {
            window.location.href = "daftar.html";
        });
    }

    if (loginInstead) {
        loginInstead.addEventListener("click", function () {
            window.location.href = "login.html";
        });
    }

    // Tutup modal jika ada tombol close
    if (closeModal && registerModal) {
        closeModal.addEventListener("click", function () {
            registerModal.classList.add("hidden");
        });
    }

    // Untuk halaman daftar.html
    const signupForm = document.querySelector("form[action='#']:has(#confirm-password)");
    if (signupForm) {
        signupForm.addEventListener("submit", function (e) {
            e.preventDefault();
            window.location.href = "login.html";
        });
    }

    // Untuk halaman login.html
    const loginForm = document.querySelector("form[action='#']:not(:has(#confirm-password))");
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            window.location.href = "index.html";
        });
    }
});
