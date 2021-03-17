const Book = ({id, title, imgPath, description, isFavorite, handleUpdate, handleDelete}) => {
  return (
    <div className={`card ${isFavorite ? "favorite" : ""}`}>
      <img src={imgPath} alt="" />
      <header className="card-header"> 
        <h2>{title} </h2>
      </header>
      <p>{description}</p>
      <footer>
        <button onClick={()=>handleUpdate(id)}>Favorite</button>
        <button onClick={()=>handleDelete(id)}>Delete</button>
      </footer>
    </div>
  )
}

export default Book
