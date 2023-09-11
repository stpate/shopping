import React from "react";
import Navbar from "./Navbar";
function Form()
{
    return(
        <>
        <Navbar/>
     <form method="post" className="was-validated"> 
                <div className="mb-3" style={{width:"300px"}}>
                    <label for="fname">First Name: </label>
                    <input type="text" name="fname" className="form-control" placeholder="Enter your first name" required/>
                    <div className="valid-feedback">Correct First Name</div>
                    <div className="invalid-feedback">Please enter your First name</div>
                </div>
                <div className="mb-3" style={{width:"300px"}}>
                    <label for="lname">Last Name: </label>
                    <input type="text" name="lname" className="form-control" placeholder="Enter your last name" required/>
                    <div className="valid-feedback">Correct Last Name</div>
                    <div className="invalid-feedback">Please enter Last name</div>
                </div>
<div className="mb-3" style={{width:"300px"}}>
                    <label for="em">Email: </label>
                    <input type="email" name="em" className="form-control" placeholder="Enter your email" required/>
                    <div className="valid-feedback">Correct Email</div>
                    <div className="invalid-feedback">Please enter valid email</div>
                </div>
                <div className="mb-3" style={{width:"300px"}}>
                    <label for="pas">Password: </label>
                    <input type="password" name="pas" className="form-control" placeholder="Enter your password"/>
                    <div className="valid-feedback">Correct</div>
                    <div className="invalid-feedback">Please enter your password</div>
                </div>
<div className="form-check mb-3" style={{width:"400px"}}>
                    <label for="remember" className="form-check-label">
                        <input className="form-check-input" type="checkbox" name="remember" required/> Do you agree to our terms and condition?
                        <div className="valid-feedback">Thank you for agreeing our terms and conditions</div>
                        <div className="invalid-feedback">Hey, You dont agree our terms and conditions? Agree it otherwise we will kick you out </div>
                    </label>
                </div>
                
            <button type="submit" className="btn btn-info">Submit</button>
            </form>
          </>
       
    )
}
export default Form;