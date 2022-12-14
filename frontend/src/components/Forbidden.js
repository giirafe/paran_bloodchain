import {useEffect} from 'react'
import {Container} from 'react-bootstrap';

const Forbidden = () => {
    useEffect(() => {
        window.location.reload();
    },[])
    return (
        <Container className={"text-center"} fluid>
            <h1>401 Unathorized</h1>
            <a href="/">돌아가기</a>
        </Container>
    )
}

export default Forbidden;