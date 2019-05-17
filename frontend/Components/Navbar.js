import NavStyles from '../Styles/NavStyles'
import Link from 'next/link'
const Navbar = () => {
	return (
		<NavStyles>
			<Link><a>Home</a></Link>
			<Link><a>Products</a></Link>
			<Link><a>Events</a></Link>
			<Link><a>About Us</a></Link>
			<Link><a>Sign In</a></Link>
			<Link><a>Cart</a></Link>
		</NavStyles>
	)
}

export default Navbar
