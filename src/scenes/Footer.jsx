import { IoLogoWhatsapp } from 'react-icons/io'
import { FaTelegram } from 'react-icons/fa6'

const Footer = () => {
    return (
        <footer className="relative py-[60px] mt-2 px-[48px]">
            <div className="flex flex-col xl:flex-row items-center justify-between gap-[50px] xl:gap-0 border-t border-[#E4E7F1] pt-[50px]">
                <div className="flex flex-col md:flex-row items-center gap-[20px] md:gap-0 w-full md:w-auto border border-[#AFB4C4] rounded-[20px] md:rounded-[100px] p-[30px]">
                    <a href="#" className="flex items-center gap-4 px-[20px] md:border-r md:border-[#E4E7F1] hover:opacity-70 duration-200">
                        <IoLogoWhatsapp size={24} color="#213887" />
                        <span className="text-[20px] xs:text-[24px] xxl:text-[34px] font-bold text-blue-90 leading-[34px]">whatsapp</span>
                    </a>
                    <a href="#" className="flex items-center gap-4 px-[20px] md:border-r md:border-[#E4E7F1] hover:opacity-70 duration-200">
                        <FaTelegram size={24} color="#213887" />
                        <span className="text-[20px] xs:text-[24px] xxl:text-[34px] font-bold text-blue-90 leading-[34px]">telegram</span>
                    </a>
                    <div className="px-[20px]">
                        <a className="text-[20px] xs:text-[24px] xxl:text-[34px] font-bold text-blue-90 leading-[34px] underline underline-offset-4 hover:opacity-70 duration-200" href="mailto:adrasteia@gmail.com">adrasteia@mail.com</a>
                    </div>
                </div>
                <div className="flex items-center flex-col xs:flex-row gap-[30px] xs:gap-[80px]">
                    <p className="text-blue-50 underline underline-offset-4">Розробка - Tarasenko MV</p>
                    <span>&copy; 2024</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
