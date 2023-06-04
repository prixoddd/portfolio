import React from 'react';
import s from './Projects.module.css'

import styleContainer from '../common/styles/Container.module.css';
import Project from './project/Project';

const Projects = () => {
    return (
        <div className={`${s.projectsBlock}`}>
            <div className={`${styleContainer.container} ${s.projectsContainer}`}>
                <h3 className={s.mainTitle}>My Projects</h3>
                <div className={s.projects}>
                    <Project projTitle='Social Network' projDescription='My social network is an app which we can scale and which can handle millions of data records.'/>
                    <Project projTitle='Social Network' projDescription='My social network is an app which we can scale and which can handle millions of data records.'/>
                    <Project projTitle='Counter' projDescription='My counter is functional'/>
                    {/*<Project projTitle='Counter' projDescription='My counter is functional'/>*/}
                </div>
            </div>
        </div>
    );
};

export default Projects;