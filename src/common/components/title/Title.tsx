import React from 'react';
import s from './Title.module.sass';

type PropsTitle = {
    title: string
}

const Title = (props: PropsTitle) => {
    return (
        <div className={s.one}>
            <h4 className={s.title}>{props.title}</h4>
        </div>

    );
};

export default Title;