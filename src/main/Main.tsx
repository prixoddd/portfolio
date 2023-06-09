import React from 'react';
import s from './Main.module.css'
import styleContainer from '../common/styles/Container.module.css'

const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={styleContainer.container}>
                <div className={s.greeting}>
                    <span>Hi There</span>
                    <h1>I am Nikita Derjugin</h1>
                    <p>A Graphic Designer., Frontend Developer</p>
                </div>
                <div className={s.photo}></div>
            </div>

        </div>
    );
};

export default Main;