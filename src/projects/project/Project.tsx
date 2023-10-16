import React from 'react'
import s from './Project.module.sass'
import e from '../../common/styles/Elements.module.sass'

type ProjectPropsType = {
    projTitle: string
    projDescription: string
    backgroundImage: string
    src: string
}

const Project = (props: ProjectPropsType) => {
    const divStyle = {
        backgroundImage: `url("${props.backgroundImage}")`,
    }

    return (
        <div className={s.project}>
            <div className={s.imageAndButton} style={divStyle}>
                <button
                    className={e.elementButton}
                    onClick={(e) => {
                        e.preventDefault()
                        window.location.href = props.src
                    }}
                >
                    <span>Смотреть</span>
                </button>
            </div>
            <div className={s.projectInfo}>
                <h3 className={s.projTitle}>{props.projTitle}</h3>
                <span className={s.projDescription}>{props.projDescription}</span>
            </div>
        </div>
    )
}

export default Project
