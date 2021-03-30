import { getAllNodes } from 'next-mdx/server'
import Link from 'next/link'

function BlogPage({ posts }) {
  console.log(posts)
  return (
    <div className="site-container">
      {posts.map((post) => {
        return (
          <article key={post.url}>
            <h2 className="text-xl font-bold my-2 ">
              <Link href={post.url} className="">
                <a className=""> {post.frontMatter.title}</a>
              </Link>
            </h2>

            <p>{post.frontMatter.excerpt}</p>

            <p className="my-4 text-gray-500">{post.frontMatter.date}</p>
            <p className=" text-gray-700">{post.frontMatter.author} yazdı.</p>
          </article>
        )
      })}
    </div>
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
