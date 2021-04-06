import express from 'express';

import isValidPurchase from '../middleware/transaction_auth.js';
import User from '../models/user.js';
import Card from '../models/card.js';
import Account from '../models/account.js';


const router = express.Router();

export const getUsers = async (req, res) => { 
    try {
        const users = await User.find();
                
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getUser = async (req, res) => {
    const { userName } = req.params;
    try {
        const user = await User.findOne({userName: userName});
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json(error.message);
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
        const card = await Card.findOne({id, carrier, value});
        if (card.isBought === false) {
            const updatedCard = await Card.findOneAndUpdate({id: id, carrier: carrier, value: value},{isBought: true}, {new: true});
            const updatedUser = await User.findOneAndUpdate({userName: userName},{balance: user.balance + updatedCard.value}, {new: true});
            res.status(200).json(updatedUser.balance);
        } else {
            res.status(404).json("Xảy ra lỗi!");
        }
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const buyAccount = async (req, res) => { 
    const { userName } = req.params;
    const { id } = req.body;
    //todo: INCREASE ACC SELLER BALANCE
    try {
        const user = await User.findOne({userName: userName});
        const account = await Account.findOne({id});
        if (account.isBought === false && isValidPurchase(user.balance,account.price)) {
            const updatedAccount = await Account.findOneAndUpdate({id: id},{isBought: true, accOwner: userName}, {new: true});
            const updatedUser = await User.findOneAndUpdate(
                {userName: userName},
                {
                    balance: user.balance - updatedAccount.price,
                    $push: {accountOwnList: updatedAccount.id},
                },
                {new: true});
            res.status(200).json(updatedUser.balance);
        } else {
            res.status(404).json("Xảy ra lỗi!");
        }
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const sellAccount = async (req, res) => { 
    const { userName } = req.params;
    const { id } = req.body;
    try {
        const user = await User.findOne({userName: userName});
        const account = await Account.findOne({id});
        const updatedAccount = await Account.findOneAndUpdate({id: id},{accSeller: userName}, {new: true});
        const updatedUser = await User.findOneAndUpdate(
            {userName: userName},
            {
                balance: user.balance - updatedAccount.price,
                $push: {accountSellList: updatedAccount.id},
            },
            {new: true}
        );
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export default router;