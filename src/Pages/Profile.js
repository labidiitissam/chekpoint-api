import axios from 'axios'
import React,{ useEffect ,useState, useNavigate } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Img from './profile.png'

const Profile = () => {

    const {id} =useParams()
    const [user ,setUser] =useState({})
    
    useEffect(()=>{
        axios.
        get(`https://jsonplaceholder.typicode.com/users/?id=${id}`)
         .then((res)=> setUser(res.data[0]))
         .catch((err)=> console.log(err))
    },[])

    const navigate = useNavigate()

  return (
    <div>
    <Card style={{ width: '18rem' ,marginTop : "8%" }}>
    <Card.Img variant="top" src={Img} />
    <Card.Body>
      <Card.Title>{user.name}</Card.Title>
      <Card.Text>{user.email}</Card.Text>
      <Card.Text>{user.phone}</Card.Text>
      <Button onClick={()=>navigate(-1)}>Go back</Button>
      </Card.Body>
      </Card>
      
     </div>
  )
}

export default Profile
