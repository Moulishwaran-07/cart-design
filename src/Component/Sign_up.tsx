import React, { useState } from "react";
import './Sign_up.css'
import signup from '../assets/image/signup.jpg'
import axios from "axios";
import { API_URL } from "./API_URL";
import { Link, useNavigate } from "react-router-dom";




interface FormType {
    username: string,
    mail: string,
    password: string,
    password2: string
}
interface data {
    password: string,
    confirm: string,
    username: string,
    mail: string
}

function Signup() {
    const [formData, setFormData] = useState<FormType>({
        username: "",
        mail: "",
        password: "",
        password2: ""
    })
    const [error, setError] = useState<data>({
        username: "",
        mail: "",
        password: "",
        confirm: ""

    })


    const navigate2 = useNavigate()
    const PostData = async () => {
        if (!formData.username && !formData.mail && !formData.password) {
            setError({
                ...error,
                username: "Enter the name",
                mail: "Enter the email id",
                password: "Enter the password",
                
            })
        }
        else {
            alert(" Your Account Created")
            await axios.post(API_URL, formData)
            navigate2("/cart")


        }
    }





    const navigate = useNavigate()
    const SignData = () => {
        navigate('/Login')
    }
    // const Navigate = useNavigate()
    // const PostData = async () => {
    //     await axios.post(API_URL, formData)
    //     Navigate('/cart')

    // }
    const handlechange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }


    const confirmPassword = (e: any) => {
        if (e.target.value !== formData.password) {
            console.log("true")
            setError({
                ...error,
                confirm: "Password Is Incorrect !"
            })
        }
        else {
            setError({
                ...error,
                confirm: ""
            })
            setFormData({
                ...formData,

            })
        }
    }


    const handleSubmit = (e: any) => {
        e.preventDefault()
        console.log(formData)
        setFormData({
            username: "",
            mail: "",
            password: "",
            password2: ""
        })
    }



    return (
        <div>
            <div className="design">
                <div className="page1">
                    <div className="part1">
                        <div className="image">
                            <img src={signup}></img>
                        </div>
                    </div>
                    <div className="part2">
                        <div className="title">
                            <h2>CREATE YOUR ACCOUNT</h2>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="name">
                                <input
                                    type="text"
                                    name="username"
                                    autoComplete="off"
                                    placeholder="Name"
                                    value={formData.username}
                                    onChange={handlechange}
                                >
                                </input>
                                <p className="errorPara">{error.password}</p>
                            </div>
                            <div className="mail">
                                <input
                                    type="email"
                                    name="mail"
                                    autoComplete="off"
                                    placeholder="Email"
                                    value={formData.mail}
                                    onChange={handlechange}
                                >
                                </input>
                                <p className="errorPara">{error.password}</p>
                            </div>
                            <div className="password">
                                <input
                                    type="password"
                                    name="password"
                                    autoComplete="off"
                                    placeholder="Password"
                                    value={formData.password}
                                    onChange={handlechange}

                                >
                                </input>
                                <p className="errorPara">{error.password}</p>

                            </div>
                            <div className="password2">
                                <input
                                    type="password"
                                    name="password2"
                                    autoComplete="off"
                                    placeholder="Confirm Password"
                                    value={formData.password2}
                                    onChange={handlechange}
                                    onChangeCapture={confirmPassword}
                                >
                                </input>
                                <p className="errorPara">{error.confirm}</p>

                            </div>
                            <h6 onClick={SignData}>Already Login !</h6>
                            <button onClick={PostData} className="btn2">SIGNUP</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup