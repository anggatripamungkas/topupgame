document.addEventListener("DOMContentLoaded", function () {
    // For the index.html page
    const searchInput = document.getElementById("searchInput");
    const registerButton = document.getElementById("registerButton");
    const registerModal = document.getElementById("registerModal");
    const startRegister = document.getElementById("startRegister");
    const loginInstead = document.getElementById("loginInstead");
    const closeModal = document.getElementById("closeModal");

    // Payment Modal functionality
    const openPaymentModalButton = document.getElementById("openPaymentModal");
    const paymentModal = document.getElementById("paymentModal");
    const closePaymentModalButton = paymentModal ? paymentModal.querySelector(".close-btn") : null;

    // Function for the search bar
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

    // Show modal when Register button is clicked
    if (registerButton && registerModal) {
        registerButton.addEventListener("click", function () {
            registerModal.classList.remove("hidden");
        });
    }

    // Modal action buttons
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

    // Close modal if close button is clicked
    if (closeModal && registerModal) {
        closeModal.addEventListener("click", function () {
            registerModal.classList.add("hidden");
        });
    }

    // For the daftar.html page (Signup form)
    const signupForm = document.querySelector("form[action='#']:has(#confirm-password)");
    if (signupForm) {
        signupForm.addEventListener("submit", function (e) {
            e.preventDefault();
            window.location.href = "login.html";
        });
    }

    // For the login.html page (Login form)
    const loginForm = document.querySelector("form[action='#']:not(:has(#confirm-password))");
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            window.location.href = "index.html";
        });
    }

    // For the Payment Modal
    if (openPaymentModalButton && paymentModal) {
        openPaymentModalButton.addEventListener("click", function () {
            paymentModal.classList.remove("hidden"); // Show the payment modal
        });
    }

    if (closePaymentModalButton) {
        closePaymentModalButton.addEventListener("click", function () {
            paymentModal.classList.add("hidden"); // Hide the payment modal
        });
    }

    // Redirect when Mobile Legends image is clicked
    document.querySelectorAll('.game-card img[alt="Mobile Legends: Bang Bang"]').forEach(img => {
        img.addEventListener('click', () => {
            window.location.href = 'detail_lengkap.html';
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Mendapatkan elemen modal
    const paymentModal = document.getElementById("paymentModal");
    const closePaymentModalButton = paymentModal.querySelector(".close-btn");
    const paymentDetails = document.getElementById("paymentDetails");

    // Fungsi untuk menampilkan modal pembayaran
    function showPaymentModal(diamondAmount, price) {
        paymentDetails.innerHTML = `<p><strong>${diamondAmount}</strong><br>${price}</p>`;
        paymentModal.classList.remove("hidden"); // Menampilkan modal pembayaran
    }

    // Menangani klik pada voucher untuk membuka modal pembayaran
    const voucherCards = document.querySelectorAll('.voucher-card');
    voucherCards.forEach(card => {
        card.addEventListener('click', function () {
            const id = this.id; // Mendapatkan ID voucher yang dipilih
            let diamondAmount = '';
            let price = '';

            // Menentukan rincian voucher berdasarkan ID
            switch (id) {
                case 'voucher-113':
                    diamondAmount = '113 Diamonds';
                    price = 'Rp. 31.000';
                    break;
                case 'voucher-229':
                    diamondAmount = '229 Diamonds';
                    price = 'Rp. 63.000';
                    break;
                case 'voucher-301':
                    diamondAmount = '301 Diamonds';
                    price = 'Rp. 82.000';
                    break;
                case 'voucher-408':
                    diamondAmount = '408 Diamonds';
                    price = 'Rp. 111.000';
                    break;
                case 'voucher-512':
                    diamondAmount = '512 Diamonds';
                    price = 'Rp. 140.000';
                    break;
                case 'voucher-601':
                    diamondAmount = '601 Diamonds';
                    price = 'Rp. 161.000';
                    break;
                case 'voucher-875':
                    diamondAmount = '875 Diamonds';
                    price = 'Rp. 232.000';
                    break;
                case 'voucher-1050':
                    diamondAmount = '1050 Diamonds';
                    price = 'Rp. 280.000';
                    break;
                case 'voucher-twilight':
                    diamondAmount = 'Twilight Pass';
                    price = 'Rp. 150.000';
                    break;
                case 'voucher-weekly':
                    diamondAmount = 'Weekly Diamond Pass';
                    price = 'Rp. 27.500';
                    break;
                default:
                    return; // Jika voucher tidak ditemukan, tidak lakukan apapun
            }

            // Menampilkan modal pembayaran dengan rincian voucher
            showPaymentModal(diamondAmount, price);
        });
    });

    // Menutup modal ketika tombol close di klik
    if (closePaymentModalButton) {
        closePaymentModalButton.addEventListener("click", function () {
            paymentModal.classList.add("hidden"); // Menyembunyikan modal pembayaran
        });
    }

    // Menambahkan fungsi klik pada pilihan pembayaran
    const paymentOptions = document.querySelectorAll('.payment-option');
    paymentOptions.forEach(option => {
        option.addEventListener('click', function () {
            const paymentMethod = this.querySelector('p').textContent.trim(); // Mengambil nama metode pembayaran
            const paymentMessage = `Anda memilih metode pembayaran: ${paymentMethod}`;

            // Menampilkan pesan sementara selama 3 detik
            const messageBox = document.createElement("div");
            messageBox.classList.add("payment-message");
            messageBox.textContent = paymentMessage;
            document.body.appendChild(messageBox);

            // Menyembunyikan pesan setelah 3 detik
            setTimeout(() => {
                messageBox.remove();
            }, 3000); // Menghilang setelah 3 detik

            // Menutup modal setelah memilih pembayaran
            paymentModal.classList.add("hidden"); // Menyembunyikan modal pembayaran

            // Jika Anda ingin mengarahkan ke halaman lain setelah memilih pembayaran, bisa menggunakan window.location.href
            // Contoh:
            // if(paymentMethod === 'GoPay') {
            //     window.location.href = 'gopay-payment.html'; // Ganti dengan URL halaman GoPay
            // }
        });
    });
});
