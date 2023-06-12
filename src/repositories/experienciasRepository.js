const { pool } = require('../config/db');

exports.getAllExperiencias = async (tipo) => {
    let query = 'SELECT * FROM experiencias';

    if (tipo) {
        query += ` WHERE tipo = '${tipo}'`;
    }

    const result = await pool.query(query);
    return result.rows;
}

exports.getExperienciaById = async (id) => {
    const result = await pool.query('SELECT * FROM experiencias WHERE id = $1', [id]);
    return result.rows[0];
}

exports.createExperiencia = async (experiencia) => {
    const result = await pool.query(`
        INSERT INTO experiencias (titulo, tipo, descricao, "dataInicio", "dataFim")
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *
    `, [experiencia.titulo, experiencia.tipo, experiencia.descricao, experiencia.dataInicio, experiencia.dataFim]);
    return result.rows[0];
} 

exports.updateExperiencia = async (id, experiencia) => {
    const result = await pool.query(`
        UPDATE experiencias
        SET titulo = $1, tipo = $2, descricao = $3, "dataInicio" = $4, "dataFim" = $5
        WHERE id = $6
        RETURNING *
    `, [experiencia.titulo, experiencia.tipo, experiencia.descricao, experiencia.dataInicio, experiencia.dataFim, id]);
    return result.rows[0];
}

exports.deleteExperiencia = async (id) => {
    await pool.query('DELETE FROM experiencias WHERE id = $1', [id]);
}
