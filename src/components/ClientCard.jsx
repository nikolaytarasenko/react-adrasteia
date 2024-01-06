import PropTypes from 'prop-types'

const ClientCard = ({ card }) => {
    const Icon = card.icon

    return (
        <div className="bg-white rounded-[44px] flex flex-col gap-[50px] md:gap-[110px]">
            <div className="bg-gray-50 self-end mt-[20px] mr-[20px] p-[44px] rounded-[40px] flex justify-center items-center">
                <Icon size={36} color="#142251" />
            </div>
            <p className="text-[34px] mb-[44px] ml-[44px] mr-[44px]">{card.title}</p>
        </div>
    )
}

ClientCard.propTypes = {
    card: PropTypes.object
}

export default ClientCard
