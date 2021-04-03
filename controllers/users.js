import express from 'express';

import User from '../models/user.js';
import Card from '../models/card.js';

const router = express.Router();

export const getUsers = async (req, res) => { 
    try {
        const users = await User.find();
                
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
//???
export const getUser = async (req, res) => { 
    const { userName } = req.params;

    try {
        const user = await User.findOne({userName: userName});
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const login = async (req, res) => { 
    const { userName, passWord } = req.body;

    try {
        const user = await User.findOneAndUpdate({userName: userName, passWord: passWord},{isLogin: true},{new:true});
        if (user === null) {
            res.status(404).json("Đăng nhập thất bại");
        } else {
            res.status(200).json(user);
        }
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const logout = async (req, res) => { 
    const { userName } = req.body;
    try {
        const user = await User.findOneAndUpdate({userName: userName},{isLogin: false}, {new: true});
        res.status(200).json(null);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createUser = async (req, res) => {
    const { userName, passWord, phoneNumber } = req.body;

    const newUser = new User({ userName, passWord, phoneNumber });

    try {
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const addCredit = async (req, res) => { 
    const { userName } = req.params;
    const { id, carrier, value } = req.body;
    try {
        const user = await User.findOne({userName: userName});
        const card = await Card.findOneAndUpdate({id: id, carrier: carrier, value: value},{isBought: true}, {new: true});
        const updatedUser = await User.findOneAndUpdate({userName: userName},{balance: user.balance + card.value}, {new: true});
        res.status(200).json(updatedUser.balance);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const buyAccount = async (req, res) => { 
    const { userName } = req.params;
    
    const { value } = req.body;
    try {
        const user = await User.findOneAndUpdate({userName: userName},{balance: user.balance +value}, {new: true});
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export default router;