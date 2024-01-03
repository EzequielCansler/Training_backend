// inside of each route

module.exports = {
  getAll: (req, res, next) => {
    res.status(200).json("respond with a product");
  },
  getById: (req, res, next) => {
    console.log(req.params.id); // parameters URL
    res.send("respond with a product with id");
  },
  putById: (req, res, next) => {
    console.log(req.body); // body request 201
    // insert in DB
    res.status(201).json(req.body);
  },
  create: (req, res, next) => {
    body = "";
    console.log(req.body); // body request 201
    // insert in DB
    res.status(201).json(req.body);
  },
  deleteById: (req, res, next) => {
    console.log(req.params.id);
  },
};
