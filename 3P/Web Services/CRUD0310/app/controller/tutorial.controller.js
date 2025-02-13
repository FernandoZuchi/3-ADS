const db = require("../models");
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if(!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const tutorial = {
    title: req.body.title,
    description: req.body.description ?? '',
    published: req.body.published ?? false
  };

  Tutorial.create(tutorial)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error ocurred while creating the tutorial"
      });
    });
};

exports.find = (req,res) => {
  const title = req.query.title;

  var condition = title ? {title: {[Op.like]: `%${title}`}} : null;

  Tutorial.findAll({where: condition})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred!",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Tutorial.findByPk(id)
  .then(data => {
    if(data) {
      res.send(data);
    } else {
      res.status(404).send({
        message: `Cannot find tutorial with id=${id}`,
      })
    }
  });
};

exports.findAllPublished = (req, res) => {
  Tutorial.findAll({ where: {published: true}})
  .then(nums => {
    res.send({
      message: `${nums} tutorials was published successfully!`,
    });
  })
  .catch(err => {
    res.status(500).send({
      message: err.message || "Some error ocurred",
    });
  });
}

exports.update = (req, res) => {
  const id = req.params.id;

  Tutorial.update(req.body, {
    where: { id: id }
  })
  .then(num => {
    if (num == 1){
      res.send({
        message: `Tutorial was updated successfully`,
      });
    } else {
      res.status(400).send({
        message: `Tutorial was not updated, check the id.`
      })
    }
  })
  .catch(err => {
    res.status(500).send({
      message: err.message || "Some error ocurred",
    })
  });
}

exports.delete = (req, res) => {
  const id = req.params.id;

  Tutorial.destroy({
    where: {id: id}
  })
  .then(num => {
    if (num == 1){
      res.send({
        message: `Tutorial was deleted successfully`,
      });
    } else {
      res.status(400).send({
        message: `Tutorial was not deleted, check the id.`
      })
    }
  })
  .catch(err => {
    res.status(500).send({
      message: err.message || "Some error ocurred",
    })
  });
}

exports.deleteAll = (req, res) => {
  Tutorial.destroy({
    where: {},
    truncate: false
  })
  .then(nums => {
    res.send({
      message: `${nums} tutorials was deleted successfully!`,
    })
  })
  .catch(err => {
    res.status(500).send({
      message: err.message || "Some error ocurred",
    })
  });
}