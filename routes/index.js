const router = require("express").Router();

router.get("/", async (req, res) => {
    res.render("../views/index.html", {});
});

module.exports = router;