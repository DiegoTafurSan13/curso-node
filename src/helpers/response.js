

function success(req, res, message, status) {
    res.status(200 || status).send(
        {
            err: '',
            message
        }
    );
}
function error(req, res, message, status) {
    res.status(400 || status).send(
        {
            err: message,
            message: ''
        }
    );
}

module.exports = {
    success,
    error
};

