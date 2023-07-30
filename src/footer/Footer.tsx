import React from "react"
import s from "./Footer.module.sass"
import Title from "common/components/title/Title"
import facebookLogo from "../icons/facebookLogo.svg"
import instagramLogo from "../icons/instagraLogo.svg"
import linkedinLogo from "../icons/linkedinLogo.svg"
import telegramLogo from "../icons/telegramLogo.svg"

const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={s.footerContainer}>
                <Title title={"Nikita Derjugin"} />
                <div className={s.socialIcons}>
                    <div className={s.socialIcon}>
                        <a href="">
                            <img src={facebookLogo} alt="" />
                        </a>
                    </div>
                    <div className={s.socialIcon}>
                        <a href="">
                            <img src={instagramLogo} alt="" />
                        </a>
                    </div>
                    <div className={s.socialIcon}>
                        <a href="">
                            <img src={linkedinLogo} alt="" />
                        </a>
                    </div>
                    <div className={s.socialIcon}>
                        <a href="">
                            <img src={telegramLogo} alt="" />
                        </a>
                    </div>
                </div>
                <h3>All Rights Reserved</h3>
            </div>
        </div>
    )
}

export default Footer
