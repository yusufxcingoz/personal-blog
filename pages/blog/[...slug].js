import { getMdxNode, getMdxPaths } from 'next-mdx/server'

import { useAuth0 } from '@auth0/auth0-react'
import PageTransition from '../../components/page-transition'

export default function PostPage({ post }) {
  const {
    loginWithRedirect,
    loginWithPopup,
    isAuthenticated,
    user,
    logout
  } = useAuth0()

  return (
    <PageTransition className="">
      <article className="lg:px-12 md:px-10 sm:px-8 ">
        <div className="max-w-3xl mx-auto px-12 sm:px-10 bg-gray-200 py-4 rounded-3xl ">
          <h2 className="my-10 font-bold text-lg ">{post.frontMatter.title}</h2>
          <p>{post.content}</p>
          <p className="my-4 text-gray-500">{post.frontMatter.date}</p>
        </div>
      </article>
      <form className="max-w-3xl mx-auto px-12 mt-10">
        <textarea
          rows="3"
          className="border w-full block p-2 rounded-lg focus:border-transparent focus:rounded-lg"
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
