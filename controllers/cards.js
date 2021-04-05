import express from 'express';

import Card from '../models/card.js';

const router = express.Router();

export const getCards = async (req, res) => { 
    try {
        const cards = await Card.find();
        res.status(200).json(cards);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const deleteCard = async (req, res) => { 
    const { id } = req.params;
    try {
        const card = await Card.findOneAndDelete({id: id});
        res.status(200).json(card);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const createCard = async (req, res) => {
    const { id, carrier, value } = req.body;
    const newCard = new Card({ id, carrier, value });

    try {
        await newCard.save();
        res.status(201).json(newCard);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
export const updateCard = async (req, res) => { 
    const { carrier, value } = req.body;
    try {
        const card = await Card.findOne({id: req.params.id});
        const updatedCard = await Card.findOneAndUpdate(
            {id: card.id},
            {carrier: carrier, value: value} , 
            {new: true}
        );
        res.status(200).json(updatedCard);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const getCard = async (req, res) => { 
    const { id } = req.body;

    try {
        const card = await Card.findOne({id: id});
        res.status(200).json(card);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export default router;