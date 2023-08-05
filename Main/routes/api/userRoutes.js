const router = require('express').Router();
const {
  getUser,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
  addFriend,
  deleteFriend,
  addThought,
  deleteThought,
} = require('../../controllers/userController');


router.route('/').get(getUser)
                .post(createUser);

router.route('/:_id').post(addThought);
router.route('/:_id/:_thoughtId').delete(deleteThought);

router.route('/:_id').get(getSingleUser)
                        .put(updateUser)
                        .delete(deleteUser);


router.route('/:_id/friends').post(addFriend);
router.route('/:_id/friends/:friendId').delete(deleteFriend);


module.exports = router;
