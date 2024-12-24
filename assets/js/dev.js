// Firebase CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";

// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyAeddJre_UuQwTExHMz8E9FylXRuvG3fg4",
    authDomain: "pascalxiiidev.firebaseapp.com",
    projectId: "pascalxiiidev",
    storageBucket: "pascalxiiidev.firebasestorage.app",
    messagingSenderId: "267594294684",
    appId: "1:267594294684:web:a1460799dcbcb7ed485459",
    measurementId: "G-8MEEDPEZZB"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Referensi elemen untuk pesan
const messageContainer = document.createElement("div");
messageContainer.style.position = "fixed";
messageContainer.style.bottom = "20px";
messageContainer.style.left = "50%";
messageContainer.style.transform = "translateX(-50%)";
messageContainer.style.padding = "15px 20px";
messageContainer.style.borderRadius = "8px";
messageContainer.style.color = "#fff";
messageContainer.style.fontSize = "1rem";
messageContainer.style.display = "none";
messageContainer.style.zIndex = "1000";
document.body.appendChild(messageContainer);

// Fungsi untuk menampilkan pesan
function showMessage(text, isSuccess) {
    messageContainer.textContent = text;
    messageContainer.style.backgroundColor = isSuccess ? "#4caf50" : "#f44336";
    messageContainer.style.display = "block";

    setTimeout(() => {
        messageContainer.style.display = "none";
    }, 3000);
}

// Form submission
document.getElementById("kodeForm").addEventListener("submit", async function (e) {
    e.preventDefault();
    const kodeRahasia = document.getElementById("kodeRahasia").value.trim();

    // Validasi input kosong
    if (!kodeRahasia) {
        showMessage("Kode rahasia tidak boleh kosong!", false);
        return;
    }

    try {
        // Ambil dokumen dari Firestore
        const docRef = doc(db, "kodeRahasia", kodeRahasia);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const tujuan = docSnap.data().tujuan;
            if (tujuan) {
                showMessage("Kode tercatat di server. Mengalihkan ke tujuan...", true);
                setTimeout(() => {
                    window.location.href = tujuan;
                }, 2000); // Tunggu 2 detik sebelum mengalihkan
            } else {
                showMessage("Kode tercatat tetapi tidak memiliki URL tujuan.", false);
            }
        } else {
            showMessage("Kode tidak tercatat di server.", false);
        }
    } catch (error) {
        console.error("Terjadi kesalahan:", error);
        showMessage("Terjadi kesalahan, coba lagi.", false);
    }
});
