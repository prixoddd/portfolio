import React from 'react';
import s from './DistantWork.module.css'
import styleContainer from '../common/styles/Container.module.css';

const DistantWork = () => {
    return (
        <div className={s.distantWorkBlock}>
            <div className={`${styleContainer.container} ${s.distantWorkContainer}`}>
                <h4>I am looking for a job with the possibility of working from home</h4>
                <button>Hire me</button>
            </div>
        </div>
    );
};

export default DistantWork;