import Article from './Article/Article'
import './articlessection.css'
import { articleInformation } from '../../../data'

const ArticlesSection = () => {
  const articles = articleInformation.map((data) => (
    <li key={data.imageName}>
      <Article
        imageUURL={`../../assets/images/${data.imageName}`}
        imageName={data.imageName}
        title={data.title}
      />
    </li>
  ))
  return (
    <section className="article-section">
      <h3>latest articles</h3>
      <span className="bar sub-header-bar"></span>
      <ul className="articles-list">{articles}</ul>
    </section>
  )
}
export default ArticlesSection
