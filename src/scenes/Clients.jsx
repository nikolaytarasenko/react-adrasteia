import { clients } from '../utils/constants'
import ClientCard from '../components/ClientCard'

const Clients = () => {
    return (
        <div id="clients" className="relative pt-[60px] mt-16 bg-gradient-to-r from-[#AFB4C4] to-[#F2F3F8]">
            <div className="w-full h-full bg-bg-clients bg-no-repeat bg-right-bottom flex flex-col xl:flex-row gap-[25px] lg:gap-[45px] pb-[60px] px-[48px]">
                <div className="max-w-full xl:max-w-[350px]">
                    <h2 className="text-[40px] text-blue-90 lg:section-title text-center md:text-left">Наші клієнти</h2>
                </div>
                <div className="grow grid grid-cols-1 xxl:grid-cols-2 gap-[30px] order-2 xl:order-1">
                    {clients.map(card => (
                        <ClientCard key={card.title} card={card} />
                    ))}
                </div>
                <div className="pl-0 xl:pl-[40px] order-1 xl:order-2">
                    <p className="text-2xl lg:section-description max-w-full xl:max-w-[320px] text-center md:text-left mb-[20px] lg:mb-0">Строго дотримуємося конфіденційності та цінуємо репутацію кожного клієнта</p>
                </div>
            </div>
        </div>
    )
}

export default Clients
