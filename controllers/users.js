import express from 'express';

import User from '../models/user.js';

const router = express.Router();

export const getUsers = async (req, res) => { 
    try {
        const users = await User.find();
                
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const login = async (req, res) => { 
    const { userName, passWord } = req.body;

    try {
        const user = await User.findOneAndUpdate({userName: userName, passWord: passWord},{isLogin: true},{new:true});
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const logout = async (req, res) => { 
    const { userName } = req.body;
    try {
        const user = await User.findOneAndUpdate({userName: userName},{isLogin: false}, {new: true});
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createUser = async (req, res) => {
    const { userName, passWord } = req.body;

    const newUser = new User({ userName, passWord });

    try {
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
export const reduceBalance = async (req, res) => { 
    try {
        const {userName, price} = req.body;
        
        const user = await User.findOne({userName: userName});
        const balance = user.reduceBalance(price);
        res.status(200).json(balance);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const increaseBalance = async (req, res) => { 
    try {
        const {userName, price} = req.body;
        
        const user = await User.findOne({userName: userName});
        const balance = user.increaseBalance(price);
        res.status(200).json(balance);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export default router;