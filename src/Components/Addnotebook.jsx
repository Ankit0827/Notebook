import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css'

const AddnoteBook = () => {

    const history=useNavigate()
    const [noteBookData, setNoteBookData] = useState({
        heading: "",
        description: ""
    });

    const postData = (e) => {
        e.preventDefault();

        axios.post("http://localhost:3000/Notebook", noteBookData)
            .then((res) => {
                if (res.status >= 200 && res.status < 300) {
                    console.log("Data posted successfully.");
                } else {
                    console.error("Server returned an error.");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
            history("/Notebook")
    }

    return (
        <div className="parent-notebook-div">
            <div className="noteboo-div">
                <h1>NoteBook</h1>
                <form action="" className="notebook-form" onSubmit={postData}>
                    <label htmlFor="heading" className="label">Heading</label>
                    <input
                        type="text"
                        id="heading"
                        placeholder="Enter your Heading"
                        value={noteBookData.heading}
                        onChange={(e) => setNoteBookData({ ...noteBookData, heading: e.target.value })}
                    />
                    <label htmlFor="description" className="label">Description</label>
                    <input
                        type="text"
                        id="description"
                        placeholder="Enter your description"
                        value={noteBookData.description}
                        onChange={(e) => setNoteBookData({ ...noteBookData, description: e.target.value })}
                    />
                    <button type="submit" style={{
                        fontWeight:"600",
                        borderRadius:"7px",
                        border:"none"
                    }}>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddnoteBook;
