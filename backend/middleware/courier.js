function courier(req, res, next) {
    if (!req.user.isCourier) {
        return res.status(403).send('Forbidden');
    }

    next();
}

module.exports = courier;