document.addEventListener("DOMContentLoaded", function() {
    
    // --- İLETİŞİM FORMU BUTONU ---
    let iletisimButonu = document.getElementById("iletisimGonder");
    if (iletisimButonu) {
        iletisimButonu.addEventListener("click", function() {
            alert("Mesajınız başarıyla gönderildi!");
        });
    }

    // --- QUİZ KISMI ---
    let quizButonu = document.getElementById("quizButon");
    if (quizButonu) {
        quizButonu.addEventListener("click", function() {
            let secilenRenk = document.getElementById("renkSecimi").value;
            let sonucYazisi = document.getElementById("quizSonuc");

            if (secilenRenk === "sari-lacivert") {
                sonucYazisi.innerText = "Fenerbahçe forması tam sana göre!";
            } else if (secilenRenk === "sari-kirmizi") {
                sonucYazisi.innerText = "Galatasaray forması almalısın!";
            } else if (secilenRenk === "siyah-beyaz") {
                sonucYazisi.innerText = "Beşiktaş forması senin için ideal!";
            } else {
                sonucYazisi.innerText = "Lütfen bir renk seç.";
            }
        });
    }

    // --- SEPETE EKLE BUTONU (Detay sayfaları için) ---
    let sepeteEkleButonu = document.getElementById("sepeteEkleBtn");
    if (sepeteEkleButonu) {
        sepeteEkleButonu.addEventListener("click", function() {
            let urunAdi = document.querySelector(".detay-bilgi h2").innerText;
            let urunFiyati = document.querySelector(".fiyat").innerText;

            localStorage.setItem("alinanForma", urunAdi);
            localStorage.setItem("formaFiyati", urunFiyati);

            alert(urunAdi + " sepetine eklendi!");
        });
    }

    // --- SEPET SAYFASI GÖSTERİMİ ---
    let sepetIsimAlani = document.getElementById("sepetUrunAdi");
    if (sepetIsimAlani) {
        let sepettekiForma = localStorage.getItem("alinanForma");
        let sepettekiFiyat = localStorage.getItem("formaFiyati");

        if (sepettekiForma) {
            sepetIsimAlani.innerText = sepettekiForma;
            document.getElementById("sepetFiyat").innerText = sepettekiFiyat;
            document.getElementById("genelToplam").innerText = "Toplam: " + sepettekiFiyat;
        }
    }

    // --- SİPARİŞİ TAMAMLA BUTONU (Sepet sayfası için) ---
    let siparisButonu = document.querySelector(".sepet-toplam .buton");
    if (siparisButonu) {
        siparisButonu.addEventListener("click", function() {
            let adresKutusu = document.getElementById("teslimatAdresi");
            
            // Eğer adres alanı boşsa uyarı ver
            if (adresKutusu && adresKutusu.value.trim() === "") {
                alert("Lütfen siparişi tamamlamak için teslimat adresinizi girin!");
            } else {
                // Adres girilmişse siparişi onayla
                alert("Siparişiniz alındı! Adresinize kargolanacaktır. Kapıda nakit ödeme veya Kredi kartı ile kolayca ödeyebilirsiniz. Teşekkür ederiz!");
                localStorage.clear(); 
                window.location.reload(); 
            }
        });
    }

});