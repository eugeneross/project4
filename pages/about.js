import React from  'react'
import Link from   'next/link'

import Layout from 'containers/Layout'

const page = {
  title:         'About - New Project',
  description:   'This is a great new Project',
  url:           'https://google.com',
  facebookShare: 'static/images/meta/facebook_share.png',
  twitterShare:  'static/images/meta/twitter_share.png',
  favicon:       'static/images/meta/favicon.png'
};

export default() =>

<div>

	<Layout>
		<main>
		<p>Sup about</p>
    <Link href='/'><a>Back</a></Link>
		</main>
	</Layout>

</div>
