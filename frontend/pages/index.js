import React, {useState, useEffect} from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Router, useRouter } from 'next/router'

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL

export default function Home() {
  const router = useRouter()
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");

    const submitForm = (firstName, lastName, phone) => {
      axios.post(`${SERVER_URL}/member/add`, {
          firstName,
          lastName,
          phone
      }).then(res => {
        localStorage.setItem('user-vaccine-id',res.data._id)
        router.push('/selectVaccineDate')
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
              <Card.Title>ลงทะเบียนรับวัคซีน</Card.Title>
              <div class="form-group">
                <label >First Name</label>
                <input
                  type="text"
                  class="form-control"
                  onChange={(text) => setFirstName(text.target.value)}
                />
              </div>

              <div class="form-group">
                <label >Last Name</label>
                <input
                  type="text"
                  class="form-control"
                  onChange={text => setLastName(text.target.value)}
                />
              </div>

              <div class="form-group">
                <label >Phone number</label>
                <input
                  type="text"
                  class="form-control"
                  onChange={text => setPhone(text.target.value)}
                />
              </div>


              <button onClick={() => submitForm(firstName, lastName, phone)} type="submit" class="btn btn-danger">
                Submit
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
