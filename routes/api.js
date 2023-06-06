const router = require("express").Router();
const house = require("../controllers/house")

router.post('/houses', house.addHouse);
router.get('/houses', house.getAllHouse);
router.get('/houses/:id', house.getHouse);
router.put('/houses/:id', house.editHouse);
router.delete('/houses/:id', house.deleteHouse);

module.exports = router;

