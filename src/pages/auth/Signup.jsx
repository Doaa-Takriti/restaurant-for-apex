import React from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.
const Signup = () => {
  const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    /* let result = await fetch("url",{
      method: 'POST',
      body :JSON.stringify(values),
      headers : {
        "content-type":"application/json"
      }
    });
    result = await result.json();
    console.warn(result); 
    if (result.auth) {
    localStorage.setItem("user",JSON.stringify(result.user))
        localStorage.setItem("token",JSON.stringify(result.auth))

    navigate ('/') 
  } else {
    alert ("lll")
  } */

    actions.resetForm();
  
    navigate('/')
  
  
  
  }; 

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
} = useFormik({
    initialValues: {
        phone: "",
        uniqueid: "",
       password: ""
      
    },
    validationSchema:Yup.object().shape({
      phone: Yup.string()
      .matches(/^[0-9]+$/, 'Phone number must contain only digits')
      .required('Phone number is required'),
  
      password: Yup
          .string()
          .min(8)
          .matches(passwordRules, { message: "Please create a stronger password" })
          .required("Required"),
  
          uniqueid: Yup.string().required("required filed")
         
    
  
  }),
    onSubmit,
});

console.log(errors);
  return (
    <div className='signup'>
      <div className='row'>
        <div className='col-md-6'>
          <div className='logo-signup d-flex align-items-center'>
            <img src="./img/Group1(1).png" alt="" />
            <span>Apex Software Solutions.</span>
          </div>
          <form onSubmit={handleSubmit} autoComplete="off">
            <h1>welcome back</h1>
            <label>Phone Number</label>
            <input    value={values.phone}
                name='phone'
                onChange={handleChange}
                id="phone"type="text" placeholder='Phone Number'   onBlur={handleBlur}
                className={errors.phone && touched.phone ? "input-error" : ""} />
                            {errors.phone && touched.phone && (<p className="error">{errors.phone}</p>)}
            <label>Restaurant Unique ID</label>
            <input    value={values.uniqueid}
                name='uniqueid'
                onChange={handleChange}
                id="uniqueid"type="text" placeholder='Unique IDr'   onBlur={handleBlur}
                className={errors.uniqueid && touched.uniqueid ? "input-error" : ""} />
                            {errors.uniqueid && touched.uniqueid && (<p className="error">{errors.uniqueid}</p>)}
            <label>PasswordD</label>
            <input
               value={values.password}
               name='password'
               onChange={handleChange}
               id="password" type="Password" placeholder='Password'  onBlur={handleBlur}
               className={errors.password && touched.password ? "input-error" : ""} />
                           {errors.password && touched.password && (<p className="error">{errors.password}</p>)}
            <p>Forgot Your Password?</p>
            <button  disabled={isSubmitting} className='btn-submit' type="submit"  >
              Log in
              </button>
              <div className='contact'>
            <p>
            Don’t Have Account? 
            <span>
            Contact Us
            </span>
            </p>

          </div>
          </form>
       

        </div>
        <div className='col-md-6'>
          <div className='img-right'>
            <h1>Resturante</h1>
            <p>Lorem ipsum dolor sit amet, consectetur<br/>
             adipiscing elit. Ut et massa mi.</p>
             <img src="./img/Pizza.png" alt=" "/>
          </div>
          
        </div>
      </div>
      
    </div>
  )
}

export default Signup
