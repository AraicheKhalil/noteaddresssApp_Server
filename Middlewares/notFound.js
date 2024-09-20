const {StatusCodes} = require('http-status-codes');

const notFound = (req,res) => {
    res.status(StatusCodes.NOT_FOUND).send("not Found he")
}

module.exports = notFound

