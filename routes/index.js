const { Router } = require("express")

const router = Router()

router.use(require("../routes/book.route"))
router.use(require("../routes/genre.route"))
router.use(require("../routes/comment.route"))
router.use(require("../routes/user.route"))



module.exports = router