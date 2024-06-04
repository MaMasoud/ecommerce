import { Link } from "react-router-dom"
import { Container } from "react-bootstrap"


export default function Error() {
    return (
        <Container className="notFound">
            <h1>404</h1>
            <p>Page not found</p>
            <Link to="/" replace={true}>Go back to home</Link>
        </Container>
    )
}
