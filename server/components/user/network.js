//Requiring dependencies without writing const over and over again :P

const

express = require('express'),
router = express.Router(),
response = require('../../network/response'),
controller = require('./controller')


//Actual code

//Posts an user on the database (body.name/description/twitter is needed on request)
router.post('/', (req, res) => {
    controller.addUser(req.body.name, req.body.description, req.body.twitter)
    .then((data) => {
      response.success(req,res, data)
    })
    .catch((e) => {
      response.error(req, res, 'Please, make sure to fill all required fields.', e, 400)
    })
})


//Gets an array of users (Can be filtered by name on query)
router.get('/', (req, res) => {
  controller.getUser(req.query.name).
  then((data) => {
    response.success(req, res, data)
  })
  .catch((e) => {
    response.error(req, res, e, 'Error getting user', 404)
  })
})

module.exports = router
