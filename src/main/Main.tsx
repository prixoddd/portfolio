import React from "react"
import s from "./Main.module.sass"

const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={`${s.container}`}>
                <div className={s.greeting}>
                    <span>Hi There</span>
                    <h1>
                        I am <span className={s.nikita}>Nikita Derjugin</span>
                    </h1>
                    <p>A Graphic Designer & Frontend Developer</p>
                </div>
                <div className={s.photo}></div>
            </div>
        </div>
    )
}

export default Main
