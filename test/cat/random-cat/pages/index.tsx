import { GetServerSideProps, NextPage } from 'next'
import { useState } from 'react'
import sytles from './index.module.css'

type Props = {
  initialImageUrl: string
}

const IndexPage: NextPage<Props> = ({ initialImageUrl }) => {
  const [imageUrl, setImageUrl] = useState(initialImageUrl)
  const [loading, setLoading] = useState(false)

  const handleClick = async () => {
    setLoading(true)
    const newImage = await fetchImage()
    setImageUrl(newImage.url)
    setLoading(false)
  }

  return (
    <div className={sytles.page}>
      <button onClick={handleClick} className={sytles.button}>
        他の見る
      </button>
      <div className={sytles.frame}>{loading || <img src={imageUrl} />} </div>
    </div>
  )
}
export default IndexPage

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const image = await fetchImage()
  return {
    props: {
      initialImageUrl: image.url,
    },
  }
}
type Image = {
  url: string
}

const fetchImage = async (): Promise<Image> => {
  const res = await fetch('https://api.thecatapi.com/v1/images/search')
  const images = await res.json()
  console.log(images)
  return images[0]
}