import React from 'react'

import './protected-page.css'

const ProtectedPage = () => {
  return (
    <div className="protected-page">
      <div className="title">Protected Page</div>
      <div>You will be able to see this page only when logged in!</div>
    </div>
  )
}

export default ProtectedPage
