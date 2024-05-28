
import axios from "axios";
import React, { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import user from '../assets/image/image.jpg'
import './Login.css'
import { API_URL } from "./API_URL";

interface LogType {
    username: string,
    password: string
}
interface LogDetail {
    username1: string,
    password1: string
}
function Login() {

    const [loginData, setLoginData] = useState<LogType>({
        username: "",
        password: ""
    })

    const navigate = useNavigate()
    const LogData = () => {
        navigate('/')
    }

    const handlechange = (e: any) => {
        const { name, value } = e.target
        setLoginData({
            ...loginData,
            [name]: value
        })
    }
    const [ReadData, setReadData] = useState<LogType[]>([])
    const getData = async () => {
        const resp = await axios.get(API_URL)
        setReadData(resp.data)
    }
    const [error, setError] = useState<LogDetail>({

        username1: "",
        password1: ""

    })
    useEffect(()=>{
        getData()
    },[loginData.username,loginData.password])


    const Navigate1 = useNavigate()
    const handleSubmit = (ee: any) => {
        ee.preventDefault()
        getData();

        ReadData.map((element: any) => {
            if ((element.username === loginData.username) && (element.password === loginData.password)) {
                Navigate1('/cart')
                // console.log("world")
            }
            else {

                setError({
                    username1: "Enter the Name",
                    password1: "Enter the Password",

                })
            }


        })
        // console.log(loginData)
        setLoginData({
            username: "",
            password: "",
        })
    }






    return (
        <div>
            <div className="design">
                <div className="page">
                    <div className="image">
                        <img src={user}></img>
                    </div>
                    <div className="login">
                        <div className="top">
                            <h4>Welcome back</h4>
                        </div>
                        <div className="title">
                            <h2>Login  your  account</h2>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="name">
                                <h3>USERNAME</h3>
                                <input
                                    type="text"
                                    name="username"
                                    autoComplete="off"
                                    value={loginData.username}
                                    onChange={handlechange}
                                >
                                </input>
                                <p className="errorPara">{error.username1}</p>
                            </div>
                            <div className="password">
                                <h3>PASSWORD</h3>
                                <input
                                    type="password"
                                    name="password"
                                    autoComplete="off"
                                    value={loginData.password}
                                    onChange={handlechange}
                                >
                                </input>
                                <p className="errorPara">{error.password1}</p>
                            </div>

                            <h6 onClick={LogData}>Create Your Account !</h6>

                            <button>Login</button>
                        </form>
                        
                    </div>

                </div>

            </div>
        </div >
    )
}
export default Login 