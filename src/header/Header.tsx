import React from "react"
import s from "./Header.module.sass"
import Nav from "nav/Nav"

const Header = () => {
    return (
        <div className={s.header}>
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <Nav />
        </div>
    )
}

export default Header
