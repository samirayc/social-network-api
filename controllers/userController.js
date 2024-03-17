const { User, Thought } = require('../models');

module.exports = {

    // Get all users
    getUser(req, res) {
        User.find({})
          .then((user) => res.json(user))
          .catch((err) => res.status(500).json(err));
      },

    // Get single user
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
          .populate("thoughts")
          .populate("friends")
          .select("-__v")
          .then((user) =>
            !user
              ? res.status(404).json({ message: "No User find with that ID!" })
              : res.json(user)
          )
          .catch((err) => res.status(500).json(err));
      },
      
    // Create a user

    // Update a user

    // Delete a user
    // BONUS: Remove a user's associated thoughts when deleted.

    // Add a friend

    // Delete a friend
};