import React from "react";
import axios from "axios";

export function Reg() {
    function regform(event) {
        event.preventDefault()
        var fname = document.getElementById("fname").value
        var lname = document.getElementById("lname").value
        var phone = document.getElementById("phone").value
        var email = document.getElementById("email").value
        var password = document.getElementById("password").value

        var key = {
            fname: fname,
            lname: lname,
            phone: phone,
            email: email,
            password: password
        }
        if (fname == '') {
            alert("Enter the firstname")
        }
        else if (lname == '') {
            alert("Enter the lastname")
        }
        else if (phone == '') {
            alert("Enter the phone number")
        }
        else if (email == '') {
            alert("Enter the email address")
        }
        else if (password == '') {
            alert("Enter the password")
        }
        else {
            axios.post("http://localhost:6868/tour", key)
                .then((res) => {
                    if (res.data.status === "error") {
                        alert("Data has not been registered")
                        window.location.reload()
                    }
                    else if (res.data.status === "success") {
                        alert("Data has been registered")
                        window.location.href = '/login'
                    }
                })
        }
    }
    return (
        <>
            <div className="bgForm">
                <h1 className="text-white text-center">REGISTRATION FORM</h1>
                <form class="row g-3 text-white container-fluid" onSubmit={regform}>
                    <div className="col-md-4"></div>
                    <div class="col-md-4">
                        <label for="validationDefault01" class="form-label">First name:</label>
                        <input type="text" className="form-control boxInput" id="fname" required />
                    </div>
                    <div className="col-md-4"></div>
                    <div className="col-md-4"></div>
                    <div class="col-md-4">
                        <label for="validationDefault02" class="form-label">Last name:</label>
                        <input type="text" className="form-control boxInput" id="lname" required />
                    </div>
                    <div className="col-md-4"></div>
                    <div className="col-md-4"></div>
                    <div class="col-md-3">
                        <label for="validationDefault05" class="form-label">Phone:</label>
                        <input type="tel" className="form-control boxInput" id="phone" required />
                    </div>
                    <div className="col-md-4"></div>
                    <div className="col-md-4"></div>
                    <div class="col-md-4">
                        <label for="validationDefaultUsername" class="form-label">Email:</label>
                        <div class="input-group">
                            <span class="input-group-text" id="inputGroupPrepend2">@</span>
                            <input type="text" className="form-control boxInput" id="email" aria-describedby="inputGroupPrepend2" required />
                        </div>
                    </div>
                    <div className="col-md-4"></div>
                    <div className="col-md-4"></div>
                    <div class="col-md-4">
                        <label for="validationDefaultUsername" class="form-label">Username:</label>
                        <input type="text" className="form-control boxInput" id="username" aria-describedby="inputGroupPrepend2" required />
                    </div>
                    <div className="col-md-4"></div>
                    <div className="col-md-4"></div>
                    <div class="col-md-3">
                        <label for="validationDefault05" class="form-label">Password:</label>
                        <input type="password" className="form-control boxInput" id="password" required />
                    </div>
                    <div className="col-md-4"></div>
                    <div className="col-4">&nbsp;</div>
                    <div class="col-5">
                        <button class="btn btn-success" type="submit">Submit form</button>
                    </div>
                    <div className="col-3">&nbsp;</div>
                </form>
            </div>
        </>
    );
}