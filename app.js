const express = require('express');
const app = express();
const db = require('./pkg/db/index');

const programController = require('./controller/programaController');
const voditelController = require('./controller/voditeliController');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine' , 'ejs');
app.use(express.static('public'));

db.init();

app.get('/api/v1/programa', programController.getAllPrograms);
app.get('/api/v1/programa/:id', programController.getOneProgram);
app.post('/api/v1/programa', programController.createPrograma);
app.patch('/api/v1/programa/:id', programController.updatePrograma);
app.delete('/api/v1/programa/:id', programController.deleteProgram);

app.get('/api/v1/voditel', voditelController.getAllVoditeli);
app.get('/api/v1/voditel/:id', voditelController.getOneVoditel);
app.post('/api/v1/voditel', voditelController.createVoditel);
app.patch('/api/v1/voditel/:id', voditelController.updateVoditel);
app.delete('/api/v1/voditel/:id', voditelController.deleteVoditel);


app.listen(process.env.PORT, (err) => {
    if(err) {
        return console.log('Could not start service');
    }
    console.log(`Service started successfully on port ${process.env.PORT}`);
});