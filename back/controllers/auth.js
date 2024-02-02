import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

// Register user
export const register = async (request, response) => {
    try {
        const {
            firstName,
            lastName,
            email,
            password
        } = request.body;
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        const newUser = new User({
            firstName,
            lastName,
            email,
            password: passwordHash
        });
        const savedUser = await newUser.save();
        response.status(201).json(savedUser);
    } catch (err) {
        response.status(500).json({ error: err.message });
    }
}