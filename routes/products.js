const express = require("express");
const router = express.Router();
const {
  getAll,
  getById,
  putById,
  create,
  deleteById,
} = require("../controllers/productsController");

// api/products
router.get("/", getAll);

//api/products/productsId
router.get("/:productId", getById);

// change a product
router.put("/productId", putById);

// create product
router.post("/create", create);

// delete product
router.delete("/:productsId", deleteById);

module.exports = router;
