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
    const { id, price, category, name, passWord, email, phoneNumber, imgUrl, isBought, accOwner, accSeller, attr1, attr2, attr3, attr4 } = req.body;

    const newAccount = new Account(
        { 
            id: id, 
            price: price,
            name: name,
            passWord: passWord,
            email: email,
            phoneNumber: phoneNumber,
            category: category,
            imgUrl: imgUrl, 
            isBought: isBought,
            accOwner: accOwner,
            accSeller: accSeller, 
            attr1: attr1, 
            attr2: attr2, 
            attr3: attr3, 
            attr4: attr4 
        }
    );

    try {
        await newAccount.save();
        res.status(201).json(newAccount);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateAccount = async (req, res) => { 
    const { id } = req.params;
    const { price, category, name, passWord, email, phoneNumber, imgUrl, attr1, attr2, attr3, attr4 } = req.body;
    try {
        const account = await Account.findOne({id: id});
        const updatedAccount = await Account.findOneAndUpdate(
            {id: account.id},
            {
                price,
                name,
                passWord,
                email,
                phoneNumber, 
                category, 
                imgUrl, 
                attr1, 
                attr2, 
                attr3, 
                attr4},
            {new: true}
        );
        res.status(200).json(updatedAccount);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export default router;