import { handleValidationError } from "../middlewares/errorHandler.js";
import {Admin } from "../models/adminRegisterSchema.js";
import { Student } from "../models/usersSchema.js";
import { Teacher } from "../models/usersSchema.js";


export const adminSignIn = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        if (!email || !password) {
            handleValidationError("Please provide email and password", 400);
        }

        const existingAdmin = await adminSignIn.findOne({ email });

        if (!existingAdmin) {
            return res.status(401).json({ success: false, message: "Invalid email or password" });
        }

        const isPasswordValid = await existingAdmin.isValidPassword(password);

        if (!isPasswordValid) {
            return res.status(401).json({ success: false, message: "Invalid email or password" });
        }

        res.status(200).json({
            success: true,
            message: "Admin signed in successfully",
        });

    } catch (error) {
        next(err);
    }
}; 




// studentSignIn
export const studentSignIn = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        if (!email || !password) {
            handleValidationError("Pleasse provide email and password", 400);
        } 

        // Your sign-in logic for student goes here
        res.status(200).json({
            success : true,
            message : "Student signed in successfully",
        })
    } catch (error) {
        next(error);
    }
};





// teacherSignIn
export const teacherSignIn = async (req, res, next) => {
    const { email, password } = req.body;

    try {
       if (!email || !password) {
        handleValidationError("Please provide email and password", 400);
       } 

       // Your sign-in logic for teacher goes here
       res.status(200).json({
        success : true,
        message : "Teacher signed in successfully",
       });
    } catch (error) {
        next(error);
    }
};