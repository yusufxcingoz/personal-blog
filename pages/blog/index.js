import { getAllNodes } from 'next-mdx/server'
import Link from 'next/link'
import PageTransition from './page-transition'

function BlogPage({ posts }) {
  return (
    <PageTransition className="px-6">
      {posts.map((post) => {
        return (
          <Link href={post.url} className="">
            <article key={post.sort}>
              <div className="max-w-3xl mx-auto lg:py-4 lg:px-12 sm:py-3 md:px-10 sm:px-6 py-3  mb-8 bg-gray-200 hover:bg-gray-300 duration-300 cursor-pointer rounded-3xl  ">
                <div className="  sm:px-2 site-container">
                  <h2 className="text-xl font-bold my-2 ">
                    <a className=""> {post.frontMatter.title}</a>
                  </h2>

                  <p>{post.frontMatter.excerpt}</p>

                  <p className="my-4 text-gray-500">{post.frontMatter.date}</p>
                  <p className=" text-gray-700">
                    Wroted by {post.frontMatter.author}
                  </p>
                </div>
              </div>
            </article>
          </Link>
        )
      })}
    </PageTransition>
  )
}
export async function getStaticProps() {
  return {
    props: {
      posts: await getAllNodes('post')
    }
  }
}

export default BlogPage
