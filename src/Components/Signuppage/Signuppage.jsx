import React, { useState } from "react";
import Style from "../Signuppage/Style.module.scss"
import Loginpage from "../Loginpage/Loginpage";
const Signup = () => {
     const [storeData, setstoredata] = useState([])
     const [showlogin, setshowlogin] = useState(false)
     const [input, setinput] = useState({
          name: "",
          email: "",
          phone: "",
          password: ""
     })
     // console.log(storeData);
     ////
     const handelinnput = (e) => {

          setinput({
               ...input, [e.target.name]: e.target.value
          })

     }
     const handelsubmit = (e) => {
          e.preventDefault()
          setstoredata([...storeData, input])
          window.localStorage.setItem("userDetails", JSON.stringify([...storeData, input]))
          setinput(
               {
                    name: "",
                    email: "",
                    phone: "",
                    password: ""
               }
          )
          setshowlogin(showlogin)

     }

     const showloginpage = () => {
          setshowlogin(true)
     }

     return !showlogin ? (

          <div className={Style.signupParent}>
               <h2>SignUp</h2>
               <div className={Style.signupParent__inputField}>
                    <form onSubmit={handelsubmit}>
                         <div className={Style.signupParent__inputField__input}>
                              <label>FullName</label><br />
                              <input type="text" name="name" value={input.name} onChange={handelinnput} />
                         </div>
                         <div className={Style.signupParent__inputField__input}>
                              <label>Email</label><br />
                              <input type="text" name="email" value={input.email} onChange={handelinnput} />
                         </div>
                         <div className={Style.signupParent__inputField__input}>
                              <label>Phone</label><br />
                              <input type="number" name="phone" value={input.phone} onChange={handelinnput} />
                         </div>
                         <div className={Style.signupParent__inputField__input}>
                              <label>Password</label><br />
                              <input type="text" name="password" value={input.password} onChange={handelinnput} />
                         </div>
                         <div className={Style.signupParent__subMitbtn}>
                              <button type="submit">Submit</button>
                              <div onClick={showloginpage}>...Login</div>
                         </div>
                    </form>

                    {/* <div className={Style.signupParent__inputField__printdata}>{
                         storeData.map((item) => {
                              console.log(item);
                              return (
                                   <>
                                        <div className={Style.signupParent__inputField__printdata__parent}>
                                             <div>{item.name}</div>
                                             <div>{item.email}</div>
                                             <div>{item.phone}</div>
                                             <div>{item.password}</div>
                                        </div>
                                   </>
                              )
                         })
                    }</div> */}

               </div>
          </div>) : <Loginpage />


}
export default Signup

