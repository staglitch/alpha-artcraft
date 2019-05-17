import NProgress from 'nprogress'
import Router from 'next/router'
import styled from 'styled-components'
import Navbar from '../Components/Navbar'

Router.onRouteChangeStart = () => {
	NProgress.start()
}
Router.onRouteChangeComplete = () => {
	NProgress.done()
}
Router.onRouteChangeError = () => {
	NProgress.done()
}

const StyledHeader = styled.div`
.bar{
width:100%;
padding:0;
margin:0;
background:linear-gradient(0deg, rgba(31,80,53,1) 2%, rgba(241,191,158,1) 100%);
border:1px solid black;
display:grid;
grid-template-columns:auto 1fr;
justify-content:space-around;
   @media (max-width: 1300px) {
      grid-template-columns: 1fr;
      justify-content: space-around;
    }
}
`
const LogoContainer = styled.div`
margin:1rem 0;
display:flex;
flex-flow:row nowrap;
.LogoTree{
	margin-left:1rem;
	height:10rem;
	width:10rem;
}
.LogoText{
	margin-left:3rem;
	height:10rem;
	width: 30rem;
}
@media (max-width: 1300px) {
	   margin:0.8rem 0;
      justify-content: center;
    }
@media (max-width: 600px) {
      justify-content: center;
	  .LogoTree{
	margin-left:1rem;
	margin-bottom:1rem;
	height:8rem;
	width:8rem;
}
.LogoText{
	margin-left:1rem;
	height:8rem;
	width: 24rem;
}
    }
`

const Header = () => {
	return (
		<StyledHeader>
			<div className='bar'>
				<LogoContainer>
					<img src='../static/LogoTree.png' className='LogoTree' />
					<img src='../static/LogoText.png' className='LogoText' />
				</LogoContainer>
				<Navbar />
			</div>
		</StyledHeader>
	)
}

export default Header
