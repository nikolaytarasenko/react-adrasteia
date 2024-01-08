import { useState } from 'react'
import ContactForm from '../components/ContactForm'

const Contacts = () => {
    const [isMessageSent, setIsMessageSent] = useState(false)

    return (
        <div id="contacts" className="relative py-[60px] mt-2 px-[48px]">
            <h2 className="text-[40px] text-blue-90 lg:section-title text-center md:text-left mb-[60px] md:mb-[100px]">{isMessageSent ? 'Дякуємо!' : 'Напишіть нам'}</h2>

            <ContactForm full={false} setIsMessageSent={setIsMessageSent} />
        </div>
    )
}

export default Contacts