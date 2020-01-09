const passport = require('passport')
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

module.exports = (app, db) => {
  app.post("/createmedicine",passport.authenticate('jwt', { session: false }), function(req, res) {
    db.medicines
      .create({
        name: req.body.name,
        type: req.body.type,
        price: req.body.price,
      })
      .then(result => {
        res.status(201).send(result);
      })
      .catch(err => {
        res.status(400).send({ message: err.message });
      });
  });
  
  app.post("/getmedicine",passport.authenticate('jwt', { session: false }), function(req, res) {
    db.medicines
      .findAll({
      })
      .then(result => {
        res.status(201).send(result);
      })
      .catch(err => {
        res.status(400).send({ message: err.message });
      });
  });

  app.delete("/deletemedicine/:id", function(req, res) {
    db.medicines
      .destroy({
        where: { id: req.params.id }
      })
      .then(results => {
        res.status(200).send("Delete La");
      })
      .catch(err => {
        res.status(400).send({ message: err.message });
      });
  });


  app.post("/getspacificmedicine",passport.authenticate('jwt', { session: false }), function(req, res) {
    db.medicines
      .findAll({
        where: { name: req.body.name}
      })
      .then(result => {
        res.status(201).send(result);
      })
      .catch(err => {
        res.status(400).send({ message: err.message });
      });
  });
  

  app.post("/getinvoicemedicine",passport.authenticate('jwt', { session: false }), function(req, res) {
    db.medicines
      .findAll({
        where: { id: req.body.invoiceId}
      })
      .then(result => {
        res.status(201).send(result);
      })
      .catch(err => {
        res.status(400).send({ message: err.message });
      });
  });


  
  
  app.get('/protected-route', passport.authenticate('jwt', { session: false }),
  function (req, res) {
    res.status(200).send(req.user)
  }
)
};



