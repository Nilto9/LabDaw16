const Avion = require("../models/Avion");

exports.crearAvion = async (req, res) => {
    try {
        const avion = new Avion(req.body);

        await avion.save();
        res.send(avion);


    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerAviones = async (req, res) => {

    try {

        const aviones = await Avion.find();
        res.json(aviones);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.actualizarAvion = async (req, res) => {

    try {

        const {_id, codigo, tipo, base } = new Avion(req.body);
        let avions = await Avion.findById(req.params.id);

        if(!avions){
            res.status(404).json({ msg: 'No existe el avion'});
        }

        codigo._id = _id;
        avions.codigo = codigo;
        avions.tipo = tipo;
        avions.base = base;

        console.log(avions)

        avions = await Avion.findOneAndUpdate({ _id: req.params.id }, avions, { new: true } );
        res.json(avions);

        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.verAvion = async (req, res) => {

    try {

        let avions = await Avion.findById(req.params.id);

        if(!avions){
            res.status(404).json({ msg: 'No existe el avion'});
        }

        res.json(avions);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.eliminarAvion = async (req, res) => {

    try {

        let avions = await Avion.findById(req.params.id);

        if(!avions){
            res.status(404).json({ msg: 'No existe el avion'});
        }

        await Avion.deleteOne({ _id: req.params.id });

        res.json({ msg: 'El avion: ' + avions.codigo + ' se ha eliminado' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

