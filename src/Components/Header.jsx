import { useState } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'


const Header=()=>{
  const[changeroute,setChangeRoute]=useState(true)


    return(
        <div className="header-div">
          <div>
            <h1>NoteBook</h1>
          </div>
          {changeroute?(
            <Link to={"/Notebook"} onClick={()=>setChangeRoute(!changeroute)} style={{
              color:"white"
            }}>Go to Notebook page</Link>

          ):(
            <Link to={"/"} onClick={()=>setChangeRoute(!changeroute)} style={{
              color:"white"
            }}>Go back</Link>

          )

          }

        </div>
    )
}
export default Header