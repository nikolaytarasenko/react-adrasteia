import { useContext } from 'react'
import { ModalContext } from '../App'
import { services } from '../utils/constants'
import Button from '../components/Button'
import ServiceCard from '../components/ServiceCard'
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

const Services = () => {
    const [isModalOpen, setIsModalOpen] = useContext(ModalContext)

    return (
        <div id="services" className="py-[60px] bg-gray-50 rounded-[50px] mt-16">
            <div className="flex">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-[100px] mx-auto md:mx-0">
                    <h2 className="text-[40px] text-blue-90 lg:section-title pl-0 md:pl-[80px]">Послуги</h2>
                    <p className="text-2xl lg:section-description max-w-[320px] text-center md:text-left">Коли інші бессилі - ми робимо</p>
                </div>
                <div className="splide__arrows" />
            </div>
            <div className="mt-16">
                <div className="px-2 md:px-8">
                    <Splide
                        aria-label="Services"
                        hasTrack={ false }
                        options={{
                            perPage: 4,
                            perMove: 1,
                            gap: '10px',
                            pagination: false,
                            breakpoints: {
                                1600: {
                                    perPage: 3,
                                },
                                1200: {
                                    perPage: 2
                                },
                                768: {
                                    perPage: 1
                                }
                            }
                        }}
                    >
                        <SplideTrack>
                            {services.map(card => (
                                <SplideSlide key={card.title}>
                                    <ServiceCard card={card} />
                                </SplideSlide>
                            ))}
                        </SplideTrack>
                    </Splide>
                </div>
            </div>
            <div className="flex justify-center mt-16">
                <Button
                    title="Оформити заявку"
                    backgroundColor="blue"
                    clickHandler={setIsModalOpen}
                />
            </div>
        </div>
    )
}

export default Services
