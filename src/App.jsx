import './App.css'
import Card from './components/Card'
import CardList from './components/CardList'

function App() {
  const card = {
    img: 'https://imagecdn.app/v1/images/https%3A%2F%2Fimages.unsplash.com%2Fphoto-1525923838299-2312b60f6d69?width=300&height=200',
    title: 'Card title',
    text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    link: 'https://imagecdn.app/getting-started'
  }
  const cards = [
    {
      img: 'https://imagecdn.app/v1/images/https%3A%2F%2Fimages.unsplash.com%2Fphoto-1525923838299-2312b60f6d69?width=300&height=200',
      title: 'Card title',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      link: 'https://imagecdn.app/getting-started'
    },
    {
      title: 'Card title',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      link: 'https://imagecdn.app/getting-started'
    },
  ]

  return (
    <CardList >
      <Card/>
      <Card/>
    </CardList>
  )
}

export default App
