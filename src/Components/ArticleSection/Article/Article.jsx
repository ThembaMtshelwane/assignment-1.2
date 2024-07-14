import './article.css'

const Article = ({ imageUURL, imageName, title }) => {
  return (
    <section className="article-container">
      <img src={imageUURL} alt={imageName} />
      <span className="bar article-bar"></span>
      <p className="article-title">{title}</p>
    </section>
  )
}
export default Article
