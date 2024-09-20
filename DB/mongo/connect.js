const mongoose = require('mongoose')

const ConnectToDB = (URI) => {
    mongoose.connect(URI).then(
        () => console.log('db is connected')
    ).catch(() => console.log('try later'))
}

module.exports = ConnectToDB;