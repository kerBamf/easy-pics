import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { GetOneUser } from '../utils/apiCalls'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'


function ShowPerson(props) {
    const { id } = useParams()
    const [person, setPerson] = useState({})

    async function getPerson(id) {
        const thisPerson = await GetOneUser(id)
        setPerson(thisPerson[0])
    }

    useEffect(() => {
        getPerson(id)
    }, [])

    return (
        <Container>
            <Row>
                <Col><img src={person.piclink}></img></Col>
                <Col>
                    <h2>{person.firstname}</h2>
                    <h2>{person.lastname}</h2>
                    <h2>{person.birthday}</h2>
                    <h2>{person.address}</h2>
                </Col>
            </Row>
            <Row>
                <p>{person.blurb}</p>
            </Row>
            <Link to='/'>Home</Link>
        </Container>
    )
    
}

export default ShowPerson