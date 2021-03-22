const PageHeader = ({showAddBook, setShowAddBook}) => {
  return (
    <section className="page-header">
      <h2>All Books</h2>
      <button 
        className="btn add-book-button" 
        onClick={() => setShowAddBook(!showAddBook)}>Add a New Book</button>
    </section>
  )
}

export default PageHeader
