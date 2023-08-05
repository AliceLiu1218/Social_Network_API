const { ObjectId } = require('mongoose').Types;
const { Student, Course, User } = require('../models');

// // Aggregate function to get the number of students overall
const headCount = async () => {
  const numberOfStudents = await Student.aggregate()
    .count('studentCount');
  return numberOfStudents;
}

// // Aggregate function for getting the overall grade using $avg
// const grade = async (studentId) =>
//   Student.aggregate([
//     // only include the given student by using $match
//     { $match: { _id: new ObjectId(studentId) } },
//     {
//       $unwind: '$assignments',
//     },
//     {
//       $group: {
//         _id: new ObjectId(studentId),
//         overallGrade: { $avg: '$assignments.score' },
//       },
//     },
//   ]);

  module.exports = {
    // Get all users
    async getUser(req, res) {
      try {
        const users = await User.find();
        res.json(users);
      } catch (err) {
        res.status(500).json(err);
      }
    },
    // Get a user
    async getSingleUser(req, res) {
      try {
        const user = await User.findOne({ _id: req.params._id })
          .select('-__v');
  
        if (!user) {
          return res.status(404).json({ message: 'No user with that ID' });
        }
  
        res.json(user);
      } catch (err) {
        res.status(500).json(err);
      }
    },
    // Create a user
    async createUser(req, res) {
      try {
        const user = await User.create(req.body);
        res.json(user);
      } catch (err) {
        console.log(err);
        return res.status(500).json(err);
      }
    },
    // Delete a thought
    async deleteUser(req, res) {
      try {
        const user = await User.findOneAndDelete({ _id: req.params._id });
        res.json({ message: 'User deleted!' });
      } catch (err) {
        res.status(500).json(err);
      }
    },
    // Update a thought
    async updateUser(req, res) {
      try {
        const user = await User.findOneAndUpdate(
          { _id: req.params._id },
          { $set: req.body },
          { runValidators: true, new: true }
        );
  
        if (!user) {
          res.status(404).json({ message: 'No thoguht with this id!' });
        }
  
        res.json(user);
        res.json({ message: 'User of thit id updated!' });
      } catch (err) {
        res.status(500).json(err);
      }
    },

    //Add a frind
    async addFriend (req, res) {
      try{
        const friend = await User.findByIdAndUpdate(
          
          req.params._id,
          { $push: { friends: req.body } },
          { new: true }
        );

        if (!friend) {
          res.status(404).json({ message: 'No friend array with this id!' });
        }
  
        res.json(friend);
        res.json({ message: 'Friend array of that User of thit id was added!' });
      }catch (err) {
        res.status(500).json(err);
      }
    },

    // Delete a friend who exists in friend array
    async deleteFriend (req, res) {
      try{
        const friend = await User.findByIdAndUpdate(
          
          req.params._id,
          { $pull: { friends: req.params.friendId } },
          { new: true }
        );

        if (!friend) {
          res.status(404).json({ message: 'No friend array with this id!' });
        }
  
        res.json(friend);
        res.json({ message: 'Friend array of that User of thit id was added!' });
      }catch (err) {
        res.status(500).json(err);
      }
    },
  };