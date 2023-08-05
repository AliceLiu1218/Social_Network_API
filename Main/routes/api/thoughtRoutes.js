const router = require('express').Router();
const {
  getThought,
  getSingleThought,
  createThought,
  updateThought,
  deleteThouhgt,
  AddReaction,
} = require('../../controllers/thoughtController.js');

// /api/thoughts
router.route('/').get(getThought)
                .post(createThought);


router.route('/:_id')
      .get(getSingleThought)
      .put(updateThought)
      .delete(deleteThouhgt);

router.route('/:_id/reactions').post(AddReaction);


module.exports = router;
