const mongoose = require('mongoose');

const programaSchema = new mongoose.Schema({
    naslov: {
        type: String,
        required: [true, 'mora da ima naslov'],
        minlength: 2,
        maxlength: [200, 'Naslovot e mnogu dolg'],
        unique: [true, 'Mora da ima avtenticno ime']
    },
    kategorija: {
        type: String,
        enum: ['Detska programa', 'Vesti','Naucna programa'],

    },
});

const Programa = mongoose.model('Programa', programaSchema);
module.exports = Programa;