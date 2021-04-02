import { useLayoutEffect } from 'react'
import Image from 'next/image'
import Colcade from 'colcade'
import A from './a'
import PageTransition from './page-transition'

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
          
          <div key={item.id} className="photos-item mb-8   ">
            <PageTransition>
            <A href={item.links.html} blank>
              <img src={item.urls.regular}/>
            </A>
          </PageTransition>
          </div>
        )
      })}
    </div>
  )
}

export default Photos