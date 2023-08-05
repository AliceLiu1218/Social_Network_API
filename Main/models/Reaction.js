const { Schema, model } = require('mongoose');

// Schema to create a course model
const reactionSchema = new Schema(
  {
    reactionBody: {
      type: String,
      default: true,
    },
    username: {
      type: String,
    },
    createdAt: {
      type: Date,
      // Sets a default value of 12 weeks from now
      default: () => new Date(+new Date() + 84 * 24 * 60 * 60 * 1000),
    },
    
    
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);


const Reaction = model('reaction', reactionSchema);

module.exports = Reaction;