import { User } from "../models/user.model.js"

const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body

        // basic validation
        if (!username || !email || !password) {
            return res.status(400).json({ message: "All fields are important" })
        }

        // check if user already exists
        const existing = await User.findOne({ email: email.toLowercaase() })
        if (existing) {
            return res.status(400).json({ message: "User already exists" })
        }

        //  Create User
        const user = await User.create({
            username,
            email: email.toLowercase(),
            password,
            loggedIn: false
        })
        res.status(201).json({
            message: "User registered",
            user: { id: user._id, username: user.username, email: user.email }
        })
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message })
    }
}

export {
    registerUser
};