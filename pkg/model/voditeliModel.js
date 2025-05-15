const mongoose = require('mongoose');

const voditeliSchema = new mongoose.Schema ({
    ime: {
        type:String,
        required: [true, 'mora da ima ime'],
    },

    prezime: {
        type: String,
        required: [true, 'mora da ima prezime'],
    },
    emisija: {
        type: String,
        required: [true, 'mora da ima ime na emisija'],
    },
});

const Voditel = mongoose.model('Voditel', voditeliSchema);
module.exports = Voditel;