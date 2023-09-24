import React from "react";
import { Reg } from "./registration";
import axios from "axios";
import { Link } from "react-router-dom";

export function Login() {
    <Reg />
    function handlelogin(event) {
        event.preventDefault()
        var username = document.getElementById("username").value
        var password = document.getElementById("password").value

        var key = {
            username: username,
            password: password
        }
        if (username == '') {
            alert("Enter the username")
        }
        else if (password == '') {
            alert("Enter the password")
        }
        else {
            axios.post("http://localhost:6868/login", key)
                .then((res) => {
                    if (res.data.status === "empty_set") {
                        alert("Please register the form")
                    }
                    else if (res.data.status === "success") {
                        var id = res.data.id
                        alert("Login successful")
                        window.location.href = `/dashboard/${id}`
                    }
                    else if (res.data.status === "invalid_user") {
                        alert("Invalid user")
                    }
                    else {
                        alert("User invalid")
                    }
                })
        }
    }
    return (
        <>
            <div className="bgLogin">
                <h1 className="text-center p-5">LOGIN</h1>
                <form onSubmit={handlelogin} className="row">
                    <div className="col-lg-5 col-1"></div>
                    <div className="col-lg-3 col-10">
                        <label>Username:</label>
                        <input type="text" placeholder="username" id="username" className="ms-2" required /><br></br><br></br>
                    </div>
                    <div className="col-lg-4 col-1"></div>

                    <div className="col-lg-5 col-1"></div>
                    <div className="col-lg-3 col-10">
                        <label>password:</label>
                        <input type="password" placeholder="password" id="password" className="ms-2" required /><br></br><br></br>
                    </div>
                    <div className="col-lg-4 col-1"></div>

                    <div className="col-lg-6 col-5"></div>
                    <div className="col-lg-2 col-2">
                        <button className="btn btn-success">LOGIN</button>
                    </div>
                    <div className="col-lg-4 col-5"></div>
                </form>
            </div>
        </>
    );
}