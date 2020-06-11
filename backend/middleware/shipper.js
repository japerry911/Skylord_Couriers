function shipper(req, res, next) {
    if (!req.user.isShipper) {
        return res.status(403).send('Forbidden');
    }

    next();
}

module.exports = shipper;