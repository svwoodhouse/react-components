// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types'

function Button({
    children, 
    primary,
    secondary,
    success,
    danger,
    warning,
    outline, 
    rounded,
}) {
    return (
        <button>{children}</button>
    )
}

Button.propTypes = {
    checkVariationValue: ({primary, secondary, success, warning, danger}) => {
        const count = Number(!!primary) + Number(!!secondary) + Number(!!warning) + Number(!!success) + Number(!!danger)

        if(count > 1) {
            return new Error('Only one of primary, secondary, warning, danger, success can be true')
        }
    }
}

export default Button