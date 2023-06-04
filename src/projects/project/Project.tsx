import React from 'react';
import s from './Project.module.css'
import e from '../../common/styles/Elements.module.css'

type ProjectPropsType = {
    projTitle: string
    projDescription: string
}

const Project = (props: ProjectPropsType) => {
    return (
        <div className={s.project}>
            <div className={s.imageAndButton}>
                {/*<img src="https://miro.medium.com/v2/resize:fit:0/0*KIKnUvzdIkp5zcDJ" alt=""/>*/}
                <button className={e.elementButton}>
                    Смотреть
                </button>
            </div>
            <div className={s.projTitle}>
                {props.projTitle}
            </div>
            <div className={s.projDescription}>
                {props.projDescription}
            </div>

        </div>
    );
};

export default Project;