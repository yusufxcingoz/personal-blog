import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

function form({ onSubmit, setText, text }) {
  const {
    loginWithRedirect,
    loginWithPopup,
    isAuthenticated,
    user,
    logout,
    getAccessTokenSilently
  } = useAuth0()
  return (
    <div>
      <form className="max-w-3xl mx-auto px-12 mt-10" onSubmit={onSubmit}>
        <textarea
          onChange={(e) => setText(e.target.value)}
          rows="3"
          className="border w-full block p-2 rounded-lg focus:border-transparent focus:rounded-lg"
          value={text}
        />
      </form>
    </div>
  )
}

export default form
