import React from 'react';
import s from './Projects.module.sass'

import styleContainer from '../common/styles/Container.module.sass';
import Project from './project/Project';
import Title from '../common/components/title/Title';

const Projects = () => {
    return (
        <div className={`${s.projectsBlock}`}>
            <div className={`${styleContainer.container} ${s.projectsContainer}`}>
                <Title title={'My Projects'} />
                <div className={s.projects}>
                    <Project projTitle='Social Network' projDescription='My social network is an app which we can scale and which can handle millions of data records.'/>
                    <Project projTitle='Social Network' projDescription='My social network is an app which we can scale and which can handle millions of data records.'/>
                    <Project projTitle='Counter' projDescription='My counter is functional'/>
                    <Project projTitle='Counter' projDescription='My counter is functional'/>
                </div>
            </div>
        </div>
    );
};

export default Projects;