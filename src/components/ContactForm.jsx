import { useState } from 'react'
import PropTypes from 'prop-types'
import Button from '../components/Button'
import SuccessMessage from './SuccessMessage'
import { IoIosCheckmarkCircleOutline } from 'react-icons/io'

const ContactForm = ({ full, setIsMessageSent }) => {
    const [userName, setUserName] = useState('')
    const [userPhone, setUserPhone] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [isUserNameValid, setIsUserNameValid] = useState(true)
    const [isUserPhoneValid, setIsUserPhoneValid] = useState(true)
    const [isUserEmailValid, setIsUserEmailValid] = useState(true)
    const [messageSent, setMessageSent] = useState(false)

    const validateRequiredInputs = () => {
        userName === '' ? setIsUserNameValid(false) : setIsUserNameValid(true)
        userPhone === '' ? setIsUserPhoneValid(false) : setIsUserPhoneValid(true)
        userEmail === '' ? setIsUserEmailValid(false) : setIsUserEmailValid(true)
    }

    const submitHandler = e => {
        e.preventDefault()

        if (userName && userPhone && userEmail) {
            setMessageSent(true)
            setIsMessageSent(true)
        } else {
            validateRequiredInputs()
        }
    }

    return (
        <>
            {!messageSent && (
                <div>
                    {!full ? (
                        <form onSubmit={submitHandler} className="flex flex-wrap gap-[55px] justify-center md:justify-start">
                            <div className="flex flex-col md:flex-row gap-4 md:gap-6 md:items-center md:mb-[50px] w-full md:w-auto">
                                <label htmlFor="userName" className="text-blue-90 text-[30px] md:text-[34px] w-[195px]">Мене звати</label>
                                <input
                                    className={`w-full md:w-[450px] border-b-2 border-gray-90 text-blue-90 placeholder:text-gray-90 text-[24px] md:text-[34px] focus:border-b-blue-90 outline-none ${!isUserNameValid ? 'border-red-500 bg-red-100' : ''}`}
                                    type="text"
                                    id="userName"
                                    name="userName"
                                    value={userName}
                                    placeholder="Бондаренко Антон"
                                    onChange={(e) => setUserName(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col md:flex-row gap-4 md:gap-6 md:items-center md:mb-[50px] w-full md:w-auto">
                                <label htmlFor="userPhone" className="text-blue-90 text-[30px] md:text-[34px] w-[195px]">Мій номер</label>
                                <input
                                    className={`w-full md:w-[450px] border-b-2 border-gray-90 text-blue-90 placeholder:text-gray-90 text-[24px] md:text-[34px] focus:border-b-blue-90 outline-none ${!isUserPhoneValid ? 'border-red-500 bg-red-100' : ''}`}
                                    type="phone"
                                    id="userPhone"
                                    name="userPhone"
                                    value={userPhone}
                                    placeholder="+380671234567"
                                    onChange={(e) => setUserPhone(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col md:flex-row gap-4 md:gap-6 md:items-center w-full md:w-auto">
                                <label htmlFor="userEmail" className="text-blue-90 text-[30px] md:text-[34px] w-[195px]">Мій E-mail</label>
                                <input
                                    className={`w-full md:w-[450px] border-b-2 border-gray-90 text-blue-90 placeholder:text-gray-90 text-[24px] md:text-[34px] focus:border-b-blue-90 outline-none ${!isUserEmailValid ? 'border-red-500 bg-red-100' : ''}`}
                                    type="email"
                                    id="userEmail"
                                    name="userEmail"
                                    value={userEmail}
                                    placeholder="example@gmail.com"
                                    onChange={(e) => setUserEmail(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col md:flex-row items-center gap-[40px]">
                                <div className="flex items-center gap-[15px]">
                                    <IoIosCheckmarkCircleOutline size={36} />
                                    <span className="max-w-[170px]">Згода на обробку персональних даних</span>
                                </div>
                                <Button
                                    title="Оформити заявку"
                                    backgroundColor="gray"
                                    type="submit"
                                />
                            </div>
                        </form>
                    ) : (
                        <form onSubmit={submitHandler}>
                            <div className="flex flex-col xxl:flex-row gap-[70px] mb-[70px]">
                                <div className="flex flex-col gap-[50px] md:gap-0">
                                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 md:items-center md:mb-[70px] w-full md:w-auto">
                                        <label htmlFor="userName" className="text-blue-90 text-[30px] md:text-[34px] w-[195px]">Мене звати</label>
                                        <input
                                            className={`w-full md:w-[450px] border-b-2 border-gray-90 text-blue-90 placeholder:text-gray-90 text-[24px] md:text-[34px] focus:border-b-blue-90 outline-none ${!isUserNameValid ? 'border-red-500 bg-red-100' : ''}`}
                                            type="text"
                                            id="userName"
                                            name="userName"
                                            value={userName}
                                            placeholder="Бондаренко Антон"
                                            onChange={(e) => setUserName(e.target.value)}
                                        />
                                    </div>
                                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 md:items-center md:mb-[70px] w-full md:w-auto">
                                        <label htmlFor="userPhone" className="text-blue-90 text-[30px] md:text-[34px] w-[195px]">Мій номер</label>
                                        <input
                                            className={`w-full md:w-[450px] border-b-2 border-gray-90 text-blue-90 placeholder:text-gray-90 text-[24px] md:text-[34px] focus:border-b-blue-90 outline-none ${!isUserPhoneValid ? 'border-red-500 bg-red-100' : ''}`}
                                            type="phone"
                                            id="userPhone"
                                            name="userPhone"
                                            value={userPhone}
                                            placeholder="+380671234567"
                                            onChange={(e) => setUserPhone(e.target.value)}
                                        />
                                    </div>
                                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 md:items-center w-full md:w-auto">
                                        <label htmlFor="userEmail" className="text-blue-90 text-[30px] md:text-[34px] w-[195px]">Мій E-mail</label>
                                        <input
                                            className={`w-full md:w-[450px] border-b-2 border-gray-90 text-blue-90 placeholder:text-gray-90 text-[24px] md:text-[34px] focus:border-b-blue-90 outline-none ${!isUserEmailValid ? 'border-red-500 bg-red-100' : ''}`}
                                            type="email"
                                            id="userEmail"
                                            name="userEmail"
                                            value={userEmail}
                                            placeholder="example@gmail.com"
                                            onChange={(e) => setUserEmail(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="text-blue-90 text-[30px] md:text-[34px] mb-[25px]">Коментар</h3>
                                    <p className="text-gray-90 text-[20px] md:text-[24px] leading-[20px] md:leading-[24px] mb-4 md:max-w-[60%]">Тут ви можете залишити коментар, якщо вважаєте за потрібне це зробити</p>
                                    <textarea name="userMessage" id="userMessage" className="w-full md:w-[450px] border-b-2 border-gray-90 text-blue-90 placeholder:text-gray-90 text-[24px] md:text-[34px] focus:border-b-blue-90 outline-none resize-none grow"></textarea>
                                </div>
                            </div>
                            <div className="flex flex-col xxl:flex-row items-start xxl:items-center gap-[60px] xxl:gap-[265px] pb-[60px]">
                                <div className="flex gap-8 items-center">
                                    <label htmlFor="urgentTask" className="text-blue-90 text-[30px] md:text-[34px]">Це термінове завдання?</label>
                                    <input type="checkbox" id="urgentTask" className="relative peer shrink-0 appearance-none w-7 h-7 border-2 border-blue-50 rounded-sm bg-white mt-1 checked:bg-blue-50 checked:border-2 checked:border-blue-90"
                                    />
                                </div>
                                <div className="flex flex-col md:flex-row items-center gap-[40px]">
                                    <div className="flex items-center gap-[15px]">
                                        <IoIosCheckmarkCircleOutline size={36} />
                                        <span className="max-w-[170px]">Згода на обробку персональних даних</span>
                                    </div>
                                    <Button
                                        title="Оформити заявку"
                                        backgroundColor="gray"
                                        type="submit"
                                    />
                                </div>
                            </div>
                        </form>
                    )}
                </div>
            )}
            {full && messageSent && <SuccessMessage isModal={true} />}
            {!full && messageSent && <SuccessMessage isModal={false} />}
        </>
    )
}

ContactForm.propTypes = {
    full: PropTypes.bool,
    setIsMessageSent: PropTypes.func
}

export default ContactForm