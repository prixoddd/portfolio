import React from 'react';
import s from './Project.module.sass'
import e from '../../common/styles/Elements.module.sass'

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
                    <span>Смотреть</span>
                </button>
            </div>
           <div className={s.projectInfo}>
               <h3 className={s.projTitle}>
                   {props.projTitle}
               </h3>
               <span className={s.projDescription}>
                {props.projDescription}
            </span>
           </div>

        </div>
    );
};

export default Project;