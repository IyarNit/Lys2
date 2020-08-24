const express = require("express")
const router = express.Router();
require("dotenv").config()
const userValidation = require("../validations/validateUser")

router.use(userValidation)

const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
router.post("/contact", async (req, res, next) => {
    try {

        const email = await main(req.body)
        console.log(email, "email")
        if (email) return res.json({ message: "Email Sent" })
    }
    catch (error) {
        console.log(error.message)
    }
})




module.exports = router


const main = async (obj) => {

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
          <li>Name: ${obj.name}</li>
          <li>Contact Method: ${obj.email || obj.phone}</li>
          </ul>
          <h3>Message:</h3>
          <p>${obj.text}</p>
          `
    });
    return info.messageId
    //     console.log("Message sent: %s", info.messageId);
    //     if (info.messageId) return res.status(200).json({ message: "Email Sent" })
    // } catch (error) {
    //     console.log(error)
    //     return res.status(403).json({ message: "Problem sending email" })
    // }
    // main().catch(console.error);
}