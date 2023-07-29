import React from "react"
import s from "./Footer.module.sass"

const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${s.footerContainer}`}>
                <h3>Nikita Derjugin</h3>
                <div className={s.footerBar}>
                    <div className={s.cube}></div>
                    <div className={s.cube}></div>
                    <div className={s.cube}></div>
                    <div className={s.cube}></div>
                </div>
                <h3>All Rights Reserved</h3>
            </div>
        </div>
    )
}

export default Footer
