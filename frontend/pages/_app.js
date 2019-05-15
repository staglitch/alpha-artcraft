// this is to provide a local store or a source of data for the inital loading for each and every component for each and every page.
import App, { Container } from 'next/app'
import Page from '../Components/Page'
import React from 'react'

class appFrontend extends App {
	static async getInitialProps({ Component, ctx }) {
		let pageProps = {}
		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx)
		}
		return { pageProps }
	}
	render() {
		const { Component, pageProps } = this.props
		return (
			<Container>
				<Page>
					<p>papa element _app.js!</p>
					<Component {...pageProps} />
				</Page>
			</Container>
		)
	}
}

export default appFrontend