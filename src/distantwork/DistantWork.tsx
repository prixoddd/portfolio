import React from 'react';
import s from './DistantWork.module.sass'
import e from '../common/styles/Elements.module.sass'
import styleContainer from '../common/styles/Container.module.sass';

const DistantWork = () => {
    return (
        <div className={s.distantWorkBlock}>
            <div className={`${styleContainer.container} ${s.distantWorkContainer}`}>
                <h3>I am looking for a job with the possibility of working from home</h3>
                <button className={e.mainButton}>Hire me!</button>
            </div>
        </div>
    );
};

export default DistantWork;