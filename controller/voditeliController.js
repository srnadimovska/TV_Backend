const Voditel = require('../pkg/model/voditeliModel');

exports.createVoditel = async (req,res) => {
    try {
        const newVoditel = await Voditel.create(req.body);
        res.status(201).json({
            status:'success',
            data: {
                voditel: newVoditel,
            },
        });
    } catch (err) {
        res.status(500).json({
            status:'fail',
            message:err.message,
        });
    }
};

exports.getAllVoditeli = async (req,res) => {
    try {
        const voditel = await Voditel.find();
        res.status(200).json({
            status:'success',
            data: {
                allVoditeli: voditel,
            },
        });
    } catch(err) {
        res.status(500).json({
            status:'fail',
            message:err.message,
        });
    }
};

exports.getOneVoditel = async (req,res) => {
    try {
        const voditel = await Voditel.findById(req.params.id);
         res.status(200).json({
            status:'success',
            data: {
                voditel,
            },
         });
    } catch(err) {
        res.status(500).json({
            status:'fail',
            message:err.message,
        });
    }
};

exports.updateVoditel = async (req,res) => {
    try {
        const voditel = await Voditel.findByIdAndUpdate(req.params.id,req.body,{
            new: true,
            runValidators:true,
        });
        res.status(200).json({
            status:'success',
            data: {
                voditel,
            }
        });
    } catch(err) {
        res.status(500).json({
            status:'fail',
            message:err.message,
        });
    }
};

exports.deleteVoditel = async (req,res) => {
    try {
        const deletedVoditel = await Voditel.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status:'success',
            data: deletedVoditel,
        });
    } catch(err) {
        res.status(500).json({
            status:'fail',
            message:err.message,
        });
    }
};