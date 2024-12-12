// Get the necessary elements
const toggleButton = document.querySelector('.toggle-btn');
const sidebar = document.querySelector('.sidebar');
const menuLinks = document.querySelectorAll('.sidebar nav ul li a');

// Toggle sidebar visibility
toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('hidden'); // Hide or show the sidebar
});

// Highlight the active menu item
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Remove 'active' class from all links
        menuLinks.forEach(item => item.classList.remove('active'));
        // Add 'active' class to the clicked link
        link.classList.add('active');
    });
});

// Close sidebar when clicking outside of it (optional)
document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !toggleButton.contains(e.target)) {
        sidebar.classList.add('hidden'); // Hide sidebar when clicking outside
    }
});
// Mengambil elemen-elemen penting
const form = document.getElementById('edit-stock-form');
const barangSelect = document.getElementById('barang');
const stokInput = document.getElementById('jumlah-stok');

// Menangani submit form untuk mengedit stok
form.addEventListener('submit', function (event) {
    event.preventDefault();

    const barang = barangSelect.value;
    const jumlahStok = stokInput.value;

    // Validasi input
    if (jumlahStok < 0) {
        alert('Jumlah stok tidak boleh kurang dari 0');
        return;
    }

    // Menampilkan pesan konfirmasi (misalnya, bisa menyimpan ke database atau backend di sini)
    alert(`Stok barang ${barang} telah diperbarui menjadi ${jumlahStok}`);
    
    // Reset form
    form.reset();
});
// Ambil elemen-elemen form dan tabel
const saleForm = document.getElementById('sale-form');
const salesTable = document.getElementById('sales-table').getElementsByTagName('tbody')[0];

// Data harga barang (dapat disesuaikan dengan harga sesungguhnya)
const prices = {
    "barang1": 100000,
    "barang2": 50000,
    "barang3": 20000,
    "barang4": 75000,
    "barang5": 120000,
    "barang6": 90000,
    "barang7": 60000,
    "barang8": 80000
};

// Event listener saat form ditambahkan
saleForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // Ambil nilai dari form
    const barang = document.getElementById('barang').value;
    const jumlah = parseInt(document.getElementById('jumlah').value);

    // Menghitung total harga berdasarkan jumlah
    const total = prices[barang] * jumlah;

    // Menambah baris baru ke tabel
    const row = salesTable.insertRow();

    // Menambah data ke kolom tabel
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);

    cell1.textContent = salesTable.rows.length; // Nomor urut
    cell2.textContent = barang;
    cell3.textContent = jumlah;
    cell4.textContent = 'Rp ' + total.toLocaleString(); // Format uang

    // Reset form setelah submit
    saleForm.reset();
});
// Ambil elemen-elemen form dan tabel
const incomingForm = document.getElementById('incoming-form');
const incomingTable = document.getElementById('incoming-table').getElementsByTagName('tbody')[0];

// Data harga barang (dapat disesuaikan dengan harga sesungguhnya)
const prices = {
    "barang1": 100000,
    "barang2": 50000,
    "barang3": 20000,
    "barang4": 75000,
    "barang5": 120000,
    "barang6": 90000,
    "barang7": 60000,
    "barang8": 80000
};

// Event listener saat form ditambahkan
incomingForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Mencegah form reload halaman

    // Ambil nilai dari form
    const barang = document.getElementById('barang').value;
    const jumlah = parseInt(document.getElementById('jumlah').value);
    const hargaPerBarang = parseInt(document.getElementById('harga').value);

    // Jika harga per barang tidak disesuaikan dari dropdown harga, maka ambil dari data harga
    const harga = hargaPerBarang || prices[barang]; // Prioritaskan input harga manual jika ada

    if (!harga || isNaN(jumlah) || jumlah <= 0) {
        alert("Mohon pastikan jumlah dan harga valid.");
        return;
    }

    // Menghitung total harga berdasarkan jumlah dan harga per barang
    const total = harga * jumlah;

    // Menambah baris baru ke tabel
    const row = incomingTable.insertRow();

    // Menambah data ke kolom tabel
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    const cell5 = row.insertCell(4);

    cell1.textContent = incomingTable.rows.length; // Nomor urut
    cell2.textContent = barang;
    cell3.textContent = jumlah;
    cell4.textContent = 'Rp ' + harga.toLocaleString(); // Harga per barang
    cell5.textContent = 'Rp ' + total.toLocaleString(); // Total harga

    // Reset form setelah submit
    incomingForm.reset();
});
// Ambil elemen-elemen yang diperlukan
const homePage = document.getElementById('home');
const stockPage = document.getElementById('stock');
const incomingPage = document.getElementById('incoming');
const salesPage = document.getElementById('sales');
const expensesPage = document.getElementById('expenses');
const profitPage = document.getElementById('profit');

// Konten halaman
const contentPages = document.querySelectorAll('.content-page');

// Fungsi untuk menampilkan halaman yang dipilih
function showPage(pageId) {
    contentPages.forEach(page => {
        page.style.display = 'none'; // Menyembunyikan semua halaman
    });

    // Menampilkan halaman yang dipilih
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.style.display = 'block';
    }
}

// Event listener untuk navigasi menu
homePage.addEventListener('click', () => showPage('home-content'));
stockPage.addEventListener('click', () => showPage('stock-content'));
incomingPage.addEventListener('click', () => showPage('incoming-content'));
salesPage.addEventListener('click', () => showPage('sales-content'));
expensesPage.addEventListener('click', () => showPage('expenses-content'));
profitPage.addEventListener('click', () => showPage('profit-content')); // Menampilkan halaman keuntungan

// Menampilkan halaman beranda secara default
showPage('home-content');
// Ambil elemen yang diperlukan
const expenseForm = document.getElementById('expense-form');
const expenseTable = document.getElementById('expense-table').getElementsByTagName('tbody')[0];

// Fungsi untuk menambahkan pengeluaran ke tabel
function addExpense(event) {
    event.preventDefault(); // Mencegah form dari reload halaman

    const barang = document.getElementById('barang').value;
    const jumlah = document.getElementById('jumlah').value;
    const harga = document.getElementById('harga').value;
    const tanggal = document.getElementById('tanggal').value;

    if (barang && jumlah && harga && tanggal) {
        // Menghitung total pengeluaran
        const totalPengeluaran = jumlah * harga;

        // Menambahkan baris baru ke tabel pengeluaran
        const row = expenseTable.insertRow();

        row.innerHTML = `
            <td>${expenseTable.rows.length}</td>
            <td>${barang}</td>
            <td>${jumlah}</td>
            <td>Rp ${parseInt(harga).toLocaleString()}</td>
            <td>Rp ${totalPengeluaran.toLocaleString()}</td>
            <td>${tanggal}</td>
        `;

        // Reset form setelah data ditambahkan
        expenseForm.reset();
    } else {
        alert("Harap lengkapi semua kolom!");
    }
}

// Event listener untuk form pengeluaran
expenseForm.addEventListener('submit', addExpense);
