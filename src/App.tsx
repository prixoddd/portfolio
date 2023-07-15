import React from 'react';
import s from './App.module.sass'
import Header from './header/Header';
import Main from './main/Main';
import Skills from './skills/Skills';
import Projects from './projects/Projects';
import DistantWork from './distantwork/DistantWork';
import Contacts from './contacts/Contacts';
import Footer from './footer/Footer';

function App() {
    return (
        <div className={s.App}>

            <video className="body-overlay" muted autoPlay loop>
                <source src={require('../src/backgroundVideo/video4.mp4')} type="video/mp4" />
            </video>

            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <DistantWork />
            <Contacts />
            <Footer />
        </div>
    );
}

export default App;
