import React from 'react'
import {useFormik } from 'formik';
import axios from 'axios';
import { useHistory } from 'react-router';
import { Container,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './login.css';
const validateErrors=(formValue)=>{
   
    const validEmail=RegExp('/[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g')
    const validpass=RegExp('^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{4,12}$');
    const error={};
    
    
     if(!formValue.email){
        error.email="please Enter the Email"
    }
    else if(validEmail.test(formValue.email)){
        error.email="please Enter the correct"
    }
    else if(formValue.email.length<12){
        error.email="please Enter minimum 12character"
    }

     if(!formValue.password){
        error.password="please Enter the Password"
    }
    else if(validpass.test(formValue.password)){
        error.password="please Enter the correct"
    }
    else if(formValue.password.length<9){
        error.password="please Enter maximum 9character"
    }
    console.log(error);
    return error;
};
 const Login = () => {
    let history=useHistory()
    function Logout() {
        window.sessionStorage.clear()
        history.push("/login")
    }
     const login=useFormik({
     initialValues:{
        email:'',
        password:''
         
     },
     
     validate:validateErrors,
         onSubmit:(values)=>{
             console.log(values);
             axios.post('https://project-node-1.herokuapp.com/postLoginData',values)
             .then((res)=>{
                 console.log("axios res",res);
                 window.sessionStorage.setItem("Token",res.data.token)
                 history.push("/")
             })
             .catch((err)=>{
                 console.log("error",err);
             })
         }
     
     });
    return (
       
            
        <div>
             <Container/>
            <div class="bd-example">
  <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
    
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="food.jpg" class="d-block w-100 cc" alt="..." ></img>
        <div class="carousel-caption d-none d-md-block">
          <h1 className="same">Sign In</h1>
          <Link to={'/'} className="Lin">HOME <i class="fal fa-long-arrow-right pp"></i> </Link> <a className="lin">Sign In</a>
        </div>
      </div>
      
      
    </div>
    
  </div>
</div>
           
        <form onSubmit={login.handleSubmit}>
               <h1 className="pala">SIGN IN</h1>
               <i class="fas fa-user me"></i><input type="email" name="email" placeholder=" Enter Email"  value={login.values.email} onChange={login.handleChange} className="kichu"/>
              {login.errors.email ?
                  (<span style={{color:'red'}}>{login.errors.email}</span>):null}
              
              <br/> <i class="fas fa-lock me"></i><input type="password" name="password" placeholder="Enter password" value={login.values.password} onChange={login.handleChange } className="kich"/>
                { login.errors.password ?
                (<span style={{color:'red'}}>{login.errors.password}</span>): null}
            <br/> <button type="submit" className="ashol" disabled={!(login.isValid && login.dirty)}>Submit</button><Button className="parchi" onClick={Logout}>Logout</Button>{' '}
            <h2 className="aggo">Not Registered</h2>
            <Link to="/regi" className="apod"> Create an account</Link>
              </form> 
          <footer className="change">
                <Container>
                <div class="row">
                    <div class="col-lg-8 col-md-12 col-sm-12">
                    <div class="row">
                        <div class="col-lg-6 col-md-2 col-sm-2">
                            <h4>Subscribe</h4>
                        </div>
                        <div class="col-lg-6 col-md-2 col-sm-2">
                            <h6>Get the latest updates and offers</h6>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-8 col-md-6 col-sm-6">
                            <input type="Email" id="Email" placeholder="Your email" className="inp"></input>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <button className="man">Subscribe</button>
                        </div>
                    </div>
                    </div>
                    <div class="col-lg-2 col-md-3 col-sm3">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12">
                            <h3>Follow Us</h3>
                            </div>
                        </div>
                        <div class="row">
                    <div class="col-lg-3 col-md-3 col-sm-6" >
                    <i class="fab fa-instagram inn"></i>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-6" >
                    <i class="fab fa-facebook inn"></i>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-6" >
                    <i class="fab fa-twitter inn"></i>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-6" >
                    <i class="fab fa-google-plus-g inn"></i>
                    </div>
                </div>
                    </div>
                    <div class="col-lg-2 col-md-12 col-sm-12">
                      <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12">
                        <h3>Contact us</h3>
                        </div>
                        
                      </div>
                      <div class="row">
                        <div class="col-lg-12 col-md-6 col-sm-12">
                        <img src="phone.webp" className="pic"></img> <a className="hov">1-90074-127</a><br/>
                        we work everyday
                        </div>
                      </div>
             
                 
                </div>
                </div>
                
                
               </Container>
            </footer>
        </div>
        
    )
}
export default Login