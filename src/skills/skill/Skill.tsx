import React from 'react';
import s from './Skill.module.css'

type SkillPropsType = {
    title: string
    description: string
}

const Skill = (props: SkillPropsType) => {
    return (
        <div className={s.skill}>
            <div className={s.icon}></div>
            <h3>{
                props.title
            }</h3>
            <div className={s.description}>{props.description}</div>
            </div>
    );
};

export default Skill;