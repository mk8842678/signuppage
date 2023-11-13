import React, { useState } from "react";
import "./Boxmoving.css"

const Boxmoving = () => {
     const [moving, setmoving] = useState()


     const handelleft = () => {
          setmoving(
               moving = moving + 10

          )

     }

     return (
          <>
               <div className="parentbox">
                    <div className="moving-box">{moving}</div>

               </div>
               <div className="button-box">
                    <button onClick={handelleft}>Left</button>
                    <button>Top</button>
                    <button>Right</button>
               </div>
          </>
     )
}
export default Boxmoving