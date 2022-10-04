import {Box, Button, ButtonList, Col, Container, Divider, Img, Row, Text} from '../../elements'
import { LockOutlined, MessageOutlined } from '@ant-design/icons';

import {BUTTON_LIST} from '../../../__constants__'

const Header =() => {
    return (
        <Container variant='fluid'>
            <Row mt='8px' v='center' >
                <Col borderBottom='1px sold #dadce0' variant='auto'  >
                 <Button> <Img width='40px' height='40px' src="icon.svg"/> </Button>
                </Col>
                <Col borderBottom='1px sold #dadce0' variant='10' >
                <Box>
                    <Box><Text variant='body1' pl='8px'>Untitled spreadsheet</Text></Box>
                </Box>
                <Box display='flex'>
                    <ButtonList buttonsName={BUTTON_LIST} />
                </Box>
                
                </Col>
                <Col  >
                <Box display='flex' alignItems='center' >
                   <Button mr='12px' isHover icon={<MessageOutlined />}/>
                   <Button mr='22px' variant='primary' isHover icon={<LockOutlined />}> Share </Button>
                   <Button variant='avatar'>a</Button>
                </Box>
                </Col>
            </Row>
            <Row>
                <Col variant='12'>
                <Divider/>
                </Col>
            </Row>
        </Container>
    )
}

export default Header