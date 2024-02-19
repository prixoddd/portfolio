import React from 'react'
import s from './Nav.module.sass'
import ActiveLink from 'activeLink/activeLink'

const Nav = () => {
    return (
        <div className={s.nav}>
            <ActiveLink to={'main_block'} offset={0} />
            <ActiveLink to={'skills_block'} offset={0} />
            <ActiveLink to={'projects_block'} offset={0} />
            <ActiveLink to={'contacts_block'} offset={0} />
        </div>
    )
}

export default Nav
