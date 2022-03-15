import Link from "next/link";
import PropTypes from "prop-types";

function sizeClassName(size) {
    const sizeMap = {
        sm: 'btn-sm',
        md: 'btn-md',
        lg: 'btn-lg'
    }

    return sizeMap[size] || sizeMap.md;
}

function variantClassName(variant) {
    if(variant === 'white') {
        return 'btn-white'
    }


    return 'btn-primary';
}

function Button({ children, href, variant, size, className }) {

    const getClassName = () => {
        return ` btn ${className} ${sizeClassName(size)} ${variantClassName(variant)}`;
    };

    return (
        <Link href={href}>
            <a className={getClassName()}>{ children }</a>
        </Link>
    )
}


Button.defaultProps = {
    variant: 'primary',
    size: 'md',
    className: ''
}

Button.propTypes = {
    href: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    variant: PropTypes.oneOf(['white', 'primary']),
    className: PropTypes.string
}

export default Button