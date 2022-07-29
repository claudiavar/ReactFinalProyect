import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
export const Navcategory=()=>{
    return(
        <>
            <Row>
                    <Col lg={12}>
                        <Breadcrumb className='mt-2'>
                            <Breadcrumb.Item>Inicio</Breadcrumb.Item>
                            <Breadcrumb.Item>Tecnología</Breadcrumb.Item>
                            <Breadcrumb.Item> Celulares y Tablets </Breadcrumb.Item>
                            <Breadcrumb.Item>Celulares y Smartphones</Breadcrumb.Item>
                            <Breadcrumb.Item>Samsung</Breadcrumb.Item>
                        </Breadcrumb> 
                    </Col> 
                </Row>
        </>
    )
}