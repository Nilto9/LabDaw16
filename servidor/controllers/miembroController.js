const Miembro = require("../models/Miembro");

exports.crearMiembro = async (req, res) => {
    try {
        const miembro = new Miembro(req.body);

        await miembro.save();
        res.send(miembro);


    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerMiembros = async (req, res) => {

    try {

        const miembros = await Miembro.find();
        res.json(miembros);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.actualizarMiembro = async (req, res) => {

    try {

        const {_id, codigo, nombre } = new Miembro(req.body);
        let miembrs = await Miembro.findById(req.params.id);

        if(!miembrs){
            res.status(404).json({ msg: 'No existe el miembro'});
        }

        codigo._id = _id;
        miembrs.codigo = codigo;
        miembrs.nombre = nombre;

        console.log(miembrs)

        miembrs = await Miembro.findOneAndUpdate({ _id: req.params.id }, miembrs, { new: true } );
        res.json(miembrs);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.verMiembro = async (req, res) => {

    try {

        let miembrs = await Miembro.findById(req.params.id);

        if(!miembrs){
            res.status(404).json({ msg: 'No existe el miembro'});
        }

        res.json(miembrs);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.eliminarMiembro = async (req, res) => {

    try {

        let miembrs = await Miembro.findById(req.params.id);

        if(!miembrs){
            res.status(404).json({ msg: 'No existe el miembro'});
        }

        await Miembro.deleteOne({ _id: req.params.id });

        res.json({ msg: 'El miembro: ' + miembrs.nombre + ' se ha eliminado' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

