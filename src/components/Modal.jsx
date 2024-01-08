import { useState } from 'react'
import PropTypes from 'prop-types'
import { IoCloseCircleOutline } from 'react-icons/io5'
import ContactForm from './ContactForm'

const Modal = ({ isOpen, closeModal }) => {
    const [isMessageSent, setIsMessageSent] = useState(false)

    return (
        <>
            {isOpen && (
                <div className="fixed w-full h-full left-0 right-0 top-0 bottom-0 bg-white overflow-y-auto z-[1001] modal">
                    <div className="relative left-0 top-0 w-full h-full flex justify-center items-center modal-wrapper">
                        <div className="relative bg-white w-full h-full p-[60px]">
                            {!isMessageSent && (
                                <>
                                    <div className="absolute right-6 md:right-[64px] top-6 md:top-[64px]">
                                        <button className="hover:opacity-80" onClick={() => closeModal()}>
                                            <IoCloseCircleOutline size={48} color="#142251" />
                                        </button>
                                    </div>
                                    <h2 className="text-[40px] leading-[42px] text-blue-90 lg:section-title text-center md:text-left mb-[60px] md:mb-[100px]">Залишити заявку</h2>
                                </>
                            )}
                            <ContactForm full={true} setIsMessageSent={setIsMessageSent} />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

Modal.propTypes = {
    isOpen: PropTypes.bool,
    closeModal: PropTypes.func
}

export default Modal
