import React,{useState} from 'react'
import { Form ,Button,Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './reg.css';
import { useHistory } from 'react-router-dom'
export default function Reg() {
    let history=useHistory()
    const validateEmail=RegExp('^([a-z0-9.-]+)@([a-z]{2,10}).([a-z.]{2,20})$');
    const validatePassword=RegExp('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$');
    const [inputState,setInputState]=useState({isError:{
          username : '',
          email : '',
          password :''
    }})
    const handleChange=(event)=>{
        event.persist();
        // console.log(event);
        let {name,value}=event.target
        let errHandle={...inputState.isError};
        switch(name){
            case "username":
                errHandle.username = value.length<6?"at least 6 char":"";
                
                break;
            case "email":
                errHandle.email=
                validateEmail.test(value)?"":"wrong answer"
                break;
           case "password":
                errHandle.password=
                validatePassword.test(value)?"":"invalid password"
                break;
                default:
                    break;
        }
        setInputState({...inputState,[name]:value,isError:errHandle})
        console.log("inputstate is:",inputState)
    }
    const Submithandler=(event)=>{
        event.preventDefault();
        console.log(inputState);
        const value = inputState;
        axios.post(' https://project-node-1.herokuapp.com/postUserData',value)
        .then((res)=>{
            console.log("axios res",res);
            window.sessionStorage.setItem("token_value",res.data.token)
             history.push("/login")

        })
        .catch((err)=>{
            console.log(err);
        })
    }
    return (
        <div className="con">
             <Container/>
            <div class="bd-example">
  <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
    
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="food.jpg" class="d-block w-100 cc" alt="..." ></img>
        <div class="carousel-caption d-none d-md-block">
          <h1 className="same">Registration</h1>
          <Link to={'/'} className="Lin">HOME <i class="fal fa-long-arrow-right pp"></i> </Link> <a className="lin">Registration</a>
        </div>
      </div>
      
      
    </div>
    
  </div>
</div>
           
           
           <Container>
            <h1 className="r"> Registration</h1>
           <button className="ek"><i class="fab fa-facebook-f volt"></i> FACEBOOK</button><button className="ekk"><i class="fab fa-twitter volt"></i>TWITTER</button><button className="ekkk"><i class="fab fa-google-plus-g volt"></i>GOOGLE+</button>
            <h4 className="alu"> OR</h4>
           <Form onSubmit={Submithandler}className="fo">
           <Form.Group className="mb-3 c" controlId="formBasicPassword">
           <Form.Label>UserName:</Form.Label>
           <Form.Control type="text" placeholder="enter username"  name="username" onChange={handleChange} className="jani"/>
            {inputState.isError.username.length>0&&(<span>{inputState.isError.username}</span>)}
            </Form.Group>
             <Form.Group className="mb-3 " controlId="formBasicEmail">
             <Form.Label>Email address:</Form.Label>
             <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleChange} className="janina"/>
             <p className="error">
             {inputState.isError.email.length>0&&(<span>{inputState.isError.email}</span>)}
             </p>
            
           </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange} className="sob"/>
          </Form.Group>
          <Button variant="primary" type="submit" className="sub">
           Submit
         </Button>
    </Form>
    </Container>
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