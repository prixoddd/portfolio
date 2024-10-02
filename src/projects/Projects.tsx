import React from 'react'
import s from './Projects.module.sass'
import { Fade, Zoom } from 'react-awesome-reveal'
import counterBackground from 'img/projectsImages/counter.png'
import todoList from 'img/projectsImages/todoList.png'
import Project from './project/Project'
import shipments from 'img/projectsImages/shipments.png'
import Title from '../common/components/title/Title'

import socialNetwork from 'img/projectsImages/socialNetwork.jpg'
const Projects = () => {
    return (
        <div id="projects_block" className={`${s.projectsBlock}`}>
            <div className={`${s.projectsContainer}`}>
                <Fade triggerOnce delay={200} fraction={0.1} direction={'up'}>
                    <Title title={'My Projects'} />
                </Fade>
                <div className={s.projects}>
                    <Zoom delay={300} duration={1500}>
                        <Project
                            backgroundImage={shipments}
                            projTitle="Shipments CRUD"
                            projDescription="An application built with TypeScript, React, and Redux, specifically designed for efficient CRUD operations. It utilizes Material-UI components along with custom-designed elements."
                            src="https://kn-hm.vercel.app/"
                        />
                    </Zoom>
                    <Zoom delay={350} duration={1500}>
                        <Project
                            backgroundImage={todoList}
                            projTitle="Todo App"
                            projDescription="Todolist is a straightforward and user-friendly task management application designed to assist you in organizing your daily activities. With its ability to create to-do lists, it facilitates better organization and efficiency."
                            src="https://prixoddd.github.io/todolist"
                        />
                    </Zoom>
                </div>
                <div className={s.projects1}>
                    <Zoom delay={400} duration={1500}>
                        <Project
                            backgroundImage={socialNetwork}
                            projTitle="Social Network"
                            projDescription="My social network is an app which we can scale and which can handle millions of data records."
                            src="https://prixoddd.github.io/samurai-way-main"
                        />
                    </Zoom>
                    <Zoom delay={450} duration={1500}>
                        <Project
                            backgroundImage={counterBackground}
                            projTitle="Counter"
                            projDescription="Introducing my simple yet versatile counter app! With user-friendly interface, you can easily set minimum and maximum values and start counting with ease."
                            src="https://prixoddd.github.io/counter"
                        />
                    </Zoom>
                </div>
            </div>
        </div>
    )
}

export default Projects
