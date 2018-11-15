const express = require("express");
const router = express.Router();

const Item = require("../../models/Item");

//@route GET api/items
//Get all items
router.get("/items", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => {
      res.json(items);
    });
});

//@route GET api/item/:id
//Get an item
router.get("/item/:id", (req, res) => {
  Item.findById(req.params.id)
    .then(item => {
      res.send(item);
    })
    .catch(err => {
      res.status(404).json("Item not found");
    });
});

//@route POST api/item
//Add item
router.post("/item", (req, res) => {
  const newItem = new Item({
    name: req.body.name,
    price: req.body.price,
    imgURL: req.body.imgURL
  });
  console.log(newItem.date);
  newItem.save().then(item => {
    res.json(item);
  });
});

//@route DELETE api/item
//Delete a item
router.delete("/item/:id", (req, res) => {
  //   Item.findById(req.params.id)
  //     .then(item => {
  //       item.remove().then(() => {
  //         res.json("Delete Successfully.");
  //       });
  //     })
  //     .catch(err => {
  //       res.status(404).json(err);
  //     });
  Item.findByIdAndRemove(req.params.id)
    // .exec()
    .then(item => {
      res.send(item);
    })
    .catch(err => {
      res.status(404).json("Item Not Found");
    });
});

//@route PUT api/item/:id
//Update task
router.put("/item/:id", (req, res) => {
  Item.findByIdAndUpdate(req.params.id, req.body)
    .then(item => {
      res.json("Update Succesfully");
    })
    .catch(err => {
      res.status(404).json("Item Not Found");
    });
});

module.exports = router;
