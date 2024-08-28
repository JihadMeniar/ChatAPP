import {Alert,Button,Form,Row,Col,Stack} from "react-bootstrap"

const Login = () => {
    return <>
    <Form>
        <Row style={{
            height:"100vh",
            justifyContent:"center"
        }}
        >
            <Col xs={6}>
            <Stack gap="3">
            <h2>Connexion</h2>

            <Form.Control type="email" placeholder="Email"/>
            <Form.Control type="password" placeholder="Mot de passe"/>
            <Button variant="primary" type="submit">
                Connexion
            </Button>
                {/* <Alert variant="danger" >
                    <p>Une erreur est survenue</p>
                </Alert> */}
            
            </Stack>
            </Col>
        </Row>
    </Form>
    
    </> ;
}
 
export default Login;