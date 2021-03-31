import { getMdxNode, getMdxPaths } from 'next-mdx/server'

export default function PostPage({ post }) {
  console.log(post)
  return (
    <div className="max-w-3xl mx-auto px-12  bg-gray-200 py-4 rounded-3xl ">
      <h2 className="my-10 font-bold text-lg ">{post.frontMatter.title}</h2>
      <p>{post.content}</p>
      <p className="my-4 text-gray-500">{post.frontMatter.date}</p>
    </div>
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
