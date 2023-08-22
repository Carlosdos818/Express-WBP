const eateryModel = require('../models/eateryModel')



function index(req, res) {
    const eateries = eateryModel.getAll();
    res.render('eateries/list', { eateries });
}

function show(req, res) {
    const id = parseInt(req.params.id);
    const eatery = eateryModel.getOne(id);

    res.render('eateries/details', { eatery });

}

module.exports = {
    index,
    show
}