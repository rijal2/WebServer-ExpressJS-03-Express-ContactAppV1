# WebServer-ExpressJS-03-Express-ContactAppV1
Membuat aplikasi contactAppV1.

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