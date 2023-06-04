import React from 'react';
import s from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Skill from './skill/Skill';


const Skills = () => {
    const loremone = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda deleniti eaque exercitationem fuga, harum itaque labore minima nam pariatur perferendis placeat quis quod reiciendis similique, sint vero? Hic, incidunt!"
    const loremtwo = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aspernatur autem ea et, facere hic impedit in ipsam laudantium magni modi mollitia, perspiciatis quibusdam quidem quis repellat similique sit soluta.'
    const loremthree = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, aut delectus dolor earum eius esse, eveniet expedita itaque minima mollitia nam '
    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.mainTitle}>Skills</h2>
                <div className={s.skills}>
                    <Skill title='React' description={loremone}/>
                    <Skill title='Js' description={loremtwo}/>
                    <Skill title='Css' description={loremthree}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;