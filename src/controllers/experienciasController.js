const experienciasRepository = require('../repositories/experienciasRepository');

exports.getAllExperiencias = async (req, res) => {
    const tipo = req.query.tipo;
    const experiencias = await experienciasRepository.getAllExperiencias(tipo);
    res.json(experiencias);
};

exports.getExperienciaById = async (req, res) => {
    const id = parseInt(req.params.id);
    const experiencia = await experienciasRepository.getExperienciaById(id);
    res.json(experiencia);
}

exports.createExperiencia = async (req, res) => {
    const experiencia = req.body;
    const newExperiencia = await experienciasRepository.createExperiencia(experiencia);
    res.json(newExperiencia);
}

exports.updateExperiencia = async (req, res) => {
    const id = parseInt(req.params.id);
    const experiencia = req.body;
    const updateExperiencia = await experienciasRepository.updateExperiencia(id, experiencia);
    res.json(updateExperiencia);
}

exports.deleteExperiencia = async (req, res) => {
    const id = parseInt(req.params.id);
    await experienciasRepository.deleteExperiencia(id);
    res.json({message: `Experiencia ${id} deleted`});
}
