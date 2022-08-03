const router = require("express").Router();
const angry = require("../songs/angrySongs");
const chill = require("../songs/chillSongs");
const happy = require("../songs/happySongs");
const love = require("../songs/loveSongs");
const sad = require("../songs/sadSongs");

router.get("/", (req, res) => {
     res.status(200).json({ message: "hi" });
});
router.get("/angry", (req, res) => {
     res.status(200).json(angry);
});
router.get("/chill", (req, res) => {
     res.status(200).json(chill);
});
router.get("/happy", (req, res) => {
     res.status(200).json(happy);
});
router.get("/love", (req, res) => {
     res.status(200).json(love);
});
router.get("/sad", (req, res) => {
     res.status(200).json(sad);
});

module.exports = router;
