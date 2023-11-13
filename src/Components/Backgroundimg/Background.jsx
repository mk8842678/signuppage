import React from "react";
import "./Background.css"
import useImage from "../Customhook/useCustom";

const Backimage = () => {

     const { isMobile } = useImage()
     return (
          <>


               {isMobile && (
                    <div className="box">
                         <h3>Custom Hook</h3>
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In a hic maxime est minus autem aliquam eveniet nemo perferendis, id iusto architecto nulla voluptatum fugiat, officiis facilis necessitatibus, odio voluptatem!</p>
                    </div>

               )
               }
          </>
     )
}

export default Backimage
