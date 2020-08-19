const Joi = require("joi")

const usersSchema = Joi.object({
    name: Joi.string().pattern(new RegExp('^[a-zA-Z]')).min(2).max(20).required(),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "il", "co", "gov"] } }),
    phone: Joi.string().pattern(new RegExp("^[0-9]*$")).min(10).max(10),
    text: Joi.string().min(3).max(50).required()
})

const usersValidation = async (req, res, next) => {
    try {
        const { name, email, phone, text } = req.body
        if (!phone) {
            const check = await validator({ name, email, text })
            if (check === "name") return res.json({ message: "Invalid Name",key:"name"})
            if (check === "email") return res.json({ message: "Invalid Email",key:"email" })
            if (check === "text") return res.json({ message: "Message too short/long",key:"message" })
        } else {
            const check = await validator({ name, phone, text })
            if (check === "name") return res.json({ message: "Invalid Name",key:"name" })
            if (check === "phone") return res.json({ message: "Invalid Phone number",key:"phone" })
            if (check === "text") return res.json({ message: "Message too short/long",key:"message" })
        }
    }
    catch{
        return res.json({ message: "Something went wrong. Please try again later" })
    }
    next();
}

const validator = async (obj) => {
    const { error } = usersSchema.validate(obj);
    if (error) {
        // console.log(error, "error message")
        // console.log(error.details[0].context.key)
        return error.details[0].context.key
    }
}


module.exports = usersValidation;
