import React, {useState, useEffect} from "react";
import axios from "axios";
import { Router, useRouter } from 'next/router'

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL

const AddMember = ({set}) => {
  const router = useRouter()
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState("");

    const submitForm = (firstName, lastName, age) => {
      axios.post(`${SERVER_URL}/member/add`, {
          firstName,
          lastName,
          age
      }).then(res => {
        router.reload(window.location.pathname)
      //   axios.get(`http://localhost:3013/member/all`).then(res => {
      //     // set([])  
      // })
      }).catch(err => {
          console.log(err)
          alert('err')
      })
  }

  return (
  <>
    <p>First name: <input type="text"  onChange={(text) => setFirstName(text.target.value)}  /></p>
    <p>Last name: <input type="text"  onChange={text => setLastName(text.target.value)}  /></p>
    <p>Age: <input type="text"  onChange={text => setAge(text.target.value)}  /></p>
    <p><button onClick={() => submitForm(firstName, lastName, age)} >Submit</button></p>
  </>
  );
};

export default AddMember;
