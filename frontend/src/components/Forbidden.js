import {Container} from 'react-bootstrap';

const Forbidden = () => {
    return (
        <Container className={"text-center"} fluid>
            <h1>401 Forbidden</h1>
            <a href="/">돌아가기</a>
        </Container>
    )
}

export default Forbidden;