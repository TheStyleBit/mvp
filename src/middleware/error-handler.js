const handleError = (e, req, res, next) => {
            const result = {
                status: 500,
                code: e,
                message: e.message
            }

            console.log(e)
            res.status(result.status).json(result)
        }

module.exports = handleError
