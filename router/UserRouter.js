express = require('express');
var userCtrl = require('../controller/UserCtrl')

var router = express.Router();

router.route('/getUser')
    .get(userCtrl.getUser);

module.exports = router;