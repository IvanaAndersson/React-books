const Book = ({id, title, imgPath, description, handleDelete}) => {
  return (
    <div className="card">
      <img src={imgPath} alt="" />
      <header className="card-header"> 
        <h2>{title} </h2>
      </header>
      <p>{description}</p>
      <footer>
        <button>Favorite</button>
        <button onClick={()=>handleDelete(id)}>Delete</button>
      </footer>
    </div>
  )
}

export default Book
