const express = require("express");
const router = express.Router();

const multer = require("multer");
const nodemailer = require("nodemailer");

const Manuscript = require("../models/Manuscript");


// FILE STORAGE
const storage = multer.diskStorage({

  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },

  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },

});

const upload = multer({ storage });


// MULTIPLE FILES
const cpUpload = upload.fields([
  { name: "manuscriptFile", maxCount: 1 },
  { name: "proposalFile", maxCount: 1 },
  { name: "sampleFile", maxCount: 1 },
  { name: "supportFile", maxCount: 1 },
]);




// SUBMIT ROUTE
router.post("/submit", cpUpload, async (req, res) => {

  try {

    // SAVE TO DATABASE
    const newManuscript = new Manuscript({

      fullName: req.body.fullName,
      email: req.body.email,
      phone: req.body.phone,
      location: req.body.location,
      authorBio: req.body.authorBio,
      socialLinks: req.body.socialLinks,

      title: req.body.title,
      subtitle: req.body.subtitle,
      genre: req.body.genre,
      language: req.body.language,
      wordCount: req.body.wordCount,
      targetAudience: req.body.targetAudience,
      manuscriptStatus: req.body.manuscriptStatus,
      synopsis: req.body.synopsis,
      whyMatters: req.body.whyMatters,

      manuscriptFile: req.files.manuscriptFile?.[0]?.filename,
      proposalFile: req.files.proposalFile?.[0]?.filename,
      sampleFile: req.files.sampleFile?.[0]?.filename,
      supportFile: req.files.supportFile?.[0]?.filename,

    });

    await newManuscript.save();




    // EMAIL NOTIFICATION
    const transporter = nodemailer.createTransport({

      service: "gmail",

      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },

    });



    await transporter.sendMail({

      from: process.env.EMAIL_USER,

      to: process.env.COMPANY_EMAIL,

      subject: "New Manuscript Submission",

      html: `
        <h2>New Manuscript Submission</h2>

        <p><strong>Name:</strong> ${req.body.fullName}</p>

        <p><strong>Email:</strong> ${req.body.email}</p>

        <p><strong>Book Title:</strong> ${req.body.title}</p>

        <p><strong>Genre:</strong> ${req.body.genre}</p>
      `,

    });




    // SUCCESS RESPONSE
    res.status(200).json({

      success: true,

      message: "Manuscript submitted successfully!",

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({

      success: false,

      message: "Submission failed",

    });

  }

});

module.exports = router;