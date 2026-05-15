const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const nodemailer = require("nodemailer");

require("dotenv").config();

const app = express();

// ================= MIDDLEWARE =================
app.use(cors());
app.use(express.json());

// ================= DATABASE =================
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// ================= EMAIL SETUP =================
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ================= SCHEMA =================
const manuscriptSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phone: String,
  city: String,
  authorBio: String,
  website: String,

  title: String,
  subtitle: String,
  genre: String,
  language: String,
  wordCount: String,
  targetAudience: String,
  currentStatus: String,

  synopsis: String,
  whyMatters: String,
});

const Manuscript = mongoose.model("Manuscript", manuscriptSchema);

// ================= ROUTE =================
app.post("/api/manuscript", async (req, res) => {
  try {
    console.log(req.body);

    // ================= SAVE TO DATABASE =================
    const newManuscript = new Manuscript(req.body);

    await newManuscript.save();

    // ================= EMAIL =================
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.COMPANY_EMAIL,
      subject: "New Manuscript Submission",

      html: `
        <h2>New Manuscript Submitted</h2>

        <h3>Author Details</h3>

        <p><strong>Full Name:</strong> ${req.body.fullName}</p>
        <p><strong>Email:</strong> ${req.body.email}</p>
        <p><strong>Phone:</strong> ${req.body.phone}</p>
        <p><strong>City:</strong> ${req.body.city}</p>
        <p><strong>Author Bio:</strong> ${req.body.authorBio}</p>
        <p><strong>Website:</strong> ${req.body.website}</p>

        <hr />

        <h3>Manuscript Details</h3>

        <p><strong>Title:</strong> ${req.body.title}</p>
        <p><strong>Subtitle:</strong> ${req.body.subtitle}</p>
        <p><strong>Genre:</strong> ${req.body.genre}</p>
        <p><strong>Language:</strong> ${req.body.language}</p>
        <p><strong>Word Count:</strong> ${req.body.wordCount}</p>
        <p><strong>Target Audience:</strong> ${req.body.targetAudience}</p>
        <p><strong>Current Status:</strong> ${req.body.currentStatus}</p>

        <hr />

        <h3>Synopsis</h3>

        <p>${req.body.synopsis}</p>

        <h3>Why This Work Matters</h3>

        <p>${req.body.whyMatters}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    // ================= RESPONSE =================
    res.status(200).json({
      success: true,
      message: "Manuscript submitted successfully",
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});

// ================= PORT =================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});