// express router
const express = require("express");
const router = express.Router();

const {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
} = require("../controllers/people");

// // get all the people
// router.get("/", getPeople);

// // post a person
// router.post("/", createPerson);

// router.post("/postman", createPersonPostman);

// // put a person
// router.put("/:id", updatePerson);

// // delete a person
// router.delete("/:id", deletePerson);

// change to router.route
router.route('/').get(getPeople).post(createPerson)
router.route('/postman').post(createPersonPostman)
router.route('/:id').put(updatePerson).delete(deletePerson)


module.exports = router;
