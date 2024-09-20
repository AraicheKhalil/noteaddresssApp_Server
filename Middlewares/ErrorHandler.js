const {StatusCodes} = require('http-status-codes')

const errorHandler = (err, req, res, next) => {
  
    let CostumError = {
      statusCode : err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
      msg : err.message || 'Somthing went wrong try again later',
    }


    // return res.status(500).json({err })
    return res.status(CostumError.statusCode).json({err : CostumError.msg})


};

module.exports = errorHandler