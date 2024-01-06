import { work } from '../utils/constants'
import workImage from '../assets/work.png'
import WorkCard from '../components/WorkCard'

const Work = () => {
    return (
        <div id="work" className="py-[60px] mt-16 flex flex-col lg:flex-row items-center gap-[60px] lg:gap-0">
            <div className="max-w-[480px]">
                <h2 className="text-[40px] text-blue-90 lg:section-title mb-[70px] text-center md:text-left">Як ми працюємо</h2>
                {work.map(card => (
                    <WorkCard key={card.id} card={card} />
                ))}
            </div>
            <div className="grow">
                <img src={workImage} alt="Як ми працюємо" />
            </div>
        </div>
    )
}

export default Work