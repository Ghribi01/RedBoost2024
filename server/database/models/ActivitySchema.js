const mongoose = require('mongoose')

const activitySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    createdBy: {
      type: String,
    },
    program: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Program', // Reference to the Program model
    },
  },
  {
    timestamps: true,
  },
)

const Activity = mongoose.model('Activity', activitySchema)

module.exports = Activity
