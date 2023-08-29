import Container from 'react-bootstrap/Container'
import { useEffect, useState } from 'react'
import { GetAllUsers } from '../utils/apiCalls.js'


const MainPage = (props) => {
    const [users, setUsers] = useState([])
    
    async function getUsers() {
        const data = await GetAllUsers()
        console.log(data)
        setUsers(data)
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <h3>This is the main page</h3>
    )

}

export default MainPage