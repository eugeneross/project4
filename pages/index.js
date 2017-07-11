import React, {Component} from  'react'
import Link from   'next/link'

import Layout from 'containers/Layout'

export default class Index extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		console.log("Index Component mounted.")
	}
	render() {
		return (

			<div>

				<Layout>
					<main>
					<p>Sup index</p>
					<Link href='/about'><a>About</a></Link>
					</main>
				</Layout>

			</div>

		)
	}
}
