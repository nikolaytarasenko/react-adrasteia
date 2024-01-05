import about1 from '../assets/about-item-1.png'
import about2 from '../assets/about-item-2.png'
import about3 from '../assets/about-item-3.png'
import about4 from '../assets/about-item-4.png'
import aboutLine from '../assets/about-line.png'

const About = () => {
    return (
        <div id="about" className="py-[60px]">
            <div className="flex flex-col items-center gap-4 mb-[70px] lg:mb-[120px]">
                <h2 className="text-[40px] text-blue-90 lg:section-title">Хто ми?</h2>
                <p className="text-2xl lg:section-description text-center max-w-[520px]">Про нас не пишуть рейтингові агенції та пошукові системи</p>
            </div>
            <div className="flex flex-col text-center lg:text-left lg:flex-row justify-between items-center gap-[80px] lg:gap-[50px] relative">
                <div className="hidden xxl:block absolute top-[0] left-0 z-[-1] w-full">
                    <img src={aboutLine} alt="line" className="w-[80%] relative left-[120px]" />
                </div>
                <div className="relative flex-1">
                    <img src={about1} alt="about-1" className="mx-auto" />
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <p className="mt-10 text-blue-90 text-[24px] xl:text-[34px] font-normal leading-none"><span className="text-gray-90">1.</span> Працюємо лише за рекомендацією від "своїх"</p>
                </div>
                <div className="relative flex-1">
                    <img src={about2} alt="about-2" className="mx-auto" />
                    <p className="mt-10 text-blue-90 text-[24px] xl:text-[34px] font-normal leading-none"><span className="text-gray-90">2.</span> Застосовуємо агентську мережу по всьому світу</p>
                </div>
                <div className="relative flex-1 flex flex-col gap-[20px] lg:gap-[100px]">
                    <img src={about3} alt="about-3" className="mx-auto" />
                    <p className="mt-10 text-blue-90 text-[24px] xl:text-[34px] font-normal leading-none"><span className="text-gray-90">3.</span> Використовуємо арсенал професійних технічних засобів</p>
                </div>
                <div className="relative flex-1 flex flex-col gap-[24px] items-center">
                    <img src={about4} alt="about-4" className="mx-auto" />
                    <p className="mt-10 text-blue-90 text-[24px] xl:text-[34px] font-normal leading-none"><span className="text-gray-90">4.</span> Вважаємо, що репутація важливіша за гроші</p>
                </div>
            </div>
        </div>
    )
}

export default About