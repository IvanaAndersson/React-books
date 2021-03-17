const Book = ({id, title, imgPath, description, handleDelete}) => {
  return (
    <div className="card">
      <img src={imgPath} alt="" />
      <header className="card-header"> 
        <h2>{title} </h2>
      </header>
      <p>{description}</p>
    </div>
  )
}

export default Book
