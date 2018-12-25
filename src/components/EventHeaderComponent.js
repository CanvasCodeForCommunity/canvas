import React from 'react'
import { primary } from '../utils/Colors';
const EventHeaderComponent = ({ siteTitle, siteSecondaryTitle }) => (
  <div
    style={{
      background: primary,
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0, color: 'white' }}>{siteTitle}</h1>
      <p style={{ margin: 0, color: 'white' }}>{siteSecondaryTitle}</p>
    </div>
  </div>
)

export default EventHeaderComponent
