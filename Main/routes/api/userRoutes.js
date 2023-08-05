const router = require('express').Router();
const {
  getUser,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
  addFriend,
  removeAssignment,
} = require('../../controllers/userController');


router.route('/').get(getUser)
                .post(createUser);


router.route('/:_id').get(getSingleUser)
                        .put(updateUser)
                        .delete(deleteUser);


router.route('/:_id/friends').post(addFriend);

// /api/students/:studentId/assignments/:assignmentId
// router.route('/:userId/friends/:friendId').delete(removeAssignment);

module.exports = router;
