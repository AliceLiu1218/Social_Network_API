const { Schema, model } = require('mongoose');

// Schema to create a course model
const thoughtSchema = new Schema(
  {
    thoughtText: {
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
    reactions: [],
    
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);


// Define the virtual field 'subordinatesCount'
thoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
