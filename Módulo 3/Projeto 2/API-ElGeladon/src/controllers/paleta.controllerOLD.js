const paletasService = require('../services/paleta.service');
const mongoose = require('mongoose');

const findAllPaletasController = async (req, res) => {
  const allPaletas = await paletasService.findAllPaletasService();

  if(allPaletas.length == 0) {
    return res
      .status(404)
      .send({ message: 'Não existe nenhuma paleta cadastrada!' });
  }

  res.send(allPaletas);
};

const findByIdPaletaController = async (req, res) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id inválido!' });
  }

const chosenPaleta = await paletasService.findByIdPaletaService(parametroId);

  if (!chosenPaleta) {
    return res.status(400).send({ message: 'Paleta não encontrada!' });
  }

  res.send(chosenPaleta);
};

const createPaletaController = async (req, res) => {
    const paleta = req.body;

     if (
       !paleta ||
       !paleta.sabor ||
       !paleta.descricao ||
       !paleta.foto ||
       !paleta.preco
     ) {
       return res
          .status(400)
          .send({ message: 'Envie todos os campos da paleta!' });
     }

    const newPaleta = await paletasService.createPaletaService(paleta);
    res.status(201).send(newPaleta);
  };
  
  const updatePaletaController = async (req, res) => {
    const idParam = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(idParam)) {
      return res.status(400).send({ message: 'Id invalido!' });
    }

    const editPaleta = req.body;
    
    if (
       !editPaleta ||
       !editPaleta.sabor ||
       !editPaleta.descricao ||
       !editPaleta.foto ||
       !editPaleta.preco
    ) {
      return res
        .status(400)
        .send({ message: 'Envie todos os campos da paleta!' });
    }
    
    const updatedPaleta = await paletasService.updatePaletaService(idParam, paletaEdit);
    res.send(updatedPaleta);
  };
  
  const deletePaletaController = async (req, res) => {
    const idParam = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(idParam)) {
      return res.status(400).send({ message: 'Id invalido!' });
    }
    await paletasService.deletePaletaService(idParam);
    res.send({ message: 'Paleta deletada com sucesso!' });
  };

  module.exports = {
    findAllPaletasController,
    findByIdPaletaController,
    createPaletaController,
    updatePaletaController,
    deletePaletaController,
  };
 