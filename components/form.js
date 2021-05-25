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

        <div className="mt-5">
          {isAuthenticated ? (
            <div className="flex items-center space-x-2">
              <button className="bg-gray-300 hover:bg-gray-400 duration-500 rounded-lg px-2 py-1">
                Comment
              </button>
            </div>
          ) : (
            <div>
              <p>You need to login for add comment.</p>
            </div>
          )}
        </div>
      </form>
    </div>
  )
}

export default form
