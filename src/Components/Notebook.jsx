import axios from "axios"
import { useEffect, useState } from "react"
import '../App.css'
import { Link } from "react-router-dom"

const NoteBook = () => {
    const [noteBookdata, setNoteBookData] = useState([])

    // create a function for get data from db.json
    const getNoteBookData = () => {
        axios.get("http://localhost:3000/Notebook").then((resData) => {
            setNoteBookData(resData.data)
        })
    }

    // for delete the item 
    const deleteNotebook = (id) => {
        axios.delete(`http://localhost:3000/Notebook/${id}`).then(() => {
            getNoteBookData()

        })
    }

    useEffect(() => {
        getNoteBookData()
    }, [])

    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        const date = new Date();
        const formattedDate = date.toLocaleDateString();
        setCurrentDate(formattedDate);
    }, []);
    return (
        <div className="notebook-card">
            {
                noteBookdata.map((res,index) => (
                    <div className="notebook-div" key={res.id}>
                        <h3>{res.heading}</h3>
                        <p>{res.description}</p>
                        <button className="delete-btn" onClick={()=>deleteNotebook(res.id)}>Delete</button>
                    </div>
                ))
            }
            <p>{currentDate}</p>

        </div>
    )
}
export default NoteBook

