const router = require("express").Router();
const Sanitiser = require("../models/Sanitiser");


router.get("/", async (req, res) => {
    try {

        const foundSanitiser = await Sanitiser.find();
        res.send(foundSanitiser);

    } catch (err) {
        res.status(400).send("[E] ", err);
    }
});


router.get("/:sanitiserNumber", async (req, res) => {
    try {

        const foundSanitiser = await Sanitiser.findOne({number: req.params.sanitiserNumber});
        res.send(foundSanitiser);

    } catch (err) {
        res.status(400).send("[E] ", err);
    }
});


router.post("/", async (req, res) => {

    const sanitiser = new Sanitiser(
        {
            name: req.body.name,
            number: req.body.number,
            level: req.body.level,
            lastUpdated: req.body.lastUpdated
        }
    );
    try{

        const savedSanitiser = await sanitiser.save();
        res.send(savedSanitiser);

    }catch(err){

        res.send("[E] " + err);

    }
    
});

router.delete("/:sanitiserNumber", async (req, res) => {
    try {

        const removedSanitiser = await Sanitiser.deleteOne({number: req.params.sanitiserNumber});
        res.send(removedSanitiser);

    } catch (err) {
        res.send("[E] " + err);
    }
    
});

router.patch("/:sanitiserNumber", async (req, res) => {
    try {
        const updatedTime = new Date();
        const patchedSanitiser = await Sanitiser.updateOne(
            {
                number: req.params.sanitiserNumber
            },
            {
                 $set: {
                 level: req.body.level,
                 lastUpdated: updatedTime
                }
            }
        );
        res.send(patchedSanitiser);
    } catch (err) {
        res.send("[E] " + err);
    }
    
});

module.exports = router;