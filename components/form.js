import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export function Form() {
  const { id } = useParams()
  const [dname, setDname] = useState('')
  const [vtype, setVtype] = useState('')
  const [vno, setVno] = useState('')
  const [sdate, setSdate] = useState('')
  const [stime, setStime] = useState('')
  const [edate, setEdate] = useState('')
  const [etime, setEtime] = useState('')
  const [ndays, setNdays] = useState('')
  const [open, setOpen] = useState('')
  const [close, setClose] = useState('')
  const [total, setTotal] = useState('')
  const [tmile, setTmile] = useState('')
  const [cdetails, setCdetails] = useState('')
  const [mobile, setMobile] = useState('')
  const [tdetails, setTdetails] = useState('')

  useEffect(() => {
    fetch("http://localhost:6868/form/" + id)
      .then(res => res.json())
      .then((data) => {
        setDname(data[0].dname)
        setVtype(data[0].vtype)
        setVno(data[0].vno)
        setSdate(data[0].sdate)
        setStime(data[0].stime)
        setEdate(data[0].edate)
        setEtime(data[0].etime)
        setNdays(data[0].ndays)
        setOpen(data[0].open)
        setClose(data[0].close)
        setTotal(data[0].total)
        setTmile(data[0].tmile)
        setCdetails(data[0].cdetails)
        setMobile(data[0].mobile)
        setTdetails(data[0].tdetails)
      })
  })
  const dlt = (id) => {
    var key = { id: id }
    axios.post("http://localhost:6868/delete", key)
      .then((res) => {
        if (res.data.status === "error") {
          alert("Data cannot be delete")
        }
        else if (res.data.status === "success") {
          alert("Data has been deleted")
        }
      })
  }
  return (
    <>
      <div className="row p-5">
        <div className="col-lg-3"></div>
        <div className="col-lg-5">
          <h1 className="heading">Vehicle Details</h1>
          <table cellPadding={2} className="print">
            <tr><th>Driver Name:</th><td >{dname}</td></tr>
            <tr><th>Vehicle Type:</th><td>{vtype}</td></tr>
            <tr><th>Vehicle No:</th><td>{vno}</td></tr>
            <tr><th>Starting Date:</th><td>{sdate}</td></tr>
            <tr><th>Starting Time:</th><td>{stime}</td></tr>
            <tr><th>Ending Date:</th><td>{edate}</td></tr>
            <tr><th>Ending Time:</th><td>{etime}</td></tr>
            <tr><th>No of Days:</th><td>{ndays}</td></tr>
            <tr><th>Opening KM:</th><td>{open}</td></tr>
            <tr><th>Closing KM:</th><td>{close}</td></tr>
            <tr><th>Total KM:</th><td>{total}</td></tr>
            <tr><th>Trip Mileage:</th><td>{tmile}</td></tr>
            <tr><th>Customer Details:</th><td>{cdetails}</td></tr>
            <tr><th>Phone Number:</th><td>{mobile}</td></tr>
            <tr><th>Trip Details:</th><td>{tdetails}</td></tr>
            <tr><td><button className="btn btn-danger mt-3" onClick={() => { dlt(id) }}>Delete</button></td>
            <td><Link to={`/update/${id}`}><button className="btn btn-primary  mt-3">Update</button></Link></td></tr>
          </table>
        </div>
        <div className="col-lg-4"></div>
      </div>
    </>
  );
}