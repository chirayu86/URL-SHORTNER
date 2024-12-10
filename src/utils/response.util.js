const getResponse = (httpStatusCode, httpStatusText, payload = null) => {
    return {
        code: httpStatusCode,
        message: httpStatusText,
        payload
    }
}


module.exports = {
    getResponse,
}