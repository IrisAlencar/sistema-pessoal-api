const { pool } = require('../config/db');

exports.getPortfolio = async () => {
    const result = await pool.query('SELECT * FROM portfolio');
    return result.rows;
}

exports.getPortfolioById = async (id) => {
    const result = await pool.query('SELECT * FROM portfolio WHERE id = $1', [id]);
    return result.rows[0];
}

exports.createPortfolio = async (portfolio) => {
    const result = await pool.query(`
        INSERT INTO portfolio (title, link, image)
        VALUES ($1, $2, $3)
        RETURNING *
    `, [portfolio.title, portfolio.link, portfolio.image]);
    return result.rows[0];
}

exports.updatePortfolio = async (id, portfolio) => {
    const result = await pool.query(`
        UPDATE portfolio
        SET title = $1, link = $2, image = $3
        WHERE id = $4
        RETURNING *
    `, [portfolio.title, portfolio.link, portfolio.image, id]);
    return result.rows[0];
}

exports.deletePortfolio = async (id) => {
    await pool.query('DELETE FROM portfolio WHERE id = $1', [id]);
}
