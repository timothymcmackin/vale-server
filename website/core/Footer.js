/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react')

class Footer extends React.Component {
  docUrl (doc, language) {
    const baseUrl = this.props.config.baseUrl
    const docsUrl = this.props.config.docsUrl
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`
    const langPart = `${language ? `${language}/` : ''}`
    return `${baseUrl}${docsPart}${langPart}${doc}`
  }

  pageUrl (doc, language) {
    const baseUrl = this.props.config.baseUrl
    return baseUrl + (language ? `${language}/` : '') + doc
  }

  render () {
    return (
      <footer className='nav-footer' id='footer'>
        <section className='sitemap'>
          <a href={this.props.config.baseUrl} className='nav-home'>
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width='66'
                height='58'
              />
            )}
          </a>
          <div>
            <h5>Product</h5>
            <a href='https://errata.ai/vale-server/'>
              Overview
            </a>
            <a href='https://errata.ai/vale-server/#puchase'>
              Buy now
            </a>
          </div>
          <div>
            <h5>Support</h5>
            <a href='https://github.com/errata-ai/vale-server/issues'>
            Issue Tracker
            </a>
            <a href='https://errata.ai/vale-server/#faq'>
              FAQ
            </a>
          </div>
          <div>
            <h5>More</h5>
            <a href='https://github.com/errata-ai'>GitHub</a>
          </div>
        </section>

        <section className='copyright'>{this.props.config.copyright}</section>
      </footer>
    )
  }
}

module.exports = Footer