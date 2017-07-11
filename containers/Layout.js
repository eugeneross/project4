import React from      'react'
import Head from       'next/head'
import ReactGA from    'react-ga'

import stylesheet from 'styles/index.sass'

const page = {
  title: 'Index - New Project',
  description: 'This is a great new Project',
  url: 'https://google.com',
  facebookShare: 'static/images/meta/facebook_share.png',
  twitterShare: 'static/images/meta/twitter_share.png',
  favicon: 'static/images/meta/favicon.png'
};

export default class Layout extends React.Component {
  constructor (props) {
    super (props)
  }

  componentDidMount () {

    //Google Analytics
    ReactGA.initialize('UA-XXXXXXXXX-X')
    ReactGA.pageview(document.location.pathname)
  }

  render () {
    return (
      <div>

        <Head>

          <title>{page.title}</title>

          <meta charSet='utf-8'></meta>
          <meta http-equiv='x-ua-compatible' content='ie=edge'></meta>
          <meta name='format-detection' content='telephone=no'></meta>
          <meta name='viewport' content='width=device-width,initial-scale=1'></meta>
          <meta content='width=device-width' name='viewport'></meta>
          <meta content='yes' name='apple-mobile-web-app-capable'></meta>
          <meta content='yes' name='apple-touch-fullscreen'></meta>

          <link rel='icon' href={page.favicon} type='image/x-icon'></link>

          {/* Google content */}
          <meta content={page.title} name='application-name'></meta>
          <meta content={page.description} name='description'></meta>
          <meta content={page.title} name='author'></meta>
          <meta content='' name='keywords'></meta>
          <meta content='2017' name='copyright'></meta>


          {/*Facebook content*/}
          <meta content='website' property='og:type'></meta>
          <meta content={page.title} property='og:title'></meta>
          <meta content={page.description} property='og:description'></meta>
          <meta content={page.facebookShare} property='og:image'></meta>
          <meta content={page.url} property='og:url'></meta>


          {/*Twitter content*/}
          <meta content='summary' name='twitter:card'></meta>
          <meta content={page.title} name='twitter:title'></meta>
          <meta content={page.description} name='twitter:description'></meta>
          <meta content={page.twitterShare} name='twitter:image'></meta>

          <style dangerouslySetInnerHTML={{ __html: stylesheet }}/>


        </Head>

        {this.props.children}

      </div>

    )
  }
}
