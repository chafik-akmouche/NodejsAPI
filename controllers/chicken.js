/*
* Controller
*/

const Chicken = require('../models/Chicken');

// create chicken
exports.createChicken = (req, res, next) => {
    const chicken = new Chicken({
        ...req.body
    });
    chicken.save()
      .then(() => res.status(201).json({ message: 'Chicken enregistré !'}))
      .catch(error => res.status(400).json({ error }));
};

// retourner un chicken spécifique
exports.getChicken = (req, res, next) => {
    Chicken.findOne({ _id: req.params.id })
      .then(chicken => res.status(200).json(chicken))
      .catch(error => res.status(404).json({ error }));
};

// retourner tous les chickens
exports.getAllChicken = (req, res, next) => {
    Chicken.find()
        .then(chicken => res.status(200).json(chicken))
        .catch(error => res.status(400).json({ error }));
};

// supprimer un chicken
exports.deleteChicken = (req, res, next) => {
    Chicken.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'chicken supprimé !'}))
      .catch(error => res.status(400).json({ error }));
};

// modifier un chicken
exports.editChicken = (req, res, next) => {
    Chicken.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'chicken modifié !'}))
      .catch(error => res.status(400).json({ error }));
};

// incrémenter steps
exports.run = (req, res, next) => {
    Chicken.updateOne({ _id: req.params.id }, { steps = steps + 1, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'steps ++ !'}))
      .catch(error => res.status(400).json({ error }));
};

// 
exports.patchChicken = (req, res, next) => {
    Chicken.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'chicken modifié !'}))
      .catch(error => res.status(400).json({ error }));
};