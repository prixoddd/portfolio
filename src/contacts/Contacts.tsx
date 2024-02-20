import React from 'react'
import s from './Contacts.module.sass'
import e from 'common/styles/Elements.module.sass'
import Title from 'common/components/title/Title'
import { Fade } from 'react-awesome-reveal'

const Contacts = () => {
    return (
        <div id="contacts_block" className={s.contactsBlock}>
            <Fade delay={200}>
                <div className={`${s.contactsContainer}`}>
                    <Title title={'Contacts'} />
                    <form action="" className={s.contactsForm}>
                        <input type="text" className={`${s.smallInput} ${s.input}`} placeholder={'Your Name'} />
                        <input type="text" className={`${s.smallInput} ${s.input}`} placeholder={'Your Surname'} />
                        <textarea className={`${s.textArea} ${s.input}`} placeholder={'Your message'} />
                    </form>

                    <button className={e.mainButton}>Send</button>
                </div>
            </Fade>
        </div>
    )
}

export default Contacts
