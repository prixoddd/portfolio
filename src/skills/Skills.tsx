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
import { Fade } from 'react-awesome-reveal'

const Skills = () => {
    const loremone =
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda deleniti eaque exercitationem fuga, harum itaque labore minima nam pariatur perferendis placeat quis quod reiciendis similique, sint vero? Hic, incidunt!'
    const loremtwo =
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aspernatur autem ea et, facere hic impedit in ipsam laudantium magni modi mollitia, perspiciatis quibusdam quidem quis repellat similique sit soluta.'
    const loremthree =
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, aut delectus dolor earum eius esse, eveniet expedita itaque minima mollitia nam '
    return (
        <div id="skills_block" className={s.skillsBlock}>
            <div className={`${s.skillsContainer}`}>
                <Fade delay={200} fraction={0.1}>
                    <Title title={'Skills'} />
                </Fade>
                <div className={s.skills}>
                    <Fade direction={'down'} delay={400} duration={1500}>
                        <Skill title="React" description={loremone} svgImage={reactLogo} />
                    </Fade>
                    <Fade direction={'right'} delay={500} duration={1500}>
                        <Skill title="Redux/toolkit" description={loremone} svgImage={reduxLogo} />
                        <Skill title="Typescript" description={loremone} svgImage={typescriptLogo} />
                        <Skill title="Javascript" description={loremtwo} svgImage={jsLogo} />

                        <Skill title="Rest API" description={loremthree} svgImage={restApi} />
                    </Fade>
                    <Fade direction={'down'} delay={200} duration={1500}>
                        <Skill title="CSS/SASS" description={loremthree} svgImage={cssLogo} />
                    </Fade>
                    <Fade direction={'down'} delay={100} duration={1500}>
                        <Skill title="HTML" description={loremthree} svgImage={htmlLogo} />
                    </Fade>
                </div>
            </div>
        </div>
    )
}

export default Skills
