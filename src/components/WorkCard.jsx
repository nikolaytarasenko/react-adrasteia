import PropTypes from 'prop-types'

const WorkCard = ({ card }) => {
    const Icon = card.icon;

    return (
        <div className="relative p-8 border border-gray-90 rounded-[22px] mb-[10px]">
            <span className="absolute right-4 top-4 text-[20px]">{card.id}</span>
            <div className="mb-4">
                <Icon size={32} color="#142251" />
            </div>
            <p className="text-[24px] md:text-[30px]">{card.title}</p>
        </div>
    )
}

WorkCard.propTypes = {
    card: PropTypes.object
}

export default WorkCard