import React, {useState, useEffect} from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Card, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import Form from "react-bootstrap/Form";
import axios from "axios";
import { Router, useRouter } from 'next/router'

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL

export default function Summary() {
    const router = useRouter()

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
              <Card.Title>คุณได้ลงทะเบียนฉีดวัคซีนเรียบร้อย</Card.Title>
              <button onClick={() => router.push('/')} type="submit" class="btn btn-danger">
                กลับหน้าแรก
              </button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
