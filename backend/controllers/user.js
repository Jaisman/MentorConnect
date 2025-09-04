// controllers/authController.js
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import user from '../models/user.js';
const secret = "yoyohoneysingh";

// Signup
export async function handleUserSignUp(req, res) {
    try {
        const { role, fullName, email, password, bio, linkedIn } = req.body;

        // Check if user exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already in use" });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);

        // Create user
        const user = await User.create({
            role,
            fullName,
            email,
            passwordHash,
            bio,
            linkedIn,
        });

        // Response object
        const userResponse = {
            id: user._id,
            role: user.role,
            fullName: user.fullName,
            email: user.email,
            bio: user.bio,
            linkedIn: user.linkedIn,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
        };

        return res.status(201).json(userResponse);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Server error" });
    }
}

// Login
export async function handleUserLogin(req,res) {
    try {
        const { email, password } = req.body;

        // Find user
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, user.passwordHash);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // Generate JWT
        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        const userResponse = {
            id: user._id,
            role: user.role,
            fullName: user.fullName,
            email: user.email,
            bio: user.bio,
            linkedIn: user.linkedIn,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
            token,
        };

        return res.status(200).json(userResponse);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Server error" });
    }
}
