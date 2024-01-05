import PropTypes from 'prop-types'

const ServiceCard = ({ card }) => {
    return (
        <div className="flex flex-col rounded-[40px] bg-white p-4 h-full">
            <div className="bg-gray-50 rounded-[30px] w-full flex justify-center items-center h-[224px] px-16">
                <img className="max-w-[200px]" src={card.image} alt={card.title} />
            </div>
            <div className="px-6">
                <h3 className="pt-10 pb-6 text-[30px] leading-[34px] text-blue-90 text-center md:text-left">{card.title}</h3>
                <ul className="text-center md:text-left">
                    {card.list.map(item => (
                        <li key={item} className="text-blue-90 text-[17px] mb-1">- {item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

ServiceCard.propTypes = {
    card: PropTypes.object
}

export default ServiceCard;
