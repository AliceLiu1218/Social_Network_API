const { Schema, model } = require('mongoose');


// Schema to create Student model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      max_length: 50,
    },
    email: {
      type: String,
      required: true,
      max_length: 50,
    },
    thoughts: [{
      type: Schema.Types.ObjectId,
      ref: 'thought', // This establishes the reference to the Author model
    }],
    friends : [{
      type: Schema.Types.ObjectId,
      ref: 'user', // This establishes the reference to the Author model
    }],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

// Define the virtual field 'subordinatesCount'
userSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});

const User = model('user', userSchema);

module.exports = User;



//What is your end goal? To add a friend to a user

//What do you need to know? The ID of the new friend. And ID of the User

//api/users -> Get ALL or POST (add user)

//api/users/:id -> Get ONe, Delete One, Update One,

//api/users/:id/friends -> POST (add a new friend)

//api/users/:id/friends/:friendId -> (delete a friend)