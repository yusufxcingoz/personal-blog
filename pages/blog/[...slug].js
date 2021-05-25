import { getMdxNode, getMdxPaths } from 'next-mdx/server'

import { useAuth0 } from '@auth0/auth0-react'
import PageTransition from '../../components/page-transition'
import Form from '../../components/form'
import { faObjectGroup } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
import Comments from '../../components/Comments'

export default function PostPage({ post }) {
  const {
    loginWithRedirect,
    loginWithPopup,
    isAuthenticated,
    user,
    logout,
    getAccessTokenSilently
  } = useAuth0()

  const [text, setText] = useState('')
  const [url, setUrl] = useState(null)
  const [comments, setComments] = useState([])

  const fetchComment = async () => {
    const query = new URLSearchParams({ url })
    const newUrl = `/api/comment?${query.toString()}`
    const response = await fetch(newUrl, {
      method: 'GET'
    })

    const data = await response.json()
    setComments(data)
  }

  useEffect(() => {
    const url = window.location.origin + window.location.pathname
    setUrl(url)

    fetchComment()
  }, [])

  useEffect(() => {
    if (!url) return

    fetchComment()
  }, [url])

  const onSubmit = async (e) => {
    e.preventDefault()

    const userToken = await getAccessTokenSilently()

    const response = await fetch('/api/comment', {
      method: 'POST',
      body: JSON.stringify({ text, userToken, url }),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const data = await response.json()
    fetchComment()
    setText('')
  }

  return (
    <PageTransition className="">
      <article className="lg:px-12 md:px-10 sm:px-8 ">
        <div className="max-w-3xl mx-auto px-12 sm:px-10 bg-gray-200 py-4 rounded-3xl ">
          <h2 className="my-10 font-bold text-lg ">{post.frontMatter.title}</h2>
          <p>{post.content}</p>
          <p className="my-4 text-gray-500">{post.frontMatter.date}</p>
        </div>
      </article>
      <Form onSubmit={onSubmit} setText={setText} text={text} />
      <Comments comments={comments} />
    </PageTransition>
  )
}

export async function getStaticPaths() {
  return {
    paths: await getMdxPaths('post'),
    fallback: false
  }
}

export async function getStaticProps(context) {
  const post = await getMdxNode('post', context)

  if (!post) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      post
    }
  }
}
