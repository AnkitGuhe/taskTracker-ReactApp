import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {
    return (
        <button
            style={{ backgroundColor: color }}
            className="btn"
            onClick={onClick}
        >
            {text}
        </button>
    )
}
Button.defaultProps = {
    color: 'black',
    text: 'Default Add',
    onClick: () => {
        console.log('from component')
    },
}

Button.propTypes = {
    color: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
}
export default Button
