import React, {useState, useEffect} from "react";
import axios from 'axios';

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL

//components
import Profile from '../component/Profile'
import AddMember from "../component/AddMember";

const memberPayload = [
    {firstName: 'Konlawat', lastName: 'Hutsaithong', age: 22},
    {firstName: 'Konlawat2', lastName: 'Hutsaithong2', age: 21},
    {firstName: 'Konlawat3', lastName: 'Hutsaithong3', age: 24},
]

const members = () => {
    const [memberList, setMemberList] = useState([])

    useEffect(() => {
        axios.get(`${SERVER_URL}/member/all`).then(res => {
        console.log(res)    
        setMemberList(res.data)
        })
        // setMemberList(memberPayload)
    }, [])

    return (
        <div>
            <p>Members</p>
            <hr />
            <AddMember set={() => setMemberList()} />
            <hr />
            {memberList.map((data, index)=> (
                <Profile key={`profile-${index}`} id={data._id} firstName={data.firstName} lastName={data.lastName} age={data.age} />
            ))}
            {console.log(11111,memberList)}
        </div>
    )
}

export default members;