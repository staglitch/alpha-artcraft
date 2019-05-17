//page to provide global styling
import React, { Component } from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import Header from '../Components/Header'
import Meta from '../Components/Meta'


const theme = {
	mainBackground: 'rgba(255, 255, 255, 1)',//mainWhite
	textColor1: 'rgba(7, 9, 15, 1)',//mainBlack
	textColor2: 'rgba(187, 10, 33, 1)',//cherryRed
	textColor3: 'rgba(189,189,189, 0.8)', //light grey
	textColor4: '#EDEDED',//off-white
	textColor5: '#3A3A3A', //GREY
	background2: '#01708F', //snow
	mainNav1: '#01708F',//sea blue
	mainNav2: '#216869',//Myrtle green
	mainNav3: '#809848',// palm green
	bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',//box-shadow
	progressBar: '#083D77',// dark cerulean
	maxWidth: '1300px'
}

const StyledPage = styled.div`
background: ${props => props.theme.mainBackground};
color:${props => props.theme.textColor1};
`
const InnerBody = styled.div`
background: ${props => props.theme.mainBackground};
max-width:98vw;
margin:0 auto;
padding:0.2rem;
`

const GlobalStyle = createGlobalStyle`
html{
	font-size:10px;
	box-sizing:border-box;
}
*,*:before,*:after{
		box-sizing:inherit;
	}
body{
	margin:0;
	padding:0;
	font-size:1.6rem;
	line-height:2;
	font-family: 'Raleway', sans-serif;
}	
a,button{
	color:${theme.textColor2};
	text-decoration:none;
}
`
export default class Page extends Component {
	render() {
		return (
			<ThemeProvider theme={theme}>
				<StyledPage>
					<Meta />
					<Header />
					<GlobalStyle />
					<InnerBody>
						{this.props.children}
					</InnerBody>
				</StyledPage>
			</ThemeProvider>
		)
	}
}
