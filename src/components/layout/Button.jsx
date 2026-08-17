import { Link } from 'react-router'

function Button({ path, text }) {
    return (
        <button className='bg-transparent hover:bg-black/4 border border-black/80 px-6 py-3 rounded-full text-sm'>
            <Link to={path}>
                {text} <i class="bi bi-arrow-right"></i>
            </Link>
        </button>
    )
}

export default Button