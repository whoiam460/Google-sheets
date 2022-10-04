import { Col, Container, Row } from "../elements"

const AppLayout =(props) => {
    const {aside, header, headerNavigation, content} = props
    return (<Container variant='fluid'>
        <Row>
            <Col variant='12'>
                {header}
            </Col>
        </Row>
        <Row>
            <Col variant='11'>
                <Row>
                    <Col variant='12'>
                    {headerNavigation}
                    </Col>
                    <Col>
                    {content}
                    </Col>
                </Row>
            
            </Col>
            <Col cw='auto'>
            {aside}
            </Col>
        </Row>

    </Container>)
}

export default AppLayout