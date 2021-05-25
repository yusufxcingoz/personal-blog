import { DateTime } from 'luxon'

export default function Comments({ comments }) {
  return (
    <div className="max-w-3xl mx-auto my-10 ">
      <h1 className="font-semibold text-xl">Comments</h1>
      {comments.map(({ text, id, createdAt, user }) => {
        return (
          <div key={id} className=" my-5 p-2 rounded-lg">
            <div className="flex flex-row items-center">
              <div className="w-10 h-10 g">
                <img src={user.picture} className="rounded-full" />
              </div>
              <div className="mx-2">
                <div className="flex flex-row items-center ">
                  <h1 className="font-semibold">{user.name}</h1>
                  <p className="mx-2 text-sm text-gray-500">
                    {DateTime.fromMillis(Number(createdAt)).toRelative()}
                  </p>
                </div>
                <p>{text}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
