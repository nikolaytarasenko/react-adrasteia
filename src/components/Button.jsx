import PropTypes from 'prop-types'

const Button = ({ title, backgroundColor = 'transparent' }) => {
    const bgColor = `custom-bg-${backgroundColor}`

    return (
        <button className={`${bgColor} ${backgroundColor === 'transparent' ? 'py-0 gap-[12px]' : 'py-[20px]'} flex items-center hover:opacity-60 duration-200`}>
            <span>{title}</span>
            <span className="relative inline-block w-[34px] h-[34px] rounded-full bg-blue-50 text-white before:absolute before:content-['+'] before:top-[50%] before:left-[50%] before:translate-x-[-50%] before:translate-y-[-50%] before:text-[25px]"></span>
        </button>
    )
}

Button.propTypes = {
    title: PropTypes.string,
    backgroundColor: PropTypes.string
}

export default Button