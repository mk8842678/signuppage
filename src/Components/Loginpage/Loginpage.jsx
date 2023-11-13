import React, { useEffect, useState } from "react";
import Style from "../Loginpage/Style.module.scss"

const Loginpage = () => {
     const [userData, setuserData] = useState([])
     const [loginInput, setloginInput] = useState({
          name: '',
          password: ''
     })
     console.log(loginInput);
     useEffect(() => {
          let data = JSON.parse(window.localStorage.getItem('userDetails'))
          setuserData(data)
          // console.log(data);
     }, [])
     console.log(userData);



     const loginhandelinput = (e) => {
          setloginInput({
               ...loginInput, [e.target.name]: e.target.value
          })


     }

     const handelsubmitt = (e) => {
          e.preventDefault()
          if (loginInput?.name == userData[0]?.name && loginInput?.password == userData[0]?.password) {
               alert("login successfully")
          }
          else {
               alert("pssword does not match")
          }
     }


     return (
          <>
               <div className={Style.loginPage}>
                    <h2> Login Page</h2>
                    <form onSubmit={(e) => handelsubmitt(e)}>
                         <div className={Style.loginPage__loginInput}>
                              <label htmlFor="">Name</label><br />
                              <input type="text" name='name' value={userData.name} onChange={loginhandelinput} />
                         </div>
                         <div className={Style.loginPage__loginInput}>
                              <label htmlFor="">password</label><br />
                              <input type="text" name='password' value={userData.password} onChange={loginhandelinput} />
                         </div>

                         <button type="submit" className={Style.loginPage__login}>Login</button>
                    </form>
               </div>


          </>
     )
}
export default Loginpage