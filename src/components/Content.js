import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import Container from '../components/Container'
import SEO from '../components/seo'
import { bs } from '../utils'

const Content = ({ children, heading, keywords, title }) => (
  <div css={{ minHeight: '65vh' }}>
    <SEO title={title} keywords={keywords} />

    {heading && (
      <div
        css={css`
          margin-top: ${bs(4)};
        `}
      >
        <Container>
          <h2>{heading}</h2>
        </Container>
      </div>
    )}

    {children}
  </div>
)

Content.propTypes = {
  children: PropTypes.node,
  heading: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
}

Content.defaultProps = {
  keywords: [],
  title: '',
}

export default Content
