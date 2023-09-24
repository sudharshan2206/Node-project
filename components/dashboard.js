import React, { useEffect, useState } from "react";
import { Menu } from "./menu";
import { Link, useParams } from "react-router-dom";
import { Button } from "bootstrap";
import axios from "axios";
import Typewriter from 'typewriter-effect';

export function Dashboard() {
  <Menu />
  var { id } = useParams()
  function Handleget(event) {
    event.preventDefault()
    var dname = document.getElementById("dname").value
    var vtype = document.getElementById("vtype").value
    var vno = document.getElementById("vno").value
    var sdate = document.getElementById("sdate").value
    var stime = document.getElementById("stime").value
    var edate = document.getElementById("edate").value
    var etime = document.getElementById("etime").value
    var ndays = document.getElementById("ndays").value
    var open = document.getElementById("open").value
    var close = document.getElementById("close").value
    var total = document.getElementById("total").value
    var tmile = document.getElementById("tmile").value
    var cdetails = document.getElementById("cdetails").value
    var mobile = document.getElementById("mobile").value
    var tdetails = document.getElementById("tdetails").value

    var key = {
      dname: dname,
      vtype: vtype,
      vno: vno,
      sdate: sdate,
      stime: stime,
      edate: edate,
      etime: etime,
      ndays: ndays,
      open: open,
      close: close,
      total: total,
      tmile: tmile,
      cdetails: cdetails,
      mobile: mobile,
      tdetails: tdetails
    }

    if (dname == '') {
      alert("Enter the driver name")
    }
    else if (vtype == '') {
      alert("Enter the vehicle type")
    }
    else if (vno == '') {
      alert("Enter the vehicle number")
    }
    else if (sdate == '') {
      alert("Enter the start date")
    }
    else if (stime == '') {
      alert("Enter the start time")
    }
    else if (edate == '') {
      alert("Enter the end date")
    }
    else if (etime == '') {
      alert("Enter the end time")
    }
    else if (ndays == '') {
      alert("enter the number of days")
    }
    else if (open == '') {
      alert("enter the opening kms")
    }
    else if (close == '') {
      alert("enter the closing kms")
    }
    else if (total == '') {
      alert("enter the total kms")
    }
    else if (tmile == '') {
      alert("enter the trip mileage")
    }
    else if (cdetails == '') {
      alert("enter the number of customer details")
    }
    else if (mobile == '') {
      alert("enter the phone number")
    }
    else if (tdetails == '') {
      alert("enter the trip details")
    }
    else {
      axios.post("http://localhost:6868/logform", key)
        .then((res) => {
          if (res.data.status === "error") {
            alert("Data has not been stored")
            window.location.reload()
          }
          else if (res.data.status === "success") {
            alert("Data has been stored")
            window.location.href = `/form/${id}`
          }
        })
    }
  }
  return (
    <>
      <div className="bgD p-5">
        <h1 className="text-center"><Typewriter options={{
    strings: ['KR TOURS AND TRAVELS'],
    autoStart: true,
    loop: true,
  }}></Typewriter></h1>
        <h3 className="text-center">DRIVER LOG BOOK</h3>
        <form class="row g-3" onSubmit={Handleget}>
          <div className="col-lg-2"></div>
          <div class="col-lg-3">
            <label for="validationDefault01" class="form-label">Driver Name</label>
            <input type="text" id="dname" class="form-control" />
          </div>
          <div className="col-lg-2"></div>

          <div class="col-lg-3">
            <label for="validationDefault02" class="form-label" required>Vehicle Type</label>
            <input type="text" class="form-control" id="vtype" />
          </div>
          <div className="col-lg-2"></div>

          <div className="col-lg-2"></div>
          <div class="col-lg-3">
            <label for="validationDefaultUsername" class="form-label">Vehicle No</label>
            <input type="text" class="form-control" id="vno" aria-describedby="inputGroupPrepend2" />
          </div>
          <div className="col-lg-2"></div>

          <div class="col-lg-3">
            <label for="validationDefault03" class="form-label">Starting Date</label>
            <input type="date" class="form-control" id="sdate" />
          </div>
          <div className="col-lg-2"></div>

          <div className="col-lg-2"></div>
          <div class="col-lg-3">
            <label for="validationDefault04" class="form-label">Starting Time</label>
            <input type="time" class="form-control" id="stime" />
          </div>
          <div className="col-lg-2"></div>

          <div class="col-lg-3">
            <label for="validationDefault05" class="form-label">End Date</label>
            <input type="date" class="form-control" id="edate" />
          </div>
          <div className="col-lg-2"></div>
          
          <div className="col-lg-2"></div>
          <div class="col-lg-3">
            <label for="validationDefault05" class="form-label">End Time</label>
            <input type="time" class="form-control" id="etime" />
          </div>
          <div className="col-lg-2"></div>

          <div class="col-lg-3">
            <label for="validationDefault05" class="form-label">No of Days</label>
            <input type="number" class="form-control" id="ndays" />
          </div>
          <div className="col-lg-2"></div>

          <div className="col-lg-2"></div>
          <div class="col-lg-3">
            <label for="validationDefault05" class="form-label">Opening KM</label>
            <input type="number" class="form-control" id="open" />
          </div>
          <div className="col-lg-2"></div>

          <div class="col-lg-3">
            <label for="validationDefault05" class="form-label">Closing KM</label>
            <input type="number" class="form-control" id="close" />
          </div>
          <div className="col-lg-2"></div>
           
          <div className="col-lg-2"></div>
          <div class="col-lg-2">
            <label for="validationDefault05" class="form-label">Total KMs</label>
            <input type="number" class="form-control" id="total" />
          </div>
          
          <div class="col-lg-2">
            <label for="validationDefault05" class="form-label">Trip Mileage</label>
            <input type="number" class="form-control" id="tmile" />
          </div>

          <div class="col-lg-2">
            <label for="validationDefault05" class="form-label">Customer Details</label>
            <input type="number" class="form-control" id="cdetails" />
          </div>
          <div class="col-lg-2">
            <label for="validationDefault05" class="form-label">Phone No</label>
            <input type="tel" class="form-control" id="mobile" />
          </div>

          <div className="col-lg-4"></div>
          <div class="col-md-5">
            <label for="validationDefault05" class="form-label">Trip Details</label>
            <textarea rows="4" class="form-control" id="tdetails"></textarea>
          </div>
          <div className="col-lg-5"></div>
          
          <div class="col-lg-2">
            <button class="btn btn-primary" type="submit">Submit form</button>
          </div>
          <div className="col-lg-5"></div>
        </form>
      </div>
    </>
  );
}