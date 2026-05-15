const mongoose = require("mongoose");

const manuscriptSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phone: String,
  location: String,
  authorBio: String,
  socialLinks: String,

  title: String,
  subtitle: String,
  genre: String,
  language: String,
  wordCount: String,
  targetAudience: String,
  manuscriptStatus: String,
  synopsis: String,
  whyMatters: String,

  manuscriptFile: String,
  proposalFile: String,
  sampleFile: String,
  supportFile: String,

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Manuscript", manuscriptSchema);