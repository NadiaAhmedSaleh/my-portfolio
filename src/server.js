const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "hebaahmadsaleh@gmail.com",
    pass: "vrbz deku dtla xrhr",
  },
});
app.post("/api/send", (req, res) => {
  const mailOptions = {
    cc: "nadiaahmedsaleh99@gmail.com",
    from: req.body.email,
    to: "hebaahmadsaleh@gmail.com",
    subject: "contact Nadia ",
    html: req.body.message,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error);
    }
    res.status(200).send("Email sent successfully");
  });
});
const port = 3030;
app.listen(port, () => console.log(`Server running on port ${port}`));
