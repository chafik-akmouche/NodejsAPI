
/*
* Routes
*/
const express = require('express');
const Chicken = require('../models/Chicken');
const chickenCtrl = require('../controllers/chicken');

const router = express.Router();

// enregistrement d'un chicken
router.post('/', chickenCtrl.createChicken);

// recupération d'un chicken spécifique
router.get('/:id', chickenCtrl.getChicken);

//modifier un chicken
router.put('/:id', chickenCtrl.editChicken);
router.patch('/:id', chickenCtrl.patchChicken);

// supression d'un chicken
router.delete('/:id', chickenCtrl.deleteChicken);

// recupération de tous les chickens
router.use('/', chickenCtrl.getAllChicken);

module.exports = router;