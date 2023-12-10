import React from 'react'
import s from './Nav.module.sass'
import { Link } from 'react-scroll'

const Nav = () => {
    return (
            <div className={s.nav}>
                <Link activeClass={s.active} to="main_block" spy={true} smooth={true} offset={0} duration={500}>
                    Main
                </Link>
                <Link activeClass={s.active} to="skills_block" spy={true} smooth={true} offset={50} duration={500}>
                    Skills
                </Link>
                <Link activeClass={s.active} to="projects_block" spy={true} smooth={true} offset={50} duration={500}>
                    Projects
                </Link>
                <Link activeClass={s.active} to="contacts_block" spy={true} smooth={true} offset={50} duration={500}>
                    Contacts
                </Link>
            </div>

    )
}

export default Nav
