import PropTypes from 'prop-types'
import Button from './Buttons'

const Header = ({ subTitle, onAdd, showAdd }) => {
    return (
        <header className="header">
            <h1>Task Tracker</h1>
            <Button
                color={showAdd ? 'red' : 'green'}
                text={showAdd ? 'close' : 'Add'}
                onClick={onAdd}
            />
        </header>
    )
}
Header.defaultProps = {
    subTitle: 'Task Tracker is running default prop',
}

Header.propTypes = {
    subTitle: PropTypes.string.isRequired,
}

export default Header

// css in JS
// const headingStyle = {
//     backgroundColor: 'grey',
//     color: 'Blue',
//     fontWeight: 'bold',
// }
