import express from 'express';

import Account from '../models/account.js';

const router = express.Router();

export const getAccounts = async (req, res) => { 
    try {
        const accounts = await Account.find();
                
        res.status(200).json(accounts);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const deleteAccount = async (req, res) => { 
    const { id } = req.params;
    try {
        const account = await Account.findOneAndDelete({id: id});
        res.status(200).json(account);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createAccount = async (req, res) => {
    const { id, price, isBought, accOwner } = req.body;

    const newAccount = new Account({ id: id, price:price, isBought:isBought, accOwner:accOwner });

    try {
        await newAccount.save();
        res.status(201).json(newAccount);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export default router;