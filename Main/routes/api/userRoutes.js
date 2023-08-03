const router = require('express').Router();
const {
  getUser,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
  addAssignment,
  removeAssignment,
} = require('../../controllers/userController');

// /api/students
router.route('/').get(getUser)
                .post(createUser);

// /api/students/:studentId
router.route('/:_id').get(getSingleUser)
                        .put(updateUser)
                        .delete(deleteUser);

// /api/students/:studentId/assignments
// router.route('/:userId/friends').post(addAssignment);

// /api/students/:studentId/assignments/:assignmentId
// router.route('/:userId/friends/:friendId').delete(removeAssignment);

module.exports = router;
