import React from 'react'
import s from './Skills.module.sass'
import Skill from './skill/Skill'
import Title from '../common/components/title/Title'
import reactLogo from 'img/icons/reactLogo.svg'
import jsLogo from 'img/icons/javascriptLogo.svg'
import cssLogo from 'img/icons/cssLogo.svg'
import reduxLogo from 'img/icons/reduxLogo.svg'
import restApi from 'img/icons/restApiLogo.svg'
import htmlLogo from 'img/icons/htmlLogo.svg'
import typescriptLogo from 'img/icons/typescriptLogo.svg'
import { Zoom } from 'react-awesome-reveal'

const Skills = () => {
    const loremone =
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda deleniti eaque exercitationem fuga, harum itaque labore minima nam pariatur perferendis placeat quis quod reiciendis similique, sint vero? Hic, incidunt!'
    const loremtwo =
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aspernatur autem ea et, facere hic impedit in ipsam laudantium magni modi mollitia, perspiciatis quibusdam quidem quis repellat similique sit soluta.'
    const loremthree =
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, aut delectus dolor earum eius esse, eveniet expedita itaque minima mollitia nam '
    return (
        <div id="skills_block" className={s.skillsBlock}>
            <Zoom>
                <div className={`${s.skillsContainer}`}>
                    <Title title={'Skills'} />
                    <div className={s.skills}>
                        <Skill title="React" description={loremone} svgImage={reactLogo} />
                        <Skill title="Redux/toolkit" description={loremone} svgImage={reduxLogo} />
                        <Skill title="Typescript" description={loremone} svgImage={typescriptLogo} />
                        <Skill title="Javascript" description={loremtwo} svgImage={jsLogo} />
                        <Skill title="Rest API" description={loremthree} svgImage={restApi} />
                        <Skill title="CSS/SASS" description={loremthree} svgImage={cssLogo} />
                        <Skill title="HTML" description={loremthree} svgImage={htmlLogo} />
                    </div>
                </div>
            </Zoom>
        </div>
    )
}

export default Skills
