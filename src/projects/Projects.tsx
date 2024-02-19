import React from 'react'
import s from './Projects.module.sass'
import { Zoom } from 'react-awesome-reveal'
import counterBackground from 'img/projectsImages/counter.png'
import todoList from 'img/projectsImages/todoList.png'
import Project from './project/Project'
import shipments from 'img/projectsImages/shipments.png'
import Title from '../common/components/title/Title'

import socialNetwork from 'img/projectsImages/socialNetwork.jpg'
const Projects = () => {
    return (
        <div id="projects_block" className={`${s.projectsBlock}`}>
            <Zoom>
                <div className={`${s.projectsContainer}`}>
                    <Title title={'My Projects'} />
                    <div className={s.projects}>
                        <Project
                            backgroundImage={shipments}
                            projTitle="Shipments CRUD"
                            projDescription="An application built with TypeScript, React, and Redux, specifically designed for efficient CRUD operations. It utilizes Material-UI components along with custom-designed elements. Deployment is handled through Vercel."
                            src="https://kn-hm.vercel.app/"
                        />
                        <Project
                            backgroundImage={todoList}
                            projTitle="Todo App"
                            projDescription="Todolist is a straightforward and user-friendly task management application designed to assist you in organizing your daily activities. With its ability to create to-do lists, it facilitates better organization and efficiency."
                            src="https://prixoddd.github.io/todolist"
                        />
                    </div>
                    <div className={s.projects1}>
                        <Project
                            backgroundImage={socialNetwork}
                            projTitle="Social Network"
                            projDescription="My social network is an app which we can scale and which can handle millions of data records."
                            src="https://prixoddd.github.io/samurai-way-main"
                        />
                        <Project
                            backgroundImage={counterBackground}
                            projTitle="Counter"
                            projDescription="Introducing my simple yet versatile counter app! With user-friendly interface, you can easily set minimum and maximum values and start counting with ease."
                            src="https://prixoddd.github.io/counter"
                        />
                    </div>
                </div>
            </Zoom>
        </div>
    )
}

export default Projects
