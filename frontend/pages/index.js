import Link from 'next/link'

const Index = () => (
	<div>
		<p>Hello Next.js</p>
		<Link href='/aboutUs' >
			<button>Go to About Page</button>
		</Link>
	</div>
)

export default Index