import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [data, setData] = useState([
    {
      "albumId": 1,
      "id": 1,
      "title": "accusamus beatae ad facilis cum similique qui sunt",
      "url": "https://via.placeholder.com/600/92c952",
      "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    },
    {
      "albumId": 1,
      "id": 2,
      "title": "reprehenderit est deserunt velit ipsam",
      "url": "https://via.placeholder.com/600/771796",
      "thumbnailUrl": "https://via.placeholder.com/150/771796"
    },
    {
      "albumId": 1,
      "id": 3,
      "title": "officia porro iure quia iusto qui ipsa ut modi",
      "url": "https://via.placeholder.com/600/24f355",
      "thumbnailUrl": "https://via.placeholder.com/150/24f355"
    },
    {
      "albumId": 2,
      "id": 4,
      "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
      "url": "https://via.placeholder.com/600/d32776",
      "thumbnailUrl": "https://via.placeholder.com/150/d32776"
    },
    {
      "albumId": 2,
      "id": 5,
      "title": "natus nisi omnis corporis facere molestiae rerum in",
      "url": "https://via.placeholder.com/600/f66b97",
      "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
    },
    {
      "albumId": 3,
      "id": 6,
      "title": "accusamus ea aliquid et amet sequi nemo",
      "url": "https://via.placeholder.com/600/56a8c2",
      "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
    },
    {
      "albumId": 3,
      "id": 7,
      "title": "officia delectus consequatur vero aut veniam explicabo molestias",
      "url": "https://via.placeholder.com/600/b0f7cc",
      "thumbnailUrl": "https://via.placeholder.com/150/b0f7cc"
    },
    {
      "albumId": 4,
      "id": 8,
      "title": "aut porro officiis laborum odit ea laudantium corporis",
      "url": "https://via.placeholder.com/600/54176f",
      "thumbnailUrl": "https://via.placeholder.com/150/54176f"
    },
    {
      "albumId": 4,
      "id": 9,
      "title": "qui eius qui autem sed",
      "url": "https://via.placeholder.com/600/51aa97",
      "thumbnailUrl": "https://via.placeholder.com/150/51aa97"
    },
    {
      "albumId": 4,
      "id": 10,
      "title": "beatae et provident et ut vel",
      "url": "https://via.placeholder.com/600/810b14",
      "thumbnailUrl": "https://via.placeholder.com/150/810b14"
    },
    {
      "albumId": 5,
      "id": 11,
      "title": "nihil at amet non hic quia qui",
      "url": "https://via.placeholder.com/600/1ee8a4",
      "thumbnailUrl": "https://via.placeholder.com/150/1ee8a4"
    },
    {
      "albumId": 5,
      "id": 12,
      "title": "mollitia soluta ut rerum eos aliquam consequatur perspiciatis maiores",
      "url": "https://via.placeholder.com/600/66b7d2",
      "thumbnailUrl": "https://via.placeholder.com/150/66b7d2"
    },
    {
      "albumId": 5,
      "id": 13,
      "title": "repudiandae iusto deleniti rerum",
      "url": "https://via.placeholder.com/600/197d29",
      "thumbnailUrl": "https://via.placeholder.com/150/197d29"
    },
    {
      "albumId": 6,
      "id": 17,
      "title": "natus doloribus necessitatibus ipsa",
      "url": "https://via.placeholder.com/600/9c184f",
      "thumbnailUrl": "https://via.placeholder.com/150/9c184f"
    },
    {
      "albumId": 6,
      "id": 18,
      "title": "laboriosam odit nam necessitatibus et illum dolores reiciendis",
      "url": "https://via.placeholder.com/600/1fe46f",
      "thumbnailUrl": "https://via.placeholder.com/150/1fe46f"
    }])

  const [albumsIds, setUniqueAlbumsId] = useState([])

  const handleAlbums = () => {

    data.map((idd) => (

     console.log(idd.albumId)

    ))

  }

  useEffect(() => {
    handleAlbums()
  }, [])

  return (
    <>
      <h1>
        GOOGLE PHOTOS
      </h1>
    </>
  )
}

export default App
