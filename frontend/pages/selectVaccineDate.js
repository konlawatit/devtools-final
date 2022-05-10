import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Card, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, {useState, useEffect} from "react";
import { Router, useRouter } from 'next/router'
// import Form from "react-bootstrap/Form";
import axios from "axios";
const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL

export default function SelectVaccineDate() {
    const router = useRouter()
    const [selectDate, setSelectDate] = useState();

    const submitForm = (selectDate) => {
        axios.put(`${SERVER_URL}/member/edit`, {
            id: localStorage.getItem('user-vaccine-id'),
            date: selectDate
        }).then(res => {
          router.push('/confirm')
          // router.reload(window.location.pathname)
        //   axios.get(`http://localhost:3013/member/all`).then(res => {
        //     // set([])  
        // })
        }).catch(err => {
            console.log(err)
            alert('err')
        })
    }

  return (
    <div >
      <div>
        <img
          width="100%"
          src="https://cdn.discordapp.com/attachments/973489571461488680/973508060624584754/banner.af9b098f.jpg"
          alt=""
          class="banner"
        ></img>
        <div className="d-flex align-items-center justify-content-center mt-5">
        
          <Card style={{ width: "60rem" }}>
            <Card.Body>
              <Card.Title>กรุณาเลือกวันสำหรับการจองวัคซีน</Card.Title>
              <div class="form-group">
                <label >วันที่ต้องการรับการฉีดวัคซีน</label>
                {/* {selectDate} */}
                <Form.Control type="date" name='date_of_birth' onChange={(text) => setSelectDate(text.target.value)}  />
              </div>

        

              <button onClick={() => submitForm(selectDate)} type="submit" class="btn btn-danger">
                ยืนยันข้อมูล
              </button>

              {/* <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text> */}
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
