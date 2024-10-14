const express = require('express')
const authMiddleware = require("../middleware/authMiddleware")
const {allUsers,allContacts, deleteUserById, getUserById, updateUserById, deleteContactById } = require('../controller/admin-controller');
const adminMiddleware = require('../middleware/admin-middleware');

const router = express.Router();


router.route('/users').get(authMiddleware,adminMiddleware, allUsers)

router.route('/users/:id').get(authMiddleware,adminMiddleware, getUserById)

router.route('/users/update/:id').patch (authMiddleware,adminMiddleware, updateUserById)

router.route('/users/delete/:id').delete(authMiddleware,adminMiddleware, deleteUserById)

router.route('/contacts').get(authMiddleware, adminMiddleware,  allContacts)

router.route('/contacts/delete/:id').delete(authMiddleware,adminMiddleware, deleteContactById)

module.exports = router;