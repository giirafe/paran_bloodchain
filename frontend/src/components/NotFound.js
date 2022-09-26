import {Container} from 'react-bootstrap';

const NotFound = () => {
    return (
        <Container className={"text-center"} fluid>
            <h1>404 not found</h1>
            <a href="/">돌아가기</a>
        </Container>
    )
}

export default NotFound;