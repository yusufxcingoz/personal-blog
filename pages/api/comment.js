import { nanoid } from 'nanoid'
import Redis from 'ioredis'
import { comment } from 'postcss'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { url, userToken, text } = req.body

    if (!url || !userToken || !text) {
      return res.status(400).json({ message: 'parametreler eksik veya haalı' })
    }

    const userResponse = await fetch(
      'https://dev-q962xtov.eu.auth0.com/userinfo',
      {
        headers: {
          'Content-Type': 'application/json0',
          Authorization: `Bearer ${userToken}`
        }
      }
    )

    const user = await userResponse.json()

    //USER'I DOĞRULA
    const comment = {
      id: nanoid(),
      createDate: Date.now(),
      text,
      user: {
        name: user.name,
        picture: user.picture
      }
    }
    let redis = new Redis(process.env.REDIS_URL)

    redis.lpush(url, JSON.stringify(comment))

    redis.quit()

    res.status(200).json(comment)
  }
  if (req.method === 'GET') {
    const { url } = req.body
    let redis = new Redis(process.env.REDIS_URL)

    const comments = await redis.lrange(
      'http://localhost:3000/blog/first-blog',
      0,
      -1
    )

    redis.quit()

    const data = comment.mao((o) => JSON.parse(o))

    res.status(200).json({ name: 'YORUMLAR' })
  }
}
