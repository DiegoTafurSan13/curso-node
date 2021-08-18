

function success(req, res, message) {
    res.status(message.status || 200 ).send(
        {
            message
        }
    );
}


module.exports = {
    success
};

