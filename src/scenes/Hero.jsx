import PropTypes from 'prop-types'
import { useContext } from 'react'
import { ModalContext } from '../App'
import Button from '../components/Button'
import ScrollButton from '../components/ScrollButton'
import heroImage from '../assets/hero.png'

const Hero = ({ isScrollButtonVisible }) => {
    const [isModalOpen, setIsModalOpen] = useContext(ModalContext)

    return (
        <div id="hero" className="flex flex-col lg:flex-row gap-10 lg:gap-32 pt-[110px] pb-[50px] xl:pt-[70px] relative before:content-[''] before:w-[100%] xl:before:w-auto before:h-[100%] xl:before:h-auto before:bg-bg-hero-mobile before:bg-bottom before:bg-contain before:bg-no-repeat xl:before:bg-none xl:before:content-hero before:absolute before:right-0 xl:before:right-[-48px] before:bottom-0 lg:bottom-auto lg:before:top-0 before:z-[-1]">
            <div className="flex flex-col basis-1/2 relative">
                <h1 className="text-[40px] text-center md:text-left sm:text-[60px] xl:text-[100px] font-normal leading-[105%] mb-8">
                    <span className="text-blue-90">Детективно-інформаційне</span> агентство
                </h1>
                <p className="text-2xl text-center md:text-left mb-8 xs:mb-[70px]">Володієш інформацією - володієш світом</p>
                <div className="self-center md:self-start">
                    <Button
                        title="Оформити заявку"
                        backgroundColor="gray"
                        clickHandler={setIsModalOpen}
                    />
                </div>
                {isScrollButtonVisible && (
                    <div className="hidden xl:inline-block fixed left-[48px] bottom-[40px] z-[999]">
                        <ScrollButton
                            direction="down"
                        />
                    </div>
                )}
                {!isScrollButtonVisible && (
                    <div className="hidden xl:inline-block fixed right-[48px] bottom-[40px] z-[999]">
                        <ScrollButton
                            direction="up"
                        />
                    </div>
                )}
            </div>
            <div className="basis-1/2">
                <img src={heroImage} alt="hero" />
            </div>
        </div>
    )
}

Hero.propTypes = {
    isScrollButtonVisible: PropTypes.bool
}

export default Hero