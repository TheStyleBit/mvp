

module.exports.handleCreate = res => data => {
    const result = {
        status: 201,
        message: 'Created',
        data
    }

    res.status(result.status).json(result)
}

