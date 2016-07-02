var express = require('express');
var router = express.Router();
var users = require("../lib/users")
var parseAllUsers = require("../lib/logic")
var parseSingleUser = require("../lib/userLogic")
    /* GET home page. */
router.get('/users', function(req, res, next) {
    res.json(users);
});
router.get('/active_users', function(req, res, next) {
    res.json(parseAllUsers(users))
})
router.get('/users/:id', function(req, res, next) {
    var id = req.params.id
    var obj = parseSingleUser(id, users)
    res.render('index', obj)
})

module.exports = router;