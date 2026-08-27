import { Link } from 'react-router'

function Button({ path, text, isFilled }) {
    return (
        <button
            className={`${isFilled === 'filled' ?
                'bg-black/85 hover:bg-(--bg-secondary) text-(--text-light)' :
                'bg-transparent hover:bg-black/4 border border-black/80 text-black/80'} 
         px-6 py-3 rounded-full text-sm`}>
            <Link to={path}>
                {text} <i className="bi bi-arrow-right"></i>
            </Link>
        </button>
    )
}

export default Button