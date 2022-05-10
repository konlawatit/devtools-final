import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Card, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import Form from "react-bootstrap/Form";
import axios from "axios";
import { Router, useRouter } from 'next/router'

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL



export default function Confirm() {
    const router = useRouter()

    const confirm = () => {
        router.push('/summary')
    }

    const cancel = () => {
        axios.delete(`${SERVER_URL}/member/del`, {
            headers: {
                id: localStorage.getItem('user-vaccine-id')
            }
        }).then(res => {
            localStorage.setItem('user-vaccine-id',"")
            router.push('/')
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
              <Card.Title>กรุณายืนยันการลงทะเบียน</Card.Title>

        

              <button onClick={() => confirm()} type="submit" class="btn btn-danger">
                ยืนยันการลงทะเบียน
              </button>
              <button onClick={() => cancel()} type="submit" class="btn btn-secondary m-2">
                ยกเลิก
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
