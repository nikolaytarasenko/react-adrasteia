import PropTypes from 'prop-types'

const Button = ({ title, backgroundColor = 'transparent', type = 'button', clickHandler }) => {
    const bgColor = `custom-bg-${backgroundColor}`

    const handleClick = e => {
        if (type === 'button') {
            clickHandler(true)
        }
    }

    return (
        <button
            className={`${bgColor} ${backgroundColor === 'transparent' ? 'py-0 gap-[12px] hover:opacity-60' : ''} ${backgroundColor === 'gray' ? 'py-[15px] sm:py-[20px] px-4 sm:px-6 justify-between gap-6 rounded-xl hover:bg-blue-90 hover:text-white' : ''} ${backgroundColor === 'blue' ? 'py-[15px] sm:py-[20px] px-4 sm:px-6 justify-between gap-6 rounded-xl hover:bg-blue-50 hover:text-white' : ''} flex items-center duration-200 group`}
            type={type}
            onClick={handleClick}
        >
            <span className={`${backgroundColor === 'gray' && 'text-blue-50 group-hover:text-white'}`}>{title}</span>
            <span className={`relative inline-block w-[34px] h-[34px] rounded-full bg-blue-50 text-white before:absolute before:content-['+'] before:top-[50%] before:left-[50%] before:translate-x-[-50%] before:translate-y-[-50%] before:text-[25px] before:transition before:duration-200 ${backgroundColor === 'gray' && 'group-hover:bg-white group-hover:text-blue-90'}`}></span>
        </button>
    )
}

Button.propTypes = {
    title: PropTypes.string,
    backgroundColor: PropTypes.string,
    type: PropTypes.string,
    clickHandler: PropTypes.func
}

export default Button