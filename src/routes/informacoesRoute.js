const express = require('express');

const informacoesController = require('../controllers/informacoesController');

const router = express.Router();

router.get('/1', informacoesController.getInformacoes);
router.post('/', informacoesController.createInformacoes);
router.put('/1', informacoesController.updateInformacoes);
router.delete('/1', informacoesController.deleteInformacoes);


module.exports = router;