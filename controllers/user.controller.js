import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        if (!(name || email || password || role)) {
            return res.status(400).json({ message: "All fields are required" });
        }

        if (!email.includes("@")) {
            return res.status(400).json({ message: "invalid email format" });
        }

        if (!(role == "ADMIN" || role == "STAFF" || role == "CITIZEN")) {
            return res.status(400).json({ message: "invalid Role" });
        }

        const exist = User.findOne({ email: email });
        if (exist) {
            return res
                .status(400)
                .json({ message: "already registered with this email" });
        }

        const hashedPwd = await bcrypt.hash(password, 10);

        const user = await User.create({
            name: name,
            email: email,
            password: hashedPwd,
            role: role,
        });

        res.status(201).json({
            Success: true,
            message: "User registered successfully",
        });
    } catch (err) {
        return res.status(500).json({ err: err });
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;

    const exist = await User.findOne({ email: email });

    if (!exist) {
        return res.status(401).json({
            message: "User not found",
        });
    }

    const user = await User.findOne({ email: email });

    const pwdCheck = bcrypt.compare(user.password, password);

    if (!pwdCheck) {
        return res.status(401).json({ message: "Incorret password" });
    }
    const token = jwt.sign(
        {
            id: user._id,
        },
        "secret",
    );

    res.status(200)
        .cookie("id", user._id)
        .json({ message: "Successfully logged in", jwt: token });
};

export const profile = async (req, res) => {
    try {
        const id = req.cookies.id || false;

        if (!id) {
            return res.status(403).json({
                success: false,
                data: { message: "Unauthorised, Please login" },
            });
        }

        const user = await User.findById(id);
        res.status(200).json({
            success: true,
            data: {
                id: user.id,
                name: user.name,
                role: user.role,
            },
        });
    } catch (err) {
        res.status(401).json({ message: "unauthorized" });
    }
};

export const logout = async (req, res) => {
    res.cookie("id", null);
    res.status(200).json({
        success: true,
        message: "Logged out successfully",
    });
};

export const findUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: "internal server error" });
    }
};

export const findFilter = async (req, res) => {
    try {
        // console.log(req.params.id);
        const users = await User.find({_id: req.params.id})
        res.status(200).json(users)
    } catch (err) {
        res.status(500).json({ message: "internal server error" });
    }
};
