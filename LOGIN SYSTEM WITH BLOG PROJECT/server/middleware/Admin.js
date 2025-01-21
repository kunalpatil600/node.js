const isAdmin = (req, res, next) => {
    if (req.user.role != "admin") {
        res.status(400).json({ message: "you have not permissin to get notes" })
    }
    next()
}
module.exports = isAdmin