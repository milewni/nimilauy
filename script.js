function formatRibuan(input) {
    let value = input.value.replace(/\D/g,'');
    input.value = new Intl.NumberFormat("id-ID").format(value);
}

function hitungDiskon() {
    let hargaAwal = parseFloat(document.getElementById("harga_awal").value.replace(/\./g, ''));
    let diskon = parseFloat(document.getElementById("persen_diskon").value);
    let hasilDiv = document.getElementById("hasil");

    if (isNaN(hargaAwal) || hargaAwal <= 0) {
        return hasilDiv.innerHTML = "<p style='color: red;'><strong>Error:</strong> Harap Masukkan Inputan Yang Valid.</p>";
    }
    if (isNaN(diskon) || diskon < 0 || diskon > 100) {
        return hasilDiv.innerHTML = "<p style='color: red;'><strong>Error:</strong> Diskon tidak dapat lebih dari 100%.</p>";
    }

    let hargaDiskon = hargaAwal * (diskon / 100);
    let hargaSetelahDiskon = hargaAwal - hargaDiskon;

    hasilDiv.innerHTML = `
        <p><strong>Harga Awal:</strong> Rp ${hargaAwal.toLocaleString("id-ID")}</p>
        <p><strong>Harga Diskon:</strong> Rp ${hargaDiskon.toLocaleString("id-ID")}</p>
        <p><strong>Harga Setelah Diskon:</strong> Rp ${hargaSetelahDiskon.toLocaleString("id-ID")}</p>
    `;
}