import React, { useState } from 'react'
import { HomeSvg } from 'img/icons/homeSg'
import { Link } from 'react-scroll'
import { SkillsSvg } from 'img/icons/skillsSvg'
import { ProjectsSvg } from 'img/icons/projectsSvg'
import { ContactsSvg } from 'img/icons/contactsSvg'

type Props = {
    to: string
    offset: number
}

const ActiveLink = ({ to, offset }: Props) => {
    const white = '#ffffff'
    const accent = '#28e98c'

    const [color, setColor] = useState(white)
    const handleSetActive = () => setColor(accent)
    const handleSetInactive = () => setColor(white)

    return (
        <div>
            <Link
                onSetActive={handleSetActive}
                onSetInactive={handleSetInactive}
                to={to}
                spy={true}
                smooth={true}
                offset={offset}
                hashSpy={true}
                duration={1000}
                delay={200}
            >
                {to === 'main_block' && <HomeSvg width={'24px'} stroke={color} />}
                {to === 'skills_block' && <SkillsSvg width={'24px'} stroke={color} />}
                {to === 'projects_block' && <ProjectsSvg width={'24px'} stroke={color} />}
                {to === 'contacts_block' && <ContactsSvg width={'24px'} stroke={color} />}
            </Link>
        </div>
    )
}

export default ActiveLink
