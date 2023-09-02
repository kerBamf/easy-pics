import Container from 'react-bootstrap/Container'
import { useEffect, useState } from 'react'
import { GetAllUsers } from '../utils/apiCalls.js'
import Carousel from 'react-bootstrap/Carousel'
import { Link } from 'react-router-dom'


const MainPage = (props) => {
    const [users, setUsers] = useState([])
    
    async function getUsers() {
        const data = await GetAllUsers()
        console.log(data)
        setUsers(data)
    }

    const userCards = users.map((value, idx) => {
        return (
            <Carousel.Item key={idx}>
                <img src={value.piclink}></img>
                <Carousel.Caption>
                    <Link to={`/users/${value.id}`}> <h5>{value.firstname} {value.lastname}</h5></Link>
                    <p>{value.blurb}</p>
                </Carousel.Caption>
            </Carousel.Item>
        )
    })

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <Carousel>
            {userCards}
        </Carousel>
    )

}

export default MainPage