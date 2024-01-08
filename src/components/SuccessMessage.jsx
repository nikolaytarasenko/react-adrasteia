import PropTypes from 'prop-types'
import { FaRegCheckCircle } from 'react-icons/fa'

const SuccessMessage = ({ isModal }) => {
    return (
        <div className="flex justify-center items-center h-full">
            <div className="flex flex-col text-center items-center">
                <div className="mb-8">
                    <FaRegCheckCircle size={64} color="#142251" />
                </div>
                <h2 className="text-blue-90 text-[40px] lg:text-[84px] leading-[42px] lg:leading-[84px] mb-8">Заявку надіслано!</h2>
                <p className="text-[26px] lg:text-[34px] leading-[28px] lg:leading-[34px] mb-[75px]">{`Наш менеджер зв'яжеться з вами найближчим часом!`}</p>
                {isModal && (
                    <a href="/" className="bg-blue-90 text-white rounded-[5px] px-6 py-4 duration-200 hover:bg-blue-50">Повернутись на сайт</a>
                )}
            </div>
        </div>
    )
}

SuccessMessage.propTypes = {
    isModal: PropTypes.bool
}

export default SuccessMessage