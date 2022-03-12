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

01. Membuat folder utils yang berisi file contacts.js, yang berfungsi untuk mengelola data contact
02. Mengekspor fungsi loadContact() yang ada di file contacts.js
03. mengimpornya kedalam file app.js
04. Otomatis muncul folder data yang berisi file contacts.js, sebab dieksekusi (direfresh) oleh nodemon
05. 