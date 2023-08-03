const router = require('express').Router();
const {
  getThought,
  getSingleThought,
  createThought,
  updateThought,
  deleteThouhgt,
} = require('../../controllers/thoughtController.js');

// /api/thoughts
router.route('/').get(getThought)
                .post(createThought);

// /api/thought/:thhoughtId
router.route('/:_id')
      .get(getSingleThought)
      .put(updateThought)
      .delete(deleteThouhgt);

module.exports = router;
