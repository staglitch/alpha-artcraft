import React, { Component } from 'react'
import Header from '../Components/Header'
import Meta from '../Components/Meta'
import styled, { ThemeProvider, injectGlobal } from 'styled-components'

const theme = {
	mainBackground: 'rgba(255, 255, 255, 1)',//mainWhite
	textColor1: 'rgba(7, 9, 15, 1)',//mainBlack
	textColor2: 'rgba(187, 10, 33, 1)',//cherryRed
	textColor3: 'rgba(189,189,189, 0.8)', //light grey
	textColor4: '#EDEDED',//off-white
	textColor5: '#3A3A3A', //GREY
	bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',//box-shadow
	maxWidth:'1300px'
}

const StyledPage = styled.div`
background: ${props=> props.theme.mainBackground};
color:${props => props.theme.textColor2};
`
const InnerBody = styled.div`
background: ${props => props.theme.mainBackground};
max-width:${props => props.theme.maxWidth};
margin:0 auto;
padding:0.2rem;
`
export default class Page extends Component {
	render() {
		return (
			<ThemeProvider theme={theme}>
				<StyledPage>
					<Meta />
					<Header />
					<InnerBody>
					{this.props.children}
					</InnerBody>
				</StyledPage>
			</ThemeProvider>
		)
	}
}
