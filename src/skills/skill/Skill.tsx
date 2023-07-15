import React from 'react';
import s from './Skill.module.sass'

type SkillPropsType = {
    title: string
    description: string
    svgImage: string

}

const Skill = (props: SkillPropsType) => {
    return (
        <div className={s.skill}>
            <img src={props.svgImage} alt=""  className={s.icon}></img>
            <h3 className={s.title}>{
                props.title
            }</h3>
            <p className={s.description}>{props.description}</p>
            </div>
    );
};

export default Skill;