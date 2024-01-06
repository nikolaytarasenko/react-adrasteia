import PropTypes from 'prop-types'
import Button from '../components/Button'
import { IoIosCheckmarkCircleOutline } from 'react-icons/io'

const ContactForm = ({ full }) => {
    return (
        <div>
            {!full ? (
                <form className="flex flex-wrap gap-[55px] justify-center md:justify-start">
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center md:mb-[50px] w-full md:w-auto">
                        <label htmlFor="userName" className="text-blue-90 text-[30px] md:text-[34px] w-[195px]">Мене звати</label>
                        <input
                            className="w-full md:w-[450px] border-b-2 border-gray-90 text-blue-90 placeholder:text-gray-90 text-[24px] md:text-[34px] focus:border-b-blue-90 outline-none"
                            type="text"
                            id="userName"
                            name="userName"
                            placeholder="Бондаренко Антон"
                        />
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center md:mb-[50px] w-full md:w-auto">
                        <label htmlFor="userPhone" className="text-blue-90 text-[30px] md:text-[34px] w-[195px]">Мій номер</label>
                        <input
                            className="w-full md:w-[450px] border-b-2 border-gray-90 text-blue-90 placeholder:text-gray-90 text-[24px] md:text-[34px] focus:border-b-blue-90 outline-none"
                            type="phone"
                            id="userPhone"
                            name="userPhone"
                            placeholder="+380671234567"
                        />
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center w-full md:w-auto">
                        <label htmlFor="userEmail" className="text-blue-90 text-[30px] md:text-[34px] w-[195px]">Мій E-mail</label>
                        <input
                            className="w-full md:w-[450px] border-b-2 border-gray-90 text-blue-90 placeholder:text-gray-90 text-[24px] md:text-[34px] focus:border-b-blue-90 outline-none"
                            type="email"
                            id="userEmail"
                            name="userEmail"
                            placeholder="example@gmail.com"
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
                        />
                    </div>
                </form>
            ) : (
                <form>

                </form>
            )}
        </div>
    )
}

ContactForm.propTypes = {
    full: PropTypes.bool
}

export default ContactForm