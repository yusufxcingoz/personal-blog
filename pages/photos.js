import unsplash from '../lib/unsplash'
import PageTransition from '../components/page-transition'
import dynamic from 'next/dynamic'
import SiteConfig from '../site.config'
import MetricCard from '../components/metric-card'
import PageTitle from '../components/page-title'
import { useLayoutEffect } from 'react'
const Photos = dynamic(() => import('../components/photos'), {
  ssr: false
})

function PhotosPage({ photos, stats }) {
  console.log(photos)
  return (
    <PageTransition>
      <div className="c-small mx-auto site-container">
        <p className="text-lg text-center ">
          When I see a beautiful frame, regardless of time and place, I like to
          take out my phone and immortalize that moment. When I look back later,
          being able to capture the moment gives a good pleasure.
        </p>
      </div>

      {/*{photos.map((ph) => {
          return(
              <div>
                  <img src={ph.urls.regular}/>
              </div>
          )
      })}*/}
      <Photos className="" data={photos} />
    </PageTransition>
  )
}

export async function getStaticProps() {
  const photos = await unsplash.getPhotos()
  const stats = await unsplash.getStats()

  return {
    props: {
      photos,
      stats
    },
    revalidate: 6000
  }
}

export default PhotosPage
