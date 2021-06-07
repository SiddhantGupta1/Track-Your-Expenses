import React,{useState,useEffect} from 'react'
import './Login.css'
import { useHistory } from 'react-router-dom';

var i = 0;
var storage = [];
const Login = () => {
    const history = useHistory();

    useEffect(() => {
        const data = localStorage.getItem('store');
        const key = localStorage.getItem('index')
        if(data && key){
            storage = JSON.parse(data);
            i = JSON.parse(key)
        }
        
    }, []);

    function toggle1(){
        const slide = document.getElementById('login-slides');
        slide.style.transform = 'translateX(102%)';

        const filter = document.getElementById('login');
        const sort = document.getElementById('register');
        filter.style.transform = 'translateX(-100%)';
        sort.style.transform = 'translateX(-100%)';
    }
    function toggle0(){
        const slide = document.getElementById('login-slides');
        slide.style.transform = 'translateX(0%)';

        const sort = document.getElementById('register');
        const filter = document.getElementById('login');
        sort.style.transform = 'translateX(0%)';
        filter.style.transform = 'translateX(0%)';
    }

    const [name,setName] = useState();
    const [pass1,setPass1] = useState();
    const [pass2,setPass2] = useState();
    const [lname, setLname] = useState();
    const [lpass,setLpass] = useState();
    
    

    const LoginBtn = () =>{
        for(var j=0;j<storage.length;j++){
            if(lname === storage[j].name && lpass === storage[j].password){
                history.push("/home/"+storage[j].name)
                document.getElementById('l-nomatch').style.display = "none"
            }
            else
                document.getElementById('l-nomatch').style.display = "block"
    }
    }
    const RegisterBtn = () => {
        if(pass1 === pass2){
            document.getElementById('r-nomatch').style.display = "none"
            storage[i] = {name: name, password: pass1}
            console.log(storage)
            i++;
            localStorage.setItem('store', JSON.stringify(storage))
            localStorage.setItem('index', JSON.stringify(i))
        }
        else
            document.getElementById('r-nomatch').style.display = "block"
    }

    return (
        <div className="login-register">
            <div className="login-slide">
                <div id="login" className="login">
                    <input type="text" id="l-userName" placeholder="User Name" onChange={event => setLname(event.target.value)} />
                    <input type="password" id="l-password" placeholder="Password" onChange={event => setLpass(event.target.value)} />
                    <label id="l-nomatch" style={{color:"red", display:"none", margin:"-10px 0 10px 0", fontWeight:"600"}}>Wrong Credentials!</label>
                    <button onClick={LoginBtn} className="login-btn">Login</button>
                </div>
                <div id="register" className="register">
                    <input type="text" id="r-userName" placeholder="User Name" onChange={event => setName(event.target.value)} />
                    <input type="password" id="r-password1" placeholder="Password" onChange={event => setPass1(event.target.value)} />
                    <label>Re-enter password</label>
                    <input type="password" id="r-password2" placeholder="Password" onChange={event => setPass2(event.target.value)} />
                    <label id="r-nomatch" style={{color:"red", display:"none", margin:"-10px 0 10px 0", fontWeight:"600"}}>Password did not match! Try Again</label>
                    <button onClick={RegisterBtn} className="register-btn">Register</button>
                </div>
           </div>
           <div className="login-slider">
               <div id="login-slides"></div>
               <button onClick={toggle0} className="login-slider-btn" >Login</button>
               <button onClick={toggle1} className="register-slider-btn" >Register</button>
           </div>
        </div>
    )
}

export default Login;