import React from "react"
import s from "./Skills.module.sass"
import Skill from "./skill/Skill"
import Title from "../common/components/title/Title"
import reactLogo from "icons/reactLogo.svg"
import jsLogo from "icons/javascriptLogo.svg"
import cssLogo from "icons/cssLogo.svg"

const Skills = () => {
    const loremone =
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda deleniti eaque exercitationem fuga, harum itaque labore minima nam pariatur perferendis placeat quis quod reiciendis similique, sint vero? Hic, incidunt!"
    const loremtwo =
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aspernatur autem ea et, facere hic impedit in ipsam laudantium magni modi mollitia, perspiciatis quibusdam quidem quis repellat similique sit soluta."
    const loremthree =
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, aut delectus dolor earum eius esse, eveniet expedita itaque minima mollitia nam "
    return (
        <div className={s.skillsBlock}>
            <div className={`${s.skillsContainer}`}>
                <Title title={"Skills"} />
                <div className={s.skills}>
                    <Skill title="React" description={loremone} svgImage={reactLogo} />
                    <Skill title="Js" description={loremtwo} svgImage={jsLogo} />
                    <Skill title="Css" description={loremthree} svgImage={cssLogo} />
                </div>
            </div>
        </div>
    )
}

export default Skills
