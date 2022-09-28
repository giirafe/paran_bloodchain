import {Container} from 'react-bootstrap';

const NotFound = () => {

    return (
        <Container className={"text-center"} fluid>
            <h1>404 Not Found</h1>
            {<a href="/">돌아가기</a>}
        </Container>
    )
}

export default NotFound;