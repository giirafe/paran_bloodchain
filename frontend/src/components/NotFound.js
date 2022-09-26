import {Container} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';

const NotFound = () => {

    return (
        <Container className={"text-center"} fluid>
            <h1>페이지가 없거나, 접근 권한이 없습니다.</h1>
            {<a href="/">돌아가기</a>}
        </Container>
    )
}

export default NotFound;