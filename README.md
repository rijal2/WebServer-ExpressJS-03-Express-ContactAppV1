# WebServer-ExpressJS-03-Express-ContactAppV1
Membuat aplikasi contactAppV1.

MEMANFAATKAN BILT-IN MIDDLEWARE express.static() UNTUK MENAMPILKAN FILE2 YANG BERSIFAT STATIC SEHINGGA BISA DIKONSUMSI PUBLIC
01. Gunakan built-in middleware dalam hal ini adalah express.static
    Middleware ini digunakan untuk menampilkan file-file yang bersifat static seperti gambar, music, video, javascript, css, dll. Silahkan lihat documentasi nya di sini http://expressjs.com/en/5x/api.html#express.static

    app.use(express.static('public'))

    Parameter yang berada di dalam metode static() adalah nama folder tempat menyimpan file-file static. File-file yang berada di dalam folder ini lah yang nanti bisa digunakan / dikonsumsi publik. Tanpa menggunakan metode tersbut maka file-file tidak bisa ditampilkan ..

02. Buat Folder 'Public'
03. Di dalam folder public buat folder img dan css
04. Hapus dulu file-file yang sudah tidak digunakan
05. Hapus juga function yang tidak digunakan.

06. Menambahkan file gambar kedalam folder img
07. Memperbaiki elemen yang ada di about.ejs menjadi sesuai dengan yang dibutuhkan
08. Pada halaman about panggil juga gambar yang baru saja disimpan

09. Membuat file style.css di dalam folder css
10. Panggil file css tersebut agar bisa dikenali oleh html, main-layout.ejs


===========================================================================
MENGGANTI NAVBAR DARI TEMPLATE BOOTSRAP

01. Buka documentasi bootstrap
02. Cari navbar
03. Copy templatenya ke file nav.ejs
04. Ubah beberapa item sesuai dengan kebutuhan (seperti about, contact, home, dll)

===========================================================================
MENYUSUN TAMPILAN DAFTAR CONTACT di FILE contact.ejs

01. Hapus isi file sebelumnya
02. Buat element dasarnya (div dengan class .container>.row>.col-md-8)
03. Buat tabel untuk menampilkan daftar contact dengan bootstrap
04. Sesuaikan kolom dan nama kolomh
05. Ambil icon yang disediakan oleh bootstrap dengan menghubungkannya secara online menggunakan CDN
06. Gunakan icon yang desediakan oleh bootstrap untuk mempercantik tampilan. Silahkan cek disini untuk melihat dokumentasi icon bootstrap:
https://icons.getbootstrap.com/

==========================================================================
MENGELOLA DATA CONTACT

BUAT FOLDER DAN FILE YANG BERISI FUNCTION PENGELOLAAN KONTAK
01. Membuat folder utils yang berisi file contacts.js, yang berfungsi untuk mengelola data contact
02. Mengekspor fungsi loadContact() yang ada di file contacts.js
03. mengimpornya kedalam file app.js
04. Otomatis muncul folder data yang berisi file contacts.json, sebab dieksekusi (direfresh) oleh nodemon

CARA MENGGUNAKAN FOLDER UTILS DAN FILE contacts.js YANG BERADA DI DALAM NYA
01. Sebagai awalan, isi file contacts.json dengan dua data. Setelah itu buat logika untuk menampilkan dua data tersebut ke layar halaman contact.
02. Gunakan function loadContact() yang sudah kita import, smpan kedalam sebuah variable contacts. Gunakan di dalam metode yang merespon halaman contact. Kemudian kirim variabel tersevut kedalam res.render()

    app.get('/contact', (req, res) => {
        // res.sendFile('./contact.html', {root: __dirname})
        const contacts = loadContact()
        console.log(contacts)
        res.render('contact', {
            title: "Halaman Contact",
            layout: "layouts/main-layout",
            contacts,
        })
    })

03. Cetak data-data tersebut ke halaman contact. Caranya:
    a. Masuk ke file contact.ejs
    b. Elemen yang akan menampilkan data-data contact adalah elemen <tr>. Oleh karena itu elemen tersebut harus segera ditemukan kemudian di looping dengan forEach


=================================================================
RENCANA BERIKUTNYA ADALAH MENAMPILKAN HALAMAN DETAIL SETIAP KONTAK.
Halaman ini bisa dibentuk dari pop up box yang bisa diambil dari Bootstrap.
Di dalam halaman tersebut akan menampilkan beberapa informasi kontak dari setiap mahasiswa.
Dan alamatnya disetting langsung mengarah berdasarkan nama mahasiswa.

01. masukkan alamat halaman detail contact pada elemen <a href="">
02. Karena alamatnya harus berdasarkan nama mahasiswa, maka alamat nya bisa disetting seperti ini: "/contact/param". Param yang dimaksud tersebut adalah nama mahasiswa.
    <a href="/contact/<%= contact.nama  %> " class="btn btn-success badge rounded-pill"><i class="bi bi-info-circle"></i> detail</a>
03. Untuk sementara tombo detail sudah mengarah ke alamat /contact/:nama


MEMBUAT FUNGSI findContact() untuk mencari data kontak yang akan di tampilkan di halaman detail Contact.
01. Buat dulu routing nya di app.js
02. Tentukan nama params dibelakang /contact, dalam kasus ini nama params nya adalah "nama"
03. Sebelum membuat fungsi fndContact() buat dulu halaman detail contactnya menggunakan bootsrap. Simpan dengan nama "detail.ejs"
04. Arahkan responnya ke file detail.ejs

    app.get('/contact/:nama', (req, res) => {
        const contact = findContact(req.params.nama)

        res.render('detail', {
            title: "Halaman Detail Contact",
            layout: "layouts/main-layout",
            contacts,
        })
    })

05. Buat function findContact() di contact.js,
06. Didalam function tersebut uraikan urutan mulai dari pencarian contact hingga ditemukan kemudian dikirim.
    Urutan:
    a. Loading dulu semua data contact yang ada di contacts.json menggunakan fungsi loadContact() yang sudah pernah dibuat,
        const contacts = loadContact();

    b. Temukan kontak berdasarkan nama menggunakan metode find()
    c. Eksport fungsi fincdContact()
    d. Impor ke dalam file app.js
    e. Jangan lupa atur isi elemen yang ada di file detail.ejs sesuai dengan data contact yang dikirim
