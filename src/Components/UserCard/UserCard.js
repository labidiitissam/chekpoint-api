
import React from 'react'
import { Card, Button } from 'react-bootstrap'
import img from './profile.png'
import { Link } from 'react-router-dom'

const UserCard = ({user}) => {
  return (
    <div>
    <Card style={{ width: '18rem' ,marginTop : "8%" }}>
    <Card.Img variant="top" src={img} />
    <Card.Body>
      <Card.Title>{user.name}</Card.Title>
      <Card.Text>{user.email}</Card.Text>
      <Card.Text>{user.phone}</Card.Text>
      <Button variant="primary">
      <Link to={`/profile/${user.id}`} >Go to profile</Link> </Button>
    </Card.Body>
  </Card>
    </div>
  )
}

export default UserCard
