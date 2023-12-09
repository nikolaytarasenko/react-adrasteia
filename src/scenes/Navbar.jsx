import { useState } from 'react'
import Button from '../components/Button'
import logo from '../assets/logo.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { IoCloseOutline } from 'react-icons/io5'

const Navbar = () => {
    const [isMenuOpened, setIsMenuOpened] = useState(false)

    return (
        <nav className="fixed top-0 left-0 w-full z-40 border-b-blue-90 border-b border-opacity-20 bg-white">
            <div className="flex justify-between items-center px-[20px] xl:px-[48px] py-[19px] xl:py-[38px] text-blue-90">
                <div className="basis-1/4 flex">
                    <a href="/" className="inline-block">
                        <img src={logo} alt="Adrasteia" className="max-w-[132px] xl:max-w-full hover:opacity-60 duration-200" />
                    </a>
                </div>
                <ul className="hidden xl:flex xl:items-center xl:justify-center gap-[18px] xxl:gap-[32px] basis-3/4 xl:basis-2/4">
                    <li>
                        <AnchorLink className="semibold-18 xl:semibold-20 hover:opacity-60 hover:text-black duration-200" href="#about">Про нас</AnchorLink>
                    </li>
                    <li>
                        <AnchorLink className="semibold-18 xl:semibold-20 hover:opacity-60 hover:text-black duration-200" href="#services">Послуги</AnchorLink>
                    </li>
                    <li>
                        <AnchorLink className="semibold-18 xl:semibold-20 hover:opacity-60 hover:text-black duration-200" href="#work">Як ми працюємо</AnchorLink>
                    </li>
                    <li>
                        <AnchorLink className="semibold-18 xl:semibold-20 hover:opacity-60 hover:text-black duration-200" href="#clients">Клієнти</AnchorLink>
                    </li>
                    <li>
                        <AnchorLink className="semibold-18 xl:semibold-20 hover:opacity-60 hover:text-black duration-200" href="#contacts">Контакти</AnchorLink>
                    </li>
                </ul>
                <div className="hidden basis-1/4 xl:flex xl:justify-end">
                    <Button
                        title="Оформити заявку"
                        backgroundColor="transparent"
                    />
                </div>
                <button
                    className="flex flex-col gap-[6px] relative xl:hidden"
                    onClick={() => setIsMenuOpened(prev => !prev)}
                >
                    {isMenuOpened ? <IoCloseOutline size={30} /> : <HiOutlineMenuAlt4 size={30} />}
                </button>
            </div>

            {/* Mobile menu */}
            {isMenuOpened && (
                <ul className="fixed top-[68px] bottom-0 left-0 w-full h-full flex flex-col justify-center items-center gap-[20px] bg-white text-blue-90 xl:hidden">
                    <li>
                        <AnchorLink className="regular-30 hover:opacity-60 hover:text-black duration-200" href="#about">Про нас</AnchorLink>
                    </li>
                    <li>
                        <AnchorLink className="regular-30 hover:opacity-60 hover:text-black duration-200" href="#services">Послуги</AnchorLink>
                    </li>
                    <li>
                        <AnchorLink className="regular-30 hover:opacity-60 hover:text-black duration-200" href="#work">Як ми працюємо</AnchorLink>
                    </li>
                    <li>
                        <AnchorLink className="regular-30 hover:opacity-60 hover:text-black duration-200" href="#clients">Клієнти</AnchorLink>
                    </li>
                    <li>
                        <AnchorLink className="regular-30 hover:opacity-60 hover:text-black duration-200" href="#contacts">Контакти</AnchorLink>
                    </li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar
