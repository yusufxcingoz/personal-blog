import { useLayoutEffect } from 'react'
import Image from 'next/image'
import Colcade from 'colcade'
import A from './a'
import PageTransition from './page-transition'
import { AiFillHeart } from 'react-icons/ai'

function Photos({ data }) {
  useLayoutEffect(() => {
    const colc = new Colcade(`.photos`, {
      columns: `.photos-col`,
      items: `.photos-item`
    })

    return () => {
      colc.destroy()
    }
  }, [])

  return (
    <div className="photos grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mt-16 ">
      <div className="photos-col photos-col--1" />
      <div className="photos-col photos-col--2" />
      <div className="photos-col photos-col--3" />

      {data.map((item) => {
        return (
          
          <div key={item.id} className="photos-item mb-8 relative  ">
            <PageTransition>
            <A href={item.links.html} blank>
              <img src={item.urls.regular}/>
              <div className=" overlay absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white bg-black bg-opacity-25  opacity-0 hover:opacity-100 duration-300 ">

                  <div className="text-center flex  space-x-4 flex-row items-center ">
                    <AiFillHeart className="mr-1"/>
                    <div className="ml-1">
                    {item.likes}

                    </div>
                  </div>
                <div className="mt-10 font-medium">
                  {item.description}
                  
                  </div>
                  
                  
              </div>
            </A>
          </PageTransition>
          </div>
        )
      })}
    </div>
  )
}

export default Photos