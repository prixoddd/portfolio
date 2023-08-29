import React from 'react'
import s from './Projects.module.sass'
import { Zoom } from 'react-awesome-reveal'

import Project from './project/Project'
import Title from '../common/components/title/Title'

const bImage = 'https://miro.medium.com/v2/resize:fit:0/0*KIKnUvzdIkp5zcDJ'

const Projects = () => {
    return (
        <div id="projects_block" className={`${s.projectsBlock}`}>
            <Zoom>
                <div className={`${s.projectsContainer}`}>
                    <Title title={'My Projects'} />
                    <div className={s.projects}>
                        <Project
                            backgroundImage={bImage}
                            projTitle="Social Network"
                            projDescription="My social network is an app which we can scale and which can handle millions of data records."
                        />
                        <Project
                            backgroundImage={bImage}
                            projTitle="Social Network"
                            projDescription="My social network is an app which we can scale and which can handle millions of data records."
                        />
                        <Project
                            backgroundImage={bImage}
                            projTitle="Counter"
                            projDescription="My counter is functional"
                        />
                        <Project
                            backgroundImage={bImage}
                            projTitle="Counter"
                            projDescription="My counter is functional"
                        />
                    </div>
                </div>
            </Zoom>
        </div>
    )
}

export default Projects
