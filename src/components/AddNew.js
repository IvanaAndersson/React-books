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
    <form onSubmit={handleSubmit}>  
      <fieldset>
        <legend>Add a New Book</legend>
        <div>
          <label htmlFor="">Title</label>
          <input type="text" required value={title} onChange={(e)=>setTitle(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="">Overview</label>
          <input type="text" required value={overview} onChange={(e)=>setOverview(e.target.value)}/>
        </div>
        <p>{title}</p>
        <input type="submit" value="Submit" />
      </fieldset>
    </form>
  )
}

export default AddNew
