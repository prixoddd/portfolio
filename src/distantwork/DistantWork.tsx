import React from 'react'
import s from './DistantWork.module.sass'
import e from '../common/styles/Elements.module.sass'
import { Zoom } from 'react-awesome-reveal'

const DistantWork = () => {
    return (
        <div id={'work_from_home'} className={s.distantWorkBlock}>
            <Zoom>
                <div className={`${s.distantWorkContainer}`}>
                    <h3>I am looking for a job with the possibility of working from home</h3>
                    <button className={e.mainButton}>Hire me!</button>
                </div>
            </Zoom>
        </div>
    )
}

export default DistantWork
