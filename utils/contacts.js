const fs = require('fs');


// Membaca atau mencari folder data apakah ada atau tidak menggunakan fs.existSync, jika tidak ada maka buat menggunakan fs.mkdirSync
const folder = './data'
if(!fs.existsSync(folder)){
    fs.mkdirSync(folder)
}

// Memeriksa apakah file contact.json ada atau tidak menggunakan fs.existsSync, jika tidak ada maka buat menggunakan fs.writeFileSync
const file = './data/contacts.json'
if(!fs.existsSync(file)){
    fs.writeFileSync(file, '[]', 'utf-8')
}


const loadContact = () => {
    const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8');
    const contacts = JSON.parse(fileBuffer)
    return contacts
}

module.exports = { loadContact }