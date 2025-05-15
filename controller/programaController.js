const Programa = require('../pkg/model/programModel');

exports.createPrograma = async (req,res) => {
    try {
        const newPrograma = await Programa.create(req.body);
        res.status(201).json({
            status:'success',
            data: {
                programa: newPrograma,
            },
        });
    } catch (err) {
        res.status(500).json({
            status:'fail',
            message:err.message,
        });
    }
};

exports.getAllPrograms = async (req,res) => {
    try {
        const programa = await Programa.find();
        res.status(200).json({
            status:'success',
            data: {
                allPrograms: programa,
            },
        });
    } catch(err) {
        res.status(500).json({
            status:'fail',
            message:err.message,
        });
    }
};

exports.getOneProgram = async (req,res) => {
    try {
        const programa = await Programa.findById(req.params.id);
         res.status(200).json({
            status:'success',
            data: {
                programa,
            },
         });
    } catch(err) {
        res.status(500).json({
            status:'fail',
            message:err.message,
        });
    }
};

exports.updatePrograma = async (req,res) => {
    try {
        const programa = await Programa.findByIdAndUpdate(req.params.id,req.body,{
            new: true,
            runValidators:true,
        });
        res.status(200).json({
            status:'success',
            data: {
                programa,
            }
        });
    } catch(err) {
        res.status(500).json({
            status:'fail',
            message:err.message,
        });
    }
};

exports.deleteProgram = async (req,res) => {
    try {
        const deletedProgram = await Programa.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status:'success',
            data: deletedProgram,
        });
    } catch(err) {
        res.status(500).json({
            status:'fail',
            message:err.message,
        });
    }
};