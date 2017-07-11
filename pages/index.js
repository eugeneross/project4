import React from  'react'
import Link from   'next/link'

import Layout from 'containers/Layout'


export default() =>

<div>

	<Layout>
		<main>
		<p>Sup people</p>
		<Link href='/about'><a>About</a></Link>
		</main>
	</Layout>

</div>
