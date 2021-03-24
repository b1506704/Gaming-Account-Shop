import React from 'react';

import Card from './Card/Card';
import './CardPage.css';

const CardPage = () => {
    return(
        <main>
            <div className="featured">
                <h2> Welcome to Gaming Account Shop</h2>
                <p> Most trusted account trading platform</p>
                <div className="card_container">
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </div>
            </div>

        </main>
    );
}
export default CardPage;