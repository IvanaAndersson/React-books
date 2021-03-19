import { useState } from "react"

const AddNew = ({ handleAdd }) => {
  const [title, setTitle] = useState('')
  const [overview, setOverview] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookInfo = { title, overview };
    handleAdd(bookInfo);
    setTitle('')
    setOverview('')
  }
  return (
    <form className="add-book-form" onSubmit={handleSubmit}>  
      <fieldset>
        <legend>Add a New Book</legend>
        <div className="input-wrapper">
          <label htmlFor="">Title</label>
          <input type="text" required value={title} onChange={(e)=>setTitle(e.target.value)}/>
        </div>
        <div className="input-wrapper">
          <label htmlFor="">Overview</label>
          <textarea required value={overview} onChange={(e)=>setOverview(e.target.value)}/>
        </div>
        <input type="submit" value="Submit" className="btn submit-button" />
      </fieldset>
    </form>
  )
}

export default AddNew
