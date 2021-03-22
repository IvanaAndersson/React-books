import {Link} from "react-router-dom"
import Heart from "./Heart"
import HeartSolid from "./HeartSolid"

const Book = ({id, title, imgPath, description, isFavorite, handleUpdate, handleDelete}) => {
  return (
    <div className={`card ${isFavorite ? "favorite" : ""}`}>
      <Link to={`/book/${id}`} className="book-link">
        <div className="img-wrapper">
          <img src={imgPath} alt="" />
        </div>
        <header className="card-header"> 
          <h2>{title} </h2>
        </header>
        <p>{description}</p>
      </Link>
        <footer>
          <button className="btn favorite-button" onClick={()=>handleUpdate(id)}> 
            {isFavorite ? <HeartSolid /> : <Heart />}
          </button>
          <button className="btn delete-button" onClick={()=>handleDelete(id)}> </button>
        </footer>
    </div>
  )
}

export default Book
