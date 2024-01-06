import ContactForm from '../components/ContactForm'

const Contacts = () => {
    return (
        <div id="contacts" className="relative py-[60px] mt-2 px-[48px]">
            <h2 className="text-[40px] text-blue-90 lg:section-title text-center md:text-left mb-[60px] md:mb-[100px]">Напишіть нам</h2>

            <ContactForm full={false} />
        </div>
    )
}

export default Contacts