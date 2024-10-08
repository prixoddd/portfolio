import React from 'react'
import s from './Footer.module.sass'
import Title from 'common/components/title/Title'
import facebookLogo from '../img/icons/facebookLogo.svg'
import instagramLogo from '../img/icons/instagraLogo.svg'
import linkedinLogo from '../img/icons/linkedinLogo.svg'
import telegramLogo from '../img/icons/telegramLogo.svg'
import { Fade } from 'react-awesome-reveal'

const Footer = () => {
    return (
        // <Fade delay={200} direction={'up'}>
        <div className={s.footerBlock}>
            <div className={s.footerContainer}>
                <Title title={'Nikita Derjugin'} />
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
        // </Fade>
    )
}

export default Footer
