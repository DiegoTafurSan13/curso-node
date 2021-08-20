//Message response
const message =(req, res, message) =>{
    res.status(message.status || 200 ).send(
        {
            message
        }
    );
}


module.exports = {
    message
};

