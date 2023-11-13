import React, { useEffect, useState } from "react";


const useImage = () => {


     const [isMobile, setIsmobile] = useState(false)

     useEffect(() => {
          window.addEventListener('resize', handleResize)

          return () => {
               window.removeEventListener('resize', handleResize)
          }

     }, [])

     const handleResize = () => {
          if (window.innerWidth < 500) {
               setIsmobile(true)
          } else {
               setIsmobile(false)
          }
     }


     return {
          isMobile
     }
}

export default useImage