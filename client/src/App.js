import React from 'react';

import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import CardPage from './components/CardPage/CardPage';
import './App.css';

const App = () => {
    return(
        <div>
            <NavBar/>
            <CardPage/>
            <Footer/>
        </div>
    );
}

export default App;