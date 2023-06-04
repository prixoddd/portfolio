import React from 'react';
import s from './Contacts.module.css'
import e from '../common/styles/Elements.module.css'
import styleContainer from '../common/styles/Container.module.css';

const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${styleContainer.container} ${s.contactsContainer}`}>
                <h3 className={s.mainTitle}>Contacts</h3>

                    <form action="" className={s.contactsForm}>
                        <input type="Name" className={`${s.smallInput} ${s.input}`} placeholder={'Your Name'}/>
                        <input type="Surname" className={`${s.smallInput} ${s.input}`} placeholder={'Your Surname'}/>
                        <input type="Your message" className={`${s.largeInput} ${s.input}`} placeholder={'Your message'}/>
                    </form>


                <button className={e.elementButton}>Send</button>
            </div>
            </div>
    );
};

export default Contacts;