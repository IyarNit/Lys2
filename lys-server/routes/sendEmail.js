const express = require("express")
const router = express.Router();
require("dotenv").config()
const userValidation = require("../validations/validateUser")

router.use(userValidation)

const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
router.post("/contact", async (req, res, next) => {
    const main = async () => {
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.SMTPHOSTEMAILUSER,
                pass: process.env.SMTPHOSTEMAILPASSWORD,
            }
            // ,
            // tls: {
            //     rejectUnauthorized: false
            // }
        });

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: process.env.SMTPHOSTEMAILUSER, // sender address
            to: process.env.DESIGNATEDSUPPORTEMAIL, // list of receivers
            // text: "Lorem", // plain text body
            html: `
            <h2>Contact Request</h2>
            <h3>Contact Details</h3>
            <ul>  
              <li>Name: ${req.body.name}</li>
              <li>Contact Method: ${req.body.email || req.body.phone}</li>
            </ul>
            <h3>Message:</h3>
            <p>${req.body.text}</p>
          `
        });

        console.log("Message sent: %s", info.messageId);
        if (info.messageId) return res.status(200).json({ message: "Email Sent" })
    }
    main().catch(console.error);
})




module.exports = router                          