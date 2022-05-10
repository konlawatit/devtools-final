import React, { useState, useEffect } from "react";
import { Router, useRouter } from 'next/router'
import Swal from "sweetalert2";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
// import 'dotenv/config'

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL

const Profile = ({ firstName, lastName, age, id }) => {
  const router = useRouter()
  const [editFirstName, setEditFirstName] = useState(firstName);
  const [editLastName, setEditLastName] = useState(lastName);
  const [editAge, setEditAge] = useState(age);
  const [modal, setModal] = useState(false);

  
  const closeModal = () => {
      setModal(false)
      setEditAge(age)
      setEditFirstName(firstName)
      setEditLastName(lastName)
    };
  const openModal = () => setModal(true);

  const delBtn = () => {
    Swal.fire({
        title: 'จะลบมั้ย',
        showDenyButton: true,
        // showCancelButton: true,
        confirmButtonText: 'ลบ',
        denyButtonText: `ไม่ลบ`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          console.log(id)
          axios.delete(`${SERVER_URL}/member/del`, {headers: {
            id: id
          }}).then(result => {
            Swal.fire('ลบ!', '', 'success')
            router.reload(window.location.pathname)
          }).catch(err => {
            console.log(err)
            Swal.fire('ลบไม่ได้', '', 'info')
          })
        }
      })
  };

  const saveBtn = () => {
    axios.put(`${SERVER_URL}/member/edit`, {
      id: id,
      firstName: editFirstName,
      lastName: editLastName,
      age: editAge
    }).then(result => {
      router.reload(window.location.pathname)
    })
  };

  return (
    <>
      <p>
        ID: {id} | First name: {firstName} | Last name: {lastName} | Age: {age}|{" "}
        <button onClick={openModal}>edit</button> <button onClick={delBtn} >delete</button>
      </p>

      <Modal id="loginModal" show={modal} onHide={closeModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>แก้ไข</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <p>
            First name:{" "}
            <input
              type="text"
              value={editFirstName}
              onChange={(text) => setEditFirstName(text.target.value)}
            />
          </p>
          <p>
            Last name:{" "}
            <input
              type="text"
              value={editLastName}
              onChange={(text) => setEditLastName(text.target.value)}
            />
          </p>
          <p>
            Age:{" "}
            <input type="text" value={editAge} onChange={(text) => setEditAge(text.target.value)} />
          </p>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="success" onClick={saveBtn}>
            save
          </Button>
          <Button id="close" variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Profile;
