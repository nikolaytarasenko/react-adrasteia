import PropTypes from 'prop-types'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import arrowDown from '../assets/arrow-down.png'
import arrowUp from '../assets/arrow-up.png'

const ScrollButton = ({ direction }) => {
    const icon = direction === 'down' ? `${arrowDown}` : `${arrowUp}`

    return (
        <AnchorLink
            href="#about"
            className="w-[54px] h-[54px] rounded-full bg-gray-50 flex justify-center items-center cursor-pointer transition duration-200 hover:bg-gray-90"
        >
            <img src={icon} alt="scroll" />
        </AnchorLink>
    );
};

ScrollButton.propTypes = {
    direction: PropTypes.string
}

export default ScrollButton;